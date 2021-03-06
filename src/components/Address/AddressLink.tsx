import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SlideUpModal from "../PopUp/SlideUpModal";
import BlueUderLinedLink from "../Texts/BlueUderLinedLink";
import AddressPopup from "./AddressPopup";

var locationIconProps = {
  name: "location",
  slot: "",
  class: "zoom24",
  zoom: 1.8,
};
const editPencil = {
  name: "edit-address",
  slot: "",
  class: "lastIcon",
};

const addLocationIconProps = {
  name: "add-location",
  slot: "",
  //class: "slotStart",
};
interface AddressLinkProps {
  setAddress: (arg1, arg2?) => any;
  linkClassName?: string;
  value?: any;
}
const AddressLink: React.FC<AddressLinkProps> = ({
  setAddress,
  linkClassName,
  value,
}) => {
  let history = useHistory();
  const [showModal, setshowModal] = useState(false);
  const [address, setaddress] = useState<any>(value || {});

  function openAddressDetails() {
    setshowModal(true);
  }

  function handleAddressDetails(flag, data, name?) {
    console.log(name);
    setshowModal(false);
    if (flag === "add") history.push("/addAddress");
    else if (flag === "edit") {
      var value = {
        contact: data,
        booking: data.details,
        isContainerEdit: true,
      };
      history.push("/addAddress", value);
    } else if (flag === "select") setaddress(name);
    setAddress(name, data);
  }
  return (
    <div>
      <SlideUpModal
        showModal={showModal}
        openOrCloseModal={(modalState) => setshowModal(modalState)}
        content={<AddressPopup clickFunc={handleAddressDetails} />}
      />
      <div hidden={address.consigneeContactName === undefined}>
        <BlueUderLinedLink
          label={
            address.addressNickname +
            " " +
            address.consigneeContactName +
            " " +
            address.consigneeContactNumber +
            " " +
            address.dropAddress
          }
          leftIcon={locationIconProps}
          onTap={() => setshowModal(true)}
          className="flexStart "
          labelCLassName="location-selected"
          rightIcon={editPencil}
          rightIconTap={() => handleAddressDetails("edit", address)}
        />
      </div>
      <div hidden={address.consigneeContactName}>
        <BlueUderLinedLink
          label="Add drop locationss"
          leftIcon={addLocationIconProps}
          onTap={() => setshowModal(true)}
          className={linkClassName}
        />
      </div>
    </div>
  );
};
export default AddressLink;
