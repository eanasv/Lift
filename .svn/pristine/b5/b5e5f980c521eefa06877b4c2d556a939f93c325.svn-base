import { IonInput, IonLabel, IonText } from "@ionic/react";
import React, { useState } from "react";
import { TextInputType } from "../../util/DataTypes";
import "./TxtInput.scss";

interface TxtInputProps {
  label?: string;
  name: any;
  type: any;
  value?: any;
  onChange?: any;
  required?: any;
  errors?: any;
  pattern?: any;
  datatype?: TextInputType;
  description?: string;
  placeholder: string;
  icon?: any;
  onBlur?: any;
  readonly?: boolean;
}
const UnderLinedInput: React.FC<TxtInputProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  required,
  errors,
  pattern,
  datatype,
  description,
  placeholder,
  icon,
  onBlur,
  readonly,
}) => {
  const [validation, setvalidation] = useState(false);
  const checkKey = (e) => {
    if (e.key.length > 1) return true;
    // setvalidation(!isValid(datatype, e.key));
    // if (!isValid(datatype, e.key)) {
    //   e.preventDefault();
    //   return false;
    // }
  };

  const onInpChange = (e) => {
    let val = e.target.value;
    let validate;
    if (e.target.pattern) {
      // val = getPatternValue(val, e.target.pattern, "-");
    }
    if (e.target.type === "email") {
      //   validate = validateEmail(val);
      //   setvalidation(!validate);
    }
    onChange(e, val, validate);
  };
  return (
    <div className="form-element-group">
      <div className="blue-underLine">
        {/* <legend>{label}</legend> */}
        <IonInput
          name={name}
          type={type}
          value={value}
          spellCheck={false}
          autocapitalize="off"
          onKeyDown={checkKey}
          onIonChange={onInpChange}
          clearInput={true}
          required={required}
          autocomplete="off"
          pattern={pattern}
          placeholder={placeholder}
          className="textInputWithBlueBorder"
          onIonBlur={(e) => {
            if (onBlur) onBlur(e);
          }}
          readonly={readonly ? readonly : false}
        ></IonInput>
      </div>

      <div className="">
        {errors && (
          <IonText color="danger" className="validation-message">
            <IonLabel className="ion-padding-start">{errors}</IonLabel>
          </IonText>
        )}
      </div>
      {validation && description && (
        <IonText color="danger" className="validation-message">
          <IonLabel className="ion-padding-start">{description}</IonLabel>
        </IonText>
      )}
    </div>
  );
};

export default UnderLinedInput;
