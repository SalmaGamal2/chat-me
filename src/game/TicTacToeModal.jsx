import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { onAuthStateChanged } from "firebase/auth";
import TicTacToeGame from "./tic/TicTacToeGame";
import { auth } from "../firebase";

const TicTacToeModal = ({ chatId, show, onClose }) => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        console.log(" currentPlayerId from Firebase Auth:", user.uid);
      } else {
        console.warn(" لم يتم تسجيل الدخول");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>X-O Game</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {userId ? (
          <TicTacToeGame
            chatId={chatId}
            show={show}
            onHide={onClose}
            currentPlayerId={userId}
          />
        ) : (
          <div className="text-danger text-center">
            يجب تسجيل الدخول لتشغيل اللعبة.
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default TicTacToeModal;
