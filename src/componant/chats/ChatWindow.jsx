import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import TicTacToeGame from "../../game/tic/TicTacToeGame";
import { db, auth } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useTranslation } from "react-i18next";

export default function ChatWindow({ chatId }) {
  const [showGame, setShowGame] = useState(false);
  const [currentPlayerId, setCurrentPlayerId] = useState(null);
  const [playerX, setPlayerX] = useState(null);
  const [playerO, setPlayerO] = useState(null);

  const { t } = useTranslation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentPlayerId(user.uid);
      } else {
        console.warn(" User not logged in.");
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const gameRef = doc(db, "games", chatId);
    const fetchGameData = async () => {
      const gameDoc = await getDoc(gameRef);
      if (gameDoc.exists()) {
        const data = gameDoc.data();
        setPlayerX(data.playerX);
        setPlayerO(data.playerO);
      }
    };

    if (chatId) {
      fetchGameData();
    }
  }, [chatId]);

  const selectSide = async (side) => {
    if (!chatId || !currentPlayerId) return;

    const gameRef = doc(db, "games", chatId);
    const snapshot = await getDoc(gameRef);
    const data = snapshot.exists() ? snapshot.data() : {};

    if (data.playerX && data.playerO) return;

    const updates = { board: Array(9).fill(null), xIsNext: true };

    if (side === "X" && !data.playerX) {
      updates.playerX = currentPlayerId;
      if (!data.playerO) updates.playerO = "waiting";
    } else if (side === "O" && !data.playerO) {
      updates.playerO = currentPlayerId;
      if (!data.playerX) updates.playerX = "waiting";
    }

    await setDoc(gameRef, updates, { merge: true });
  };

  return (
    <div className="p-3 border rounded bg-white w-100 text-center">
      <h5>🎮 {t("gameTitle")}</h5>
      <Button className="mt-2" onClick={() => setShowGame(true)}>
        🚀 {t("startGame")}
      </Button>

      <TicTacToeGame
        chatId={chatId}
        show={showGame}
        onHide={() => setShowGame(false)}
        currentPlayerId={currentPlayerId}
        playerX={playerX}
        playerO={playerO}
        selectSide={selectSide}
      />
    </div>
  );
}
