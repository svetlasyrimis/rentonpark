import React from "react";
import ReactDOM from "react-dom";
import "../assets/styles/Modal.css";

function ModalDeleteReservation({ isOpen, onClose, onDeleteReservation }) {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={onClose} className="Modal__close-button">
          X
        </button>
        <div className="DeleteBadgeModal">
          <h4>Está seguro?</h4>
          <p>Estás apunto de elminar una reserva.</p>

          <div className="text-center">
            <button
              onClick={onDeleteReservation}
              className="btn btn-round btn-danger mr-4"
            >
              Eliminar
            </button>
            <button onClick={onClose} className="btn btn-round btn-primary">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default ModalDeleteReservation;
