import "../css/login.css";
import { useState } from "react";
import swel from 'sweetalert';
const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  let getname, getvalue;
  const handelInput = (event) => {
    getname = event.target.name;
    getvalue = event.target.value;

    setUser({ ...user, [getname]: getvalue });
  };

  const showresult = (event) => {

    event.preventDefault();
    
    if (user.username == "tikaramac@gmail.com" && user.password == "12345678") {
      swel("Congratulations ! sign in successfull ","Enjoy ","success")
    } else {
      swel("Username/password missing !", "Please try again ", "error");
    }
  };

  return (
    <div className="loginmain">
      <div className="leftone">
        Login With <br /> Your BloodBank Account !
      </div>
      <div className="rightone">
        <form onSubmit={showresult}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value={user.username}
            onChange={handelInput}
          />
          <br />
          <br />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={user.password}
            onChange={handelInput}
          />
          <br />
          <br />
          <input type="submit" value="Sign In" className="signin" />
        </form>
      </div>
    </div>
  );
};

export default Login;
