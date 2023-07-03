const Modal = () => {
  const handleClickCloseModal = () => {
    document.querySelector(".modal").style.display = "none";
  };

  return (
    <div className="modal">
      <span className="close" onClick={handleClickCloseModal}>
        &times;
      </span>
      <img className="modal-content" id="img01" alt="img" />
    </div>
  );
};

export default Modal;
