import { IonModal } from "@ionic/react";
import React from "react";
import "./SearchBoeByDate.scss";

interface slideUpModalProps {
  showModal;
  openOrCloseModal?: (modalState) => void;
  content?;
  leftHeaderIcon?: any;
}
const SlideUpModal: React.FC<slideUpModalProps> = ({
  showModal,
  openOrCloseModal,
  content,
}) => {
  return (
    <IonModal
      isOpen={showModal}
      cssClass="popup-container"
      onDidDismiss={() => openOrCloseModal(false)}
    >
      {content}
    </IonModal>
  );
};
export default SlideUpModal;
