import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BTN from "../../Components/BTN";
import HeadingTitle from "../../Components/heading-title/HeadingTitle";
import InputGroup from "../../Components/input-group/InputGroup";
import "./login.css";

const Login = () => {
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handelClick = (e) => {
    e.preventDefault();
    if (values.email !== "" && values.password !== "") {
      const existingUser = users.find((user) => user.email === values.email);

      if (existingUser) {
        existingUser.password === values.password
          ? navigate("/")
          : alert("Your Password Is Wrong! Please Try Again!");
      } else {
        alert("User Is Not found!");
      }
    } else {
      alert("Please Enter All The Data!");
    }
  };

  return (
    <div className="login text-center">
      <HeadingTitle title="تسجيل الدخول" />

      <form className="login-form">
        <InputGroup
          label="البريد الالكتروني"
          id="user-email"
          inputProps={{
            type: "email",
            placeholder: "البريد الالكتروني او رقم الهاتف",
          }}
          value={values.email}
          onChange={({ target }) =>
            setValues({ ...values, email: target.value })
          }
        />
        <InputGroup
          label="كلمة المرور"
          id="user-password"
          inputProps={{
            type: "password",
            placeholder: "كلمة المرور",
          }}
          value={values.password}
          onChange={({ target }) =>
            setValues({ ...values, password: target.value })
          }
        />
        <BTN onClick={handelClick}>تسجيل الدخول</BTN>
        <Link to="/sign-up">إنشاء حساب جديد</Link>
      </form>
    </div>
  );
};

export default Login;
