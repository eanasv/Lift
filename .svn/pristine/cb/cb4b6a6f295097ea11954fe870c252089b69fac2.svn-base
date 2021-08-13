import { IonContent, IonIcon, IonList, IonPage } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import React, { useState } from "react";
import TxtInput from "../../components/txtinput/TxtInput";
import { isEmpty } from "../../util/Utilities";
import "./Profile.scss";

var objectdefn = {
  firstName: {},
};
function Profile() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    submitted: false,
    valid: false,
  });
  const [errors, setErrors] = useState<any>({});
  //   let errors: any = {};

  const login = () => {
    let errs: any = {};
    console.log("login");
    if (isEmpty(form.firstName)) {
      errs.firstName = "First Name is required";
    }
    if (isEmpty(form.lastName)) {
      errs.lastName = "Last Name is required";
    }

    if (isEmpty(form.email)) {
      errs.email = "Email is required";
    }
    console.log(errs);
    setErrors(errs);
  };
  const handleChange = (e: any, value: any) => {
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };
  return (
    <IonPage id="profilePage">
      <IonContent>
        <div className="main-container">
          <div className="login-logo">
            {/* <img src="assets/img/appicon.svg" alt="Ionic logo" /> */}
          </div>
          <div className="form-content">
            <div className="login-box-header"></div>
            <form noValidate onSubmit={login} autoComplete="off">
              <IonList className="form-section">
                <div className="login-header">
                  Profile
                  <hr />
                </div>
                <TxtInput
                  name={"firstName"}
                  value={form.firstName}
                  label="First Name"
                  errors={errors.firstName}
                  type="text"
                  required={true}
                  onChange={handleChange}
                  datatype="TEXT"
                  placeholder="First Name"
                />

                <TxtInput
                  name={"lastName"}
                  value={form.lastName}
                  label="Last Name"
                  errors={errors.lastName}
                  type="text"
                  required={true}
                  onChange={handleChange}
                  placeholder="Last Name"
                />

                <TxtInput
                  name={"email"}
                  value={form.email}
                  label="Email"
                  errors={errors.email}
                  type="email"
                  required={true}
                  onChange={handleChange}
                  description="Please enter email"
                  placeholder="Email"
                />

                <TxtInput
                  name={"mobile"}
                  value={form.mobile}
                  label="Mobile"
                  errors={errors.mobile}
                  type="text"
                  required={true}
                  onChange={handleChange}
                  datatype="TEL_NUM"
                  pattern="###-##-#######"
                  description="Tel Format 971-xx-xxxxxxx"
                  placeholder="Mobile"
                />
              </IonList>
              <div className="button-div">
                <div className="button-holder" onClick={login}>
                  <IonIcon slot="icon-only" icon={arrowForwardOutline} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Profile;
