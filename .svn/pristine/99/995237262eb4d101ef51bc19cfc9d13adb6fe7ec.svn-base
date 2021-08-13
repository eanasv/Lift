import { IonLabel } from "@ionic/react";
import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import UnderLinedInput from "./txtinput/UnderLinedInput";
import "./Payment.scss";
import { saveQuickBook } from "../services/EndPointApi";
import VatDetails from "./VatDetails";

interface paymentProps {
  allPayableDetails: any;
  buttonAction: any;
}
const Payment: React.FC<paymentProps> = ({
  allPayableDetails,
  buttonAction,
}) => {
  const [errors, setErrors] = useState<any>({});
  const [form, setForm] = useState<any>({});
  const uploadIcon = {
    name: "upload-quick",
    slot: "",
    class: "zoom3",
  };
  console.log(allPayableDetails);

  useEffect(() => {
    if (buttonAction === "payment") {
      saveRequest();
    }
  }, [buttonAction]);

  const createSaveObject = async () => {
    //await console.info("DETAILS VAAAAA ", val)
    //setDetails({ ...details, "data": props?.location?.state })
    let vals: any;
    vals = {
      requestTruckType: allPayableDetails?.requestTruckType,
      containerList: allPayableDetails?.containerList,
      containerSummary: allPayableDetails?.containerSummary,
      multiLocAndTime: allPayableDetails?.multiLocAndTime,
      totalAmt: allPayableDetails?.grossAmount,
      paymentType: "INSTANT",
      paymentDetailsList: allPayableDetails?.paymentDetails,
      totalAmount: allPayableDetails?.grossAmount,
      transactionAmount: allPayableDetails?.grossAmount,
    };

    await console.info("DETAILS VAAAAALS ", vals);
    return await vals;
  };
  const saveRequest = async () => {
    let obj: any = await createSaveObject();
    let response: any = await saveQuickBook(obj);
    console.log(response);
    if (response?.success) {
      //   let res: any = await response?.data?.data?.dataItems[0]?.url;
      //   var url = await response.data.data.dataItems[0].url;
      //   var txnId = await response.data.data.dataItems[0].transactionId;
      //   //var responseFromBrowser = await postToExternalSite(url, txnId);
    } else {
      setErrors({
        ...errors,
        general: response?.data?.message || response?.data?.error,
      });
    }
  };
  return (
    <div>
      <div className="validationMessage ">
        <IonLabel className="" hidden={errors.general === ""}>
          {errors.general}
        </IonLabel>
      </div>
      <div className="relativePosition componentMargins">
        <div className="smallUnderline">
          <IonLabel className="payLabel">Enter Requestor Details</IonLabel>
        </div>
      </div>
      <div className="twoItem">
        <div className="eachElement">
          <UnderLinedInput
            name={"containerNumber"}
            value={form.containerNumber}
            label="Container Number"
            errors={errors.containerNumber}
            type="text"
            required={true}
            onChange={() => console.log("onChange")}
            datatype="TEXT"
            placeholder="Requester Name"
            onBlur={() => console.log("blur")}
          />
        </div>
        <div className="eachElement">
          <UnderLinedInput
            name={"containerNumber"}
            value={form.containerNumber}
            label="Container Number"
            errors={errors.containerNumber}
            type="text"
            required={true}
            onChange={() => console.log("onChange")}
            datatype="TEXT"
            placeholder="Requester Number"
            onBlur={() => console.log("blur")}
          />
        </div>
      </div>
      <UnderLinedInput
        name={"containerNumber"}
        value={form.containerNumber}
        label="Container Number"
        errors={errors.containerNumber}
        type="text"
        required={true}
        onChange={() => console.log("onChange")}
        datatype="TEXT"
        placeholder="Importer Comments (if any)"
        onBlur={() => console.log("blur")}
      />
      <div className="upload-section">
        <Icon iconProps={uploadIcon} />
        <IonLabel className="uploadLabel">Upload supporting files</IonLabel>
      </div>

      <div className="componentMargins">
        <VatDetails vatDetails={allPayableDetails?.vatProfileDto} />
        <div className="paymentBreakup relativePosition">
          <div className="halfWidth">
            <div className="paymentBreakupUnderLine">
              <IonLabel className="payLabel">Payment Breakups</IonLabel>
            </div>
          </div>
          <div className="paymentBreakUprightSide">
            <IonLabel className="bluePaymentLable">
              {allPayableDetails?.grossAmount} AED
            </IonLabel>
          </div>
        </div>

        {allPayableDetails.paymentDetails?.map((item, index) => (
          <div key={index}>
            {item.paymentType === "transportation" && (
              <div className="payment-section">
                <div className="paymentBreakup margin-top">
                  <div className="paymentBreakupFirstRow">
                    {" "}
                    <IonLabel className="payLabel">Containers</IonLabel>
                  </div>
                  <div className="paymentBreakup">
                    <IonLabel className="payLabelLight">
                      {" "}
                      {item.chargeDescription}
                    </IonLabel>
                  </div>
                  <div className="paymentBreakUprightSide">
                    <IonLabel className="payLabelLight">
                      {item.subTotalAmount} AED
                    </IonLabel>
                  </div>
                </div>
                <div className="paymentBreakup margin-top">
                  <div className="paymentBreakupFirstRow">
                    {" "}
                    <IonLabel className="payLabel">Vat %</IonLabel>
                  </div>
                  <div className="paymentBreakup">
                    <IonLabel className="payLabelLight">{item.vat}%</IonLabel>
                  </div>
                  <div className="paymentBreakUprightSide">
                    <IonLabel className="payLabelLight">
                      {item.totalVat} AED
                    </IonLabel>
                  </div>
                </div>
                <div className="paymentBreakup margin-top">
                  <div className="paymentBreakupFirstRow">
                    {" "}
                    <IonLabel className="payLabel">Total</IonLabel>
                  </div>
                  <div className="paymentBreakup">
                    <IonLabel className="payLabelLight">
                      {item.totalAmount} AED
                    </IonLabel>
                  </div>
                  <div className="paymentBreakUprightSide">
                    <IonLabel className="payLabel"></IonLabel>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        <div className=" payment-section paymentBreakup  margin-top">
          <div className="paymentBreakupFirstRow">
            <IonLabel className="payLabel">Net Amount</IonLabel>
          </div>
          <div className="paymentBreakUprightSide">
            <IonLabel className="bluePaymentLable">
              {" "}
              {allPayableDetails?.totalTariff} AED
            </IonLabel>
          </div>
        </div>

        {allPayableDetails.paymentDetails?.map((item, index) => (
          <div key={index}>
            {item.paymentType === "tokenIn" && (
              <div className="payment-section">
                <div className="paymentBreakup margin-top">
                  <div className="paymentBreakupFirstRow payLabel">
                    <IonLabel>DPW Token Re-Charges In-Bound</IonLabel>
                  </div>
                  <div className="paymentBreakup">
                    <IonLabel className="payLabelLight">
                      {" "}
                      {item.chargeDescription}
                    </IonLabel>
                  </div>
                  <div className="paymentBreakUprightSide">
                    <IonLabel className="payLabelLight">
                      {" "}
                      {item.subTotalAmount} AED
                    </IonLabel>
                  </div>
                </div>
                <div className="paymentBreakup margin-top">
                  <div className="paymentBreakupFirstRow payLabel">
                    {" "}
                    <IonLabel>Vat %</IonLabel>
                  </div>
                  <div className="paymentBreakup">
                    <IonLabel className="payLabelLight">
                      {item.vat || 0}%
                    </IonLabel>
                  </div>
                  <div className="paymentBreakUprightSide">
                    <IonLabel className="payLabelLight">
                      {" "}
                      {item.totalVat || 0} AED
                    </IonLabel>
                  </div>
                </div>
                <div className="paymentBreakup margin-top">
                  <div className="paymentBreakupFirstRow payLabel">
                    {" "}
                    <IonLabel>Total Amount</IonLabel>
                  </div>
                  <div className="paymentBreakup">
                    <IonLabel className="payLabelLight">
                      {item.totalAmount} AED
                    </IonLabel>
                  </div>
                  <div className="paymentBreakUprightSide">
                    <IonLabel className="payLabel"></IonLabel>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {allPayableDetails.paymentDetails.map((item, index) => (
          <div key={index}>
            {item.paymentType === "tokenOut" && (
              <div className="payment-section">
                <div className="paymentBreakup margin-top">
                  <div className="paymentBreakupFirstRow payLabel">
                    <IonLabel>DPW Token Re-Charges Out-Bound</IonLabel>
                  </div>
                  <div className="paymentBreakup">
                    <IonLabel className="payLabelLight">
                      {item.chargeDescription}
                    </IonLabel>
                  </div>
                  <div className="paymentBreakUprightSide">
                    <IonLabel className="payLabelLight">
                      {item.subTotalAmount} AED
                    </IonLabel>
                  </div>
                </div>
                <div className="paymentBreakup margin-top">
                  <div className="paymentBreakupFirstRow payLabel">
                    <IonLabel>Vat %</IonLabel>
                  </div>
                  <div className="paymentBreakup">
                    <IonLabel className="payLabelLight">
                      {item.vat || 0}%
                    </IonLabel>
                  </div>
                  <div className="paymentBreakUprightSide">
                    <IonLabel className="payLabelLight">
                      {item.totalVat || 0} AED
                    </IonLabel>
                  </div>
                </div>
                <div className="paymentBreakup margin-top">
                  <div className="paymentBreakupFirstRow payLabel">
                    <IonLabel>Total Amount</IonLabel>
                  </div>
                  <div className="paymentBreakup">
                    <IonLabel className="payLabelLight">
                      {item.totalAmount} AED
                    </IonLabel>
                  </div>
                  <div className="paymentBreakUprightSide">
                    <IonLabel className="payLabel"></IonLabel>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="paymentBreakup payment-section  margin-top">
          <div className="paymentBreakupFirstRow payLabel">
            <IonLabel>Net Amount</IonLabel>
          </div>
          <div className="paymentBreakUprightSide">
            <IonLabel className="bluePaymentLable">
              {" "}
              {allPayableDetails.totalVat} AED
            </IonLabel>
          </div>
        </div>
        <div className="paymentBreakup  margin-top ">
          <div className="paymentBreakupFirstRow payLabel">
            <IonLabel>Gross Payable Amount</IonLabel>
          </div>
          <div className="paymentBreakUprightSide">
            <IonLabel className="bluePaymentLable">
              {allPayableDetails.grossAmount} AED
            </IonLabel>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
