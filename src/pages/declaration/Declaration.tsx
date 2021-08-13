import {
  IonCard,
  IonCardContent,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonLabel,
  IonPage,
  IonProgressBar,
  IonRow,
} from "@ionic/react";

import React from "react";

import { connect } from "react-redux";
import LongPressable from "react-longpressable";
import Icon from "../../components/Icon";
import { stringToColour } from "../../util/Utilities";
import { decla } from "../../data";
import "./Declaration.scss";

//import TopMenu from "../../components/TopMenu";
import TopMenu from "../../components/topMenu/TopMenu";
import * as EndPointURL from "../../util/EndPointURL";
import * as EndPointApi from "../../services/EndPointApi";
import ClearReduxStore from "../../util/ClearReduxStore";
import Store from "../../redux/Store";
import * as reduxActions from "../../redux/actionTypes/AllActionTypes";
import Badge from "../../components/Badge/Badge";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import CenterFooterButton from "../CenterFooterButton";
import InformationText from "../../components/Texts/InformationText";
import SearchBoeByDate from "../../components/PopUp/SearchBoeByDate";
import SlideUpModal from "../../components/PopUp/SlideUpModal";

interface MyState {
  showModal: boolean;
  selected: boolean;
  opened: boolean;
  message?: string;
  disableInfiniteScroll: boolean; //Eanas scroll
  declarationArray: any[];
  userType?: any;
  showChecked?: boolean;
}
interface MyProps {
  //addresses: [];
  //addAddress:((address: object) => void);
  addDeclarationToCart: (item: object) => void;
  removeDeclarationsFromCart: (item: object) => void;
  removeAllContainersInCart: () => void;
  numberOfContainers: any;
  allStoreDeclarations: any[];
  updateBoesInCart: (item: any) => void;
}
var locationProps: any;
var longpressed = false;
var selectedNumber = 0;
let open = true;
var scrollLoad = true;
var pageNumber = 0;
var payLoad = [];
var urlParameter = "";
var declnum = "test";

class Declaration extends React.Component<MyProps, MyState> {
  public contentRef = React.createRef<HTMLDivElement>();
  constructor(props: any) {
    super(props);
    locationProps = props;
    this.state = {
      showModal: false,
      selected: false,
      opened: true,
      message: "",
      disableInfiniteScroll: false,
      declarationArray: this.props.allStoreDeclarations,
      userType: {},
      showChecked: false,
    };
    this.contentRef = React.createRef();
  }
  componentDidMount = () => {
    this.setState({ userType: Store.getState().CheckUserStatus.user.userType });
    longpressed = false;
    selectedNumber = 0;
    pageNumber = 0;
    var parameter = "";
    scrollLoad = true;
    urlParameter = "";
    this.setState({ declarationArray: this.props.allStoreDeclarations });
    // ClearReduxStore();

    if (this.props.allStoreDeclarations?.length === 0)
      this.getAllDeclaration(parameter);
  };

  getAllDeclaration = async (param: string) => {
    if (!param) {
      param = "pgSize=10&pgNo=0&option=ALL&locale=en";
      urlParameter = "pgSize=10&pgNo=0&option=ALL&locale=en";
    }
    urlParameter = param;
    var data = {
      url: EndPointURL.declarationUrl + param,
      callType: "get",
      header: { headers: "" },
    };
    this.setState({ message: "Loading Data" });
    var response = await EndPointApi.fetchAllDeclaration(
      EndPointURL.declarationUrl + param
    );

    if (!response?.success) {
      console.log(response, response?.data?.elements?.length);
      this.setState({ message: response?.data?.message });
    }
    if (response?.data?.elements?.length > 0) {
      //       this.closeSort();
      if (
        // this.state.declarationArray.length > 0 ||
        response?.data?.elements?.length > 0
      ) {
        this.setState({
          declarationArray: await [
            ...this.state.declarationArray,
            ...response.data.elements,
          ],
        });
        //this.props.addDeclarationToCart(this.state.declarationArray);
        this.setState({
          disableInfiniteScroll: this.state.declarationArray.length < 10,
        });
      } else {
        this.setState({
          declarationArray: [],
        });
        this.setState({ message: "No Declarations to display" });
        this.setState({ disableInfiniteScroll: true });
      }
      scrollLoad = false;

      await this.state.declarationArray.forEach((arrayItem: any) => {
        arrayItem.selectedNumber = 0;
        // arrayItem.selected = false;
        // this.setState({ selected: false });
        // arrayItem.containerList.forEach((contanier: any) => {
        //   contanier.selected = false;
        //   this.setState({ selected: false });
        // });
      });
      this.setState({ declarationArray: this.state.declarationArray });
      this.props.addDeclarationToCart(this.state.declarationArray);
    } else {
      var parameter = "";
      // this.getAllDeclaration(parameter);
      this.setState({ message: response?.data?.message });
      this.setState({ message: "No Declarations to display" });
      this.setState({ disableInfiniteScroll: true });
      if (this.props.allStoreDeclarations?.length === 0)
        this.props.addDeclarationToCart(decla.elements);
      this.setState({ declarationArray: this.props.allStoreDeclarations });
    }
  };

  contanerIconProps = {
    name: "container",
    slot: "",
    class: "zoom12",
    zoom: 2.8,
  };
  topMenuItems = [
    {
      name: "",
      type: "button",
      src: "filter",
      zoom: 1.3,
      slot: "",
      clickedOnTopMenu: () => this.setState({ showModal: true }),
    },
    {
      name: "expired",
      src: "",
      type: "button",
      slot: "start",
      clickedOnTopMenu: () => this.topMenuClick("", "", "ALL", ""),
    },
    {
      name: "active",
      icon: "",
      type: "button",
      slot: "start",
      clickedOnTopMenu: () => this.topMenuClick("", "", "ACTIVE", ""),
    },
    {
      name: "Do Validity",
      src: "filter-down-arrow",
      type: "button",
      slot: "start",
      size: "0.7rem",
      clickedOnTopMenu: () => console.log("clicked4"),
    },
    {
      name: "Containers",
      src: "filter-down-arrow",
      type: "button",
      slot: "start",
      size: "0.7rem",
      clickedOnTopMenu: () => console.log("clicked5"),
    },
  ];

  topMenuClick = (
    fromDate?: String,
    toDate?,
    status?,
    consigneeName?: String
  ) => {
    this.setState({ showModal: false });
    this.setState({ declarationArray: [] });
    this.props.removeAllContainersInCart();

    var param =
      "option=ALL&fromDate=" +
      fromDate +
      "&toDate=" +
      toDate +
      "&consigneeName=&status=" +
      status +
      "&pgNo=0&pgSize=10&locale=en";
    this.getAllDeclaration(param);
  };

  goToContainerList = (selectedDecl, index, checked?) => {
    if (longpressed) {
      if (checked) {
        if (checked === "checked") {
          this.props.allStoreDeclarations.forEach(
            (decl: any, index: number) => {
              decl.selected = true;
              decl.containerList.forEach((container: any, index: number) => {
                decl.containerList[index].selected = true;
              });
              selectedNumber = selectedNumber + decl.containerList.length;
              decl.selectedNumber = decl.containerList.length;
              this.props.updateBoesInCart(decl);
            }
          );
        } else {
          this.props.allStoreDeclarations.forEach(
            (decl: any, index: number) => {
              decl.selected = false;
              decl.containerList.forEach((container: any, index: number) => {
                decl.containerList[index].selected = false;
              });
              selectedNumber = 0;
              decl.selectedNumber = 0;
              this.props.updateBoesInCart(decl);
            }
          );
        }
      } else {
        selectedDecl.selected = !selectedDecl.selected;
        this.setState({ selected: selectedDecl.selected });
        if (selectedDecl.selected) {
          selectedNumber = selectedNumber + selectedDecl.containerList.length;
          selectedDecl.containerList.forEach((contanier: any) => {
            contanier.selected = true;
            this.setState({ selected: true });
          });
          selectedDecl.selectedNumber = selectedDecl.containerList.length;
          this.props.updateBoesInCart(selectedDecl);
        } else {
          //selectedcount = selectedcount - selectedDecl.containerList.length;
          selectedNumber = selectedNumber - selectedDecl.containerList.length;
          selectedDecl.containerList.forEach((contanier: any) => {
            contanier.selected = false;
            this.setState({ selected: false });
            selectedDecl.selectedNumber = 0;
            if (selectedNumber === 0) {
              longpressed = false;
              this.setState({ showChecked: false });
            }
            // this.props.removeDeclarationsFromCart(
            //   containerList.declarationNumber
            // );
            this.props.updateBoesInCart(selectedDecl);
          });
        }
      }
    } else {
      selectedDecl.currentSelection = true;
      selectedDecl.containerList.index = index;
      // this.props.addDeclarationToCart(containerList);
      //this.props.addDeclarationToCart(containerList); eanas
      this.props.updateBoesInCart(selectedDecl);
      locationProps.history.push("/container", selectedDecl);
    }
  };
  declarationLonpressed = (containerList) => {
    longpressed = true;
    this.setState({ showChecked: true });
    containerList.selected = !containerList.selected;
    this.setState({ selected: containerList.selected });
    selectedNumber = selectedNumber + containerList.containerList.length;
    if (containerList.selected) {
      containerList.containerList.forEach((contanier: any) => {
        contanier.selected = true;
        this.setState({ selected: true });
      });
      containerList.selectedNumber = selectedNumber;
      this.props.updateBoesInCart(containerList);
    }
  };

  searchNext = async ($event: CustomEvent<void>) => {
    pageNumber = pageNumber + 1;
    var param = "pgSize=10&pgNo=" + pageNumber + "&option=ALL&locale=en";
    await this.getAllDeclaration(param);
    ($event.target as HTMLIonInfiniteScrollElement).complete();
  };

  onSearchClick = () => {
    //this.getAllDeclaration(param);
  };

  goToContainerCart() {
    locationProps.history.push("/containerCart");
  }

  searchByDate = (modalStatus, fromDate, toDate) => {
    this.setState({ showModal: modalStatus });
    if (fromDate && toDate) this.topMenuClick(fromDate, toDate);
  };

  render() {
    const checkedProps: any = {
      showChecked: this.state.showChecked,
      addContainerToCart: this.goToContainerList,
    };
    var selectedcount = 0;

    return (
      <IonPage className="declaration">
        <Header
          label="Declaration"
          action="search"
          locationProps={locationProps}
          searchClick={() => this.onSearchClick()}
          showAgent={true}
          agentHeader={true}
          checkedProps={checkedProps}
        />
        <IonContent className="declaration-Content">
          <SlideUpModal
            showModal={this.state.showModal}
            openOrCloseModal={(modalState) =>
              this.setState({ showModal: modalState })
            }
            content={
              <SearchBoeByDate
                headerName="Delivery Order Validity"
                openOrCloseModal={this.searchByDate}
              />
            }
          />
          <TopMenu topMenuProps={this.topMenuItems} />

          {this.state.message && this.state.declarationArray.length <= 0 && (
            <div className="warning-message">{this.state.message}</div>
          )}

          <div className="container-section">
            {this.state.declarationArray.length > 0 && (
              <InformationText
                message={`${this.state.declarationArray.length} declarations`}
              />
            )}
            <div className="container-list">
              {this.props.allStoreDeclarations.map((item, index) => {
                item.currentSelection = false;
                if (this.props.allStoreDeclarations[index].selected) {
                  selectedcount = selectedcount + 1;
                }
                if (selectedcount > 1 || selectedNumber >= 1)
                  longpressed = true;
                else if (selectedcount === 0) longpressed = false;
                return (
                  <LongPressable
                    key={index}
                    onShortPress={(e) => {
                      !this.state.opened
                        ? e.stopPropagation()
                        : this.goToContainerList(item, index);
                    }}
                    onLongPress={(e) => {
                      !this.state.opened
                        ? e.stopPropagation()
                        : this.declarationLonpressed(item);
                    }}
                    longPressTime={800}
                  >
                    <IonCard
                      key={index}
                      className={
                        item.selected
                          ? "outer-card boxShadow "
                          : "outer-card lightShadow"
                      }
                    >
                      {" "}
                      <IonCardContent>
                        <div className="container-card">
                          {/* <div className="list-logo">
                              <RoundedAvatar
                                color={color}
                                name={item.comments}
                              />
                            </div> */}
                          <div className="twoItems borderBottom">
                            <div className="eachItemLeft">
                              <div className="decl-info">
                                <span className="decl-number">
                                  <IonLabel class="gray-text">
                                    Declaration#
                                  </IonLabel>
                                </span>
                                <span className="decl-comments">
                                  {item.referenceNumber}
                                </span>
                              </div>
                            </div>
                            <div className="middle-item">
                              <div className="dov">
                                <span className="">
                                  {/* <Icon
                                        iconProps={this.contanerIconProps}
                                      /> */}
                                </span>
                              </div>
                            </div>
                            <div className="eachItemRight">
                              <div className="dov">
                                <span className="dov-text">
                                  <IonLabel class="gray-text">
                                    Deliver Order validity
                                  </IonLabel>
                                </span>
                                <span className="dov-number">
                                  {item.deliveryOrderValidity}
                                </span>
                              </div>
                            </div>
                            {/* </div> */}
                          </div>
                          <div className="twoItems">
                            <div className="eachItemLeft">
                              <div className="decl-info">
                                <span className="decl-number">
                                  {" "}
                                  <IonLabel class="gray-text">
                                    Consignee
                                  </IonLabel>
                                </span>
                                <span className="decl-comments">
                                  {item.consigneeDetails}
                                  {/* {item.consigneeDetails} */}
                                </span>
                              </div>
                            </div>
                            <div className="middle-item">
                              <div className="dov">
                                <span className="">
                                  <Icon iconProps={this.contanerIconProps} />
                                </span>
                              </div>
                            </div>
                            <div className="eachItemRight">
                              <div className="secondRow">
                                <div className="dov">
                                  <span className="dov-number">
                                    {item.containerList.length} Nos.
                                  </span>
                                  {item.selectedNumber > 0 && (
                                    <span className="dov-selected-number">
                                      {item.selectedNumber} selected.
                                    </span>
                                  )}
                                </div>
                              </div>

                              <div className="secondRow">
                                <div className="badgeItem">
                                  <div className="dov">
                                    <span className="">
                                      <Badge status={item.status} />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </IonCardContent>
                    </IonCard>
                  </LongPressable>
                );
                declnum = item.referenceNumber;
              })}
            </div>
          </div>
          <IonInfiniteScroll
            threshold="100px"
            disabled={this.state.disableInfiniteScroll}
            onIonInfinite={(e: CustomEvent<void>) => this.searchNext(e)}
          >
            <IonInfiniteScrollContent loadingText="Loading more..."></IonInfiniteScrollContent>
          </IonInfiniteScroll>
          <CenterFooterButton
            iconType="cart"
            clickEvent={this.goToContainerCart}
          />
        </IonContent>
        <Footer />
      </IonPage>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    allStoreDeclarations: state.Cart,
  };
};

const mapDispatchToProps = () => {
  return {
    addDeclarationToCart: (item: any) => {
      Store.dispatch({
        type: reduxActions.ADD_TO_CART,
        payLoad: item,
      });
    },

    removeAllContainersInCart: () => {
      Store.dispatch({ type: reduxActions.CLEAR_CART });
    },
    updateBoesInCart: (item) => {
      Store.dispatch({
        type: reduxActions.UPDATE_BOE_IN_CART,
        payLoad: item,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Declaration);
