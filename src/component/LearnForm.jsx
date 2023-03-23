import React, { useState } from "react";
import Images from "../images/signup-image.jpg"

const LearnForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
    reppass: ""
  });

  const Inputvalue = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const SubmitForm = (e) => {
    e.preventDefault();

    if (formData.reppass !== formData.pass) {
      alert("Passwords don't match");
    }
    else {
      console.log(formData);
    }

  };

  return (
    <>
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form className="register-form" id="register-form" onSubmit={SubmitForm}>
                <div className="form-group">
                  <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                  <input type="text" name="name" onChange={Inputvalue} value={formData.name} id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                  <input type="email" name="email" onChange={Inputvalue} value={formData.email} id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                  <input type="password" name="pass" onChange={Inputvalue} value={formData.pass} id="pass" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                  <input type="password" name="reppass" onChange={Inputvalue} value={formData.reppass} id="re_pass" placeholder="Repeat your password" />
                </div>
                <div className="form-group form-button">
                  <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure><img src={Images} alt="sing up" /></figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LearnForm;
