import Modal from 'react-modal';

function ModalOverlay({ children, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      preventScroll={true}
      ariaHideApp={false}
      closeTimeoutMS={300}
      className={{
        base: 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-115 h-115 rounded-[30px] p-8 bg-(--yellow-main) color-(--black) opacity-0 scale-90 shadow-2xl outline-none transition-all duration-300 ease-out',
        afterOpen: 'opacity-100 scale-100',
        beforeClose: 'opacity-0 scale-90',
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
        className="absolute w-8 h-8 p-0 top-4 right-4 cursor-pointer border-none bg-(--white) rounded-full flex items-center justify-center shadow-2xl"
      >
        <svg className="fill-(--black) hover:fill-(--yellow-main) transition-colors duration-200 h-6 w-6">
          <use href="/icons.svg#icon-close"></use>
        </svg>
      </button>
      {children}
    </Modal>
  );
}

export default ModalOverlay;
