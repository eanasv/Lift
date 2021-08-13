import { IonButton, IonModal } from "@ionic/react";
import React from "react";

interface searchModalProps {
  showModal;
  openOrCloseModal?: () => void;
}
const SearchModal: React.FC<searchModalProps> = ({
  showModal,
  openOrCloseModal,
}) => {
  return (
    <IonModal isOpen={showModal} cssClass="my-custom-class">
      <p>This is modal content</p>
      <IonButton onClick={() => openOrCloseModal()}>Close Modal</IonButton>
    </IonModal>
  );
};
export default SearchModal;
