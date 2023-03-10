const Modal = () => {
  return (
    <div className="modal" style={{ display: "none" }}>
      <span
        className="close"
        onClick={() =>
          (document.querySelector(".modal").style.display = "none")
        }
      >
        &times;
      </span>
      <img className="modal-content" id="img01" alt="img" />
    </div>
  );
};

export default Modal;
