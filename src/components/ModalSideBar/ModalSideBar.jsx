import Modal from 'react-modal';

function ModalSideBar({ children, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      preventScroll={true}
      ariaHideApp={false}
      closeTimeoutMS={300}
      className={{
        base: 'fixed top-0 right-0 w-42.5 h-78 bg-(--green) color-(--black) p-4 shadow-2xl outline-none transition-all duration-300 ease-out',
        afterOpen: 'translate-x-0 opacity-100',
        beforeClose: 'translate-x-full opacity-0',
      }}
      overlayClassName={{
        base: 'fixed inset-0 bg-(--black)/50 z-100 transition-opacity duration-300',
        afterOpen: 'opacity-100',
        beforeClose: 'opacity-0',
      }}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-2 right-2 cursor-pointer border-none"
      >
        <svg className="fill-(--black) hover:fill-(--yellow-main) transition-colors duration-200 h-7 w-7">
          <use href="/icons.svg#icon-close"></use>
        </svg>
      </button>
      {children}
    </Modal>
  );
}

export default ModalSideBar;
