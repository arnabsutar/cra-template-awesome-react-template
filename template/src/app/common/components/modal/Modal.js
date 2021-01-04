import { Dialog } from 'primereact/dialog';
import { React } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ showModal, closeModalFlag, modalContent }) => (
  <Dialog
    style={{ width: '50vw' }}
    visible={showModal}
    onHide={() => closeModalFlag()}
    data-test="ModalComponent"
  >
    {modalContent.name}
  </Dialog>
);

Modal.propTypes = {
  showModal: PropTypes.bool,
  closeModalFlag: PropTypes.func.isRequired,
  modalContent: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

Modal.defaultProps = {
  showModal: false,
  modalContent: {
    name: '',
  },
};

export default Modal;
