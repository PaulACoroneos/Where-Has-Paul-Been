import * as React from "react";
import styles from "./modal.module.css";
import { VisitedLocation } from "../../pages/index";
import FocusTrap from "focus-trap-react";

type ModalProps = {
  locationData?: VisitedLocation;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ locationData, onClose }) => {
  const ref = React.useRef(null);
  const buttonRef = React.useRef(null);
  const container = document.getElementById("#modal");

  const escapeListener = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const clickListener = (e: MouseEvent) => {
    if (ref && !(ref?.current).contains(e.target)) {
      onClose?.(); // using optional chaining here, change to onClose && onClose(), if required
    }
  };

  //Place focus on close button initially
  React.useEffect(() => {
    buttonRef.current.focus();
  });

  //detect clicks outside modal and call onClose
  React.useEffect(() => {
    document.addEventListener("mousedown", clickListener);
    document.addEventListener("keyup", escapeListener);
    return () => {
      document.removeEventListener("mousedown", clickListener);
      document.removeEventListener("keyup", escapeListener);
    };
  }, []);

  return (
    <FocusTrap>
      <div
        id="modal"
        ref={ref}
        className={styles["dialog"]}
        role="dialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <h1 id="dialog-title">{`${locationData?.city}, ${locationData?.stateOrCountry}`}</h1>
        <span> {locationData?.description}</span>
        <button
          ref={buttonRef}
          type="button"
          aria-label="Close Navigation"
          className={styles["close-dialog"]}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </FocusTrap>
  );
};

export default Modal;
