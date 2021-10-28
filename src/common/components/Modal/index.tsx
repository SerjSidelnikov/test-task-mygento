import React from 'react';
import ReactDOM from 'react-dom';

import CloseIcon from '@/common/assets/image/svg/close.svg';

import usePortal from '@/hooks/usePortal';

import classes from './Modal.module.css';

interface Props {
  title: string;
  onClose: () => void;
  renderFooter: () => React.ReactNode;
}

const Modal: React.FC<Props> = ({ title, onClose, children, renderFooter }) => {
  if (!process.browser) {
    return null;
  }

  const target = usePortal();

  const renderComponent = () => (
    <div className={classes.container}>
      <div className={classes.overlay} onClick={onClose} />

      <section className={classes.content}>
        <button
          onClick={onClose}
          type="button"
          className={classes.btnClose}
          title="Закрыть"
        >
          <CloseIcon />
        </button>

        <h2 className={classes.title}>{title}</h2>

        <div className={classes.main}>{children}</div>

        <div className={classes.footer}>{renderFooter()}</div>
      </section>
    </div>
  );

  const Component = renderComponent();

  return ReactDOM.createPortal(Component, target);
};

export default Modal;
