import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Store from "../../redux/Store";
import * as reduxActions from "../../redux/actionTypes/AllActionTypes";
import ContainerCard from "../../components/ContainerCard";
import "./ContainerCart.scss";
import { IonContent, IonItem, IonLabel, IonPage } from "@ionic/react";
import Header from "../../components/Header";
import InformationText from "../../components/Texts/InformationText";
import BlueFooter from "../../components/Footer/BlueFooter";
import SlideUpModal from "../../components/PopUp/SlideUpModal";
import DeclarationDetails from "./DeclarationDetails";
import { useHistory } from "react-router-dom";
import SortedContainerList from "../../components/SortedContainerList/SortedContainerList";

interface ownProps {
  declaList;
  numberOfSelectedContainers;
  addContainerListToBook;
}

interface stateProps {}
type containerCartProps = ownProps & stateProps;
const ContainerCart: React.FC<containerCartProps> = (
  props,
  { declaList, dataForBookTruck }
) => {
  var dataForBookTruck: any = [];
  var isdiff = "test";
  let history = useHistory();
  const [showModal, setshowModal] = useState(false);

  function openDeclaDetails(modalState) {
    setshowModal(modalState);
  }

  function goToBookTruck() {
    props.declaList.map((item, index) => {
      item.containerList.map((container) => {
        if (container.selected) {
          dataForBookTruck.push(container);
          //setShowPopover({ showPopover: true, event: "" });
        }
      });
    });

    if (dataForBookTruck.length > 0) {
      props.addContainerListToBook(dataForBookTruck);
      history.push("/bookTruckTab");
    }
  }
  return (
    <IonPage>
      <Header
        label="Containers"
        action="search"
        locationProps={props}
        // searchClick={this.onSearchClick}`Share ${speaker.name}`
      />
      <IonContent>
        <SlideUpModal
          showModal={showModal}
          openOrCloseModal={(modalState) => openDeclaDetails(modalState)}
          content={<DeclarationDetails />}
        />
        <div className="info-text">
          <InformationText
            message={`${props.numberOfSelectedContainers.cartNumber} containers`}
          />
        </div>
        <div className="container-list">
          {props.declaList?.map((decla, index) =>
            decla?.containerList.map((item, index) => {
              return (
                <div key={index}>
                  {item.selected && (
                    <SortedContainerList
                      isDiff={isdiff === decla.referenceNumber ? true : false}
                      item={item}
                      content={
                        <ContainerCard
                          containerItem={item}
                          key={index}
                          containerClick={() => openDeclaDetails(true)}
                        />
                      }
                    />
                  )}
                  <div hidden={true}>{(isdiff = decla.referenceNumber)}</div>
                </div>
              );
            })
          )}
        </div>
      </IonContent>
      <BlueFooter onBlueFooterClick={goToBookTruck} footerLabel="Book Truck" />
    </IonPage>
  );
};
const mapStateToProps = (state: any) => {
  return {
    declaList: state.Cart,
    numberOfSelectedContainers: state.VariableValues,
  };
};

const mapDispatchToProps = () => {
  return {
    updateContainersInCart: (item: any) => {
      Store.dispatch({
        type: reduxActions.UPDATE_CONTAINER_IN_CART,
        payLoad: item,
      });
    },
    addDeclarationToCart: (item: any) => {
      Store.dispatch({
        type: reduxActions.ADD_TO_CART,
        payLoad: item,
      });
    },
    addContainerListToBook: (item: any) => {
      Store.dispatch({
        type: reduxActions.BOOK_TRUCK_SINGLE_LOCATION,
        payLoad: item,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContainerCart);
