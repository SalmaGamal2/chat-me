import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { db } from "../../firebase";
import { doc, onSnapshot, setDoc, getDoc } from "firebase/firestore";
import styles from "./Tic.module.css";
import { useTranslation } from "react-i18next";
import { FaTimes, FaRegCircle, FaRedo, FaWindowClose } from "react-icons/fa";
const emptyBoard = Array(9).fill(null);

const checkWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a, b, c] };
    }
  }
  return board.every(Boolean) ? { winner: "draw", line: [] } : null;
};

const TicTacToeGame = ({ show, onHide, currentPlayerId, chatId }) => {
  const { t } = useTranslation();

  const [board, setBoard] = useState(emptyBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winnerLine, setWinnerLine] = useState([]);
  const [playerX, setPlayerX] = useState(null);
  const [playerO, setPlayerO] = useState(null);
  const [loading, setLoading] = useState(true);

  const gameRef = doc(db, "games", chatId);

  useEffect(() => {
    if (!chatId) return;

    const unsubscribe = onSnapshot(gameRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        const result = checkWinner(data.board || emptyBoard);

        setBoard(data.board || emptyBoard);
        setXIsNext(data.xIsNext ?? true);
        setWinner(result?.winner || null);
        setWinnerLine(result?.line || []);
        setPlayerX(data.playerX || null);
        setPlayerO(data.playerO || null);
        setLoading(false);

        if (data.playerX === "waiting" && currentPlayerId !== data.playerO) {
          setDoc(gameRef, { playerX: currentPlayerId }, { merge: true });
        }
        if (data.playerO === "waiting" && currentPlayerId !== data.playerX) {
          setDoc(gameRef, { playerO: currentPlayerId }, { merge: true });
        }
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [chatId, currentPlayerId]);

  const selectSide = async (side) => {
    const snapshot = await getDoc(gameRef);
    const data = snapshot.exists() ? snapshot.data() : {};

    if (data.playerX && data.playerO) return;

    const updates = {
      board: data.board || emptyBoard,
      xIsNext: data.xIsNext ?? true,
    };

    if (side === "X" && !data.playerX) {
      updates.playerX = currentPlayerId;
      if (!data.playerO) updates.playerO = "waiting";
    } else if (side === "O" && !data.playerO) {
      updates.playerO = currentPlayerId;
      if (!data.playerX) updates.playerX = "waiting";
    }

    await setDoc(gameRef, updates, { merge: true });
  };

  const currentPlayerSymbol =
    currentPlayerId === playerX
      ? "X"
      : currentPlayerId === playerO
      ? "O"
      : null;

  const makeMove = async (i) => {
    if (!chatId || board[i] || winner) return;
    if (currentPlayerSymbol !== (xIsNext ? "X" : "O")) return;

    const newBoard = [...board];
    newBoard[i] = xIsNext ? "X" : "O";

    await setDoc(gameRef, {
      board: newBoard,
      xIsNext: !xIsNext,
      playerX,
      playerO,
    });
  };

  const handleReset = () => {
    if (!chatId) return;
    if (!window.confirm(t("resetConfirm"))) return;

    setDoc(gameRef, {
      board: emptyBoard,
      xIsNext: true,
      playerX: null,
      playerO: null,
    });
  };

  return (
    <Modal show={show} onHide={onHide} centered size="md">
      <Modal.Header closeButton>
        <Modal.Title>🎮 {t("gameTitle")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!chatId ? (
          <div className="text-danger text-center"> {t("noChatId")}</div>
        ) : loading ? (
          <div className="text-center"> {t("loading")}</div>
        ) : currentPlayerSymbol === null ? (
          <div className="text-center">
            <p>{t("chooseSide")}</p>
            <Button
              variant="primary"
              className="m-2"
              onClick={() => selectSide("X")}
            >
              <FaTimes /> {t("playX")}
            </Button>
            <Button
              variant="danger"
              className="m-2"
              onClick={() => selectSide("O")}
            >
              <FaRegCircle /> {t("playO")}
            </Button>
          </div>
        ) : (
          <>
            <div className={styles.board}>
              {board.map((cell, i) => (
                <div
                  key={i}
                  className={`${styles.cell}
                    ${cell === "X" ? styles.xCell : ""}
                    ${cell === "O" ? styles.oCell : ""}
                    ${winnerLine.includes(i) ? styles.winningCell : ""}
                  `}
                  onClick={() => makeMove(i)}
                >
                  {cell === "X" ? (
                    <FaTimes />
                  ) : cell === "O" ? (
                    <FaRegCircle />
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-3 fw-bold fs-5">
              {winner === "draw"
                ? t("draw")
                : winner
                ? `${t("winner")} ${winner}`
                : `${t("turn")}: ${xIsNext ? "x" : "o"} ${
                    currentPlayerSymbol === (xIsNext ? "X" : "O")
                      ? `(${t("yourTurn")})`
                      : ""
                  }`}
            </div>
          </>
        )}
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Button variant="outline-secondary" onClick={handleReset}>
          <FaRedo /> {t("reset")}
        </Button>
        <Button variant="danger" onClick={onHide}>
          <FaWindowClose /> {t("close")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TicTacToeGame;
