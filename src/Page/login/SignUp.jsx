import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../../redux/slices/UserSlice.js";
import BTN from "../../Components/BTN";
import HeadingTitle from "../../Components/heading-title/HeadingTitle";
import InputGroup from "../../Components/input-group/InputGroup";

const SignUp = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    id: users.length + 1,
    name: "",
    email: "",
    password: "",
  });

  const handelSignUp = (e) => {
    e.preventDefault();
    if (values.name !== "" && values.email !== "" && values.password !== "") {
      dispatch(addUser(values));
      setValues({
        name: "",
        email: "",
        password: "",
      });
      navigate("/login");
    } else {
      alert("Please enter all the data!");
    }
  };

  return (
    <div className="login text-center">
      <HeadingTitle title="إنشاء حساب" />

      <form className="login-form">
        <InputGroup
          label="الإسم"
          id="user-name"
          inputProps={{
            type: "name",
            placeholder: "الإسم كامل",
          }}
          value={values.name}
          onChange={({ target }) =>
            setValues({ ...values, name: target.value })
          }
        />
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

        <BTN onClick={handelSignUp}>تسجيل</BTN>
        <Link to="/login">لدي حساب</Link>
      </form>
    </div>
  );
};

export default SignUp;
