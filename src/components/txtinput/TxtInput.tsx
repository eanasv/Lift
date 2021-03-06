import { IonIcon, IonInput, IonLabel, IonText } from "@ionic/react";
import { personOutline, pulseOutline } from "ionicons/icons";
import { TextInputType } from "../../util/DataTypes";
import React, { useState } from "react";
import "./TxtInput.scss";
import { getPatternValue, isValid, validateEmail } from "../../util/Utilities";
import { connect } from "../../data/connect";
import Icon from "../Icon";
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
  readonly?: any;
  contactForm?: any;
  max?: number;
}
const TxtInput: React.FC<TxtInputProps> = ({
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
  contactForm,
  max,
}) => {
  const [validation, setvalidation] = useState(false);
  const checkKey = (e) => {
    if (e.key.length > 1) return true;
    setvalidation(!isValid(datatype, e.key));
    if (!isValid(datatype, e.key)) {
      e.preventDefault();
      return false;
    }
  };

  const onInpChange = (e) => {
    let val = e.target.value;
    let validate;
    if (e.target.pattern) {
      val = getPatternValue(val, e.target.pattern, "-");
    }
    if (e.target.type === "email") {
      validate = validateEmail(val);
      setvalidation(!validate);
    }
    if (!readonly) onChange(e, val, validate);
  };

  return (
    <div
      className="form-element-group"
      style={contactForm ? { width: "350px", padding: "0" } : {}}
    >
      <fieldset>
        <legend>{label}</legend>
        {type === "tel" ? (
          <IonLabel className="regularFont-textInput">971</IonLabel>
        ) : (
          <></>
        )}
        <IonInput
          name={name}
          type={type}
          value={value}
          spellCheck={false}
          autocapitalize="off"
          //readonly={readonly}
          onKeyDown={checkKey}
          onIonChange={onInpChange}
          clearInput={true}
          required={required}
          autocomplete="off"
          pattern={pattern}
          placeholder={placeholder}
          className="textInput"
          onIonBlur={(e) => {
            if (onBlur) onBlur(e);
            else {
            }
          }}
          maxlength={max}
          readonly={readonly ? readonly : false}
        >
          {icon && (
            <Icon iconProps={icon} />
            // <IonIcon slot="primary" icon={pulseOutline} />
          )}
        </IonInput>
      </fieldset>

      <div className="">
        {errors && (
          <IonText color="danger" className="validation-message">
            <IonLabel className="ion-padding-start validation-message">
              {errors}
            </IonLabel>
          </IonText>
        )}
      </div>
      {validation && description && (
        <IonText color="danger" className="validation-message">
          <IonLabel className="ion-padding-start validation-message">
            {description}
          </IonLabel>
        </IonText>
      )}
    </div>
  );
};

export default TxtInput;
