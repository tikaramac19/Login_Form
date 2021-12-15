import React, { useState } from "react";
import "../css/register.css";
import swal from "sweetalert";
const Register = () => {
  const [user, setUser] = useState({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handelsubmit = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const show = (event) => {
     event.preventDefault();

     if(user.fname=='' || user.mname===''||user.lname==''||user.email==''||user.password===''||user.cpassword===''){
      swal("Incorrect !","Please enter all the field ", "error");

      
     }
    
     else{
       swal("Congratulations !", "You created new account","success");
     }
     
    

  };

  return (
    <div className="main">
      <div className="lefts">
        Registration <span>Here</span>!
      </div>

      <div className="rights">
        <form onSubmit={show}>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder=" firstname"
            value={user.fname}
            onChange={handelsubmit}
            autoComplete="off"
          />
          <br />
          <br />
          <input
            type="text"
            value={user.mname}
            onChange={handelsubmit}
            name="mname"
            id="mname"
            placeholder=" middelname"
            autoComplete="off"
          />
          <br />
          <br />
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="lastname"
            value={user.lname}
            onChange={handelsubmit}
            autoComplete="off"
          />
          <br />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="emailAddress"
            value={user.email}
            onChange={handelsubmit}
            autoComplete="off"
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="newPassword"
            value={user.password}
            onChange={handelsubmit}
            autoComplete="off"
          />
          <br />
          <br />
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            placeholder="confirmPassword"
            value={user.cpassword}
            onChange={handelsubmit}
            autoComplete="off"
          />
          <br />
          <br />
          <input type="submit" value="Register" className="lastone" />
        </form>
      </div>
    </div>
  );
};

export default Register;
