const Modal = ({ modalRef }) => {
  return (
    <div className="modal" ref={modalRef} style={{ display: "none" }}>
      <span
        className="close"
        onClick={() => (modalRef.current.style.display = "none")}
      >
        &times;
      </span>
      <img className="modal-content" id="img01" alt="img" />
    </div>
  );
};

export default Modal;
