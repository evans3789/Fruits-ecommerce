import { useEffect, useState } from "react";
import "./LoginForm.css";
import { assests } from "../../assets/assets";
import axios from "axios";
const LoginForm = () => {
  const [loginSignUp, setLoginSignUp] = useState("Sign Up");
  const [image, setImage] = useState();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    image: image,
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    setData((prev) => ({ ...prev, image }));
  }, [image]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const url = "http://localhost:4000";

    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("image", data.image);

    const response = await axios.post(`${url}/api/user/register`, formData);
    if (response.data.success) {
      alert("success")
    } else {
     alert("error")
    }
  };

  return (
    <div className="login-signup">
      <h2>{loginSignUp}</h2>
      <form onSubmit={onSubmitHandler}>
        {loginSignUp === "Sign Up" ? (
          <p>
            Already have an account?
            <span
              onClick={() => {
                setLoginSignUp("Login");
              }}>
              Login
            </span>
          </p>
        ) : (
          <p>
            Don't have an account?
            <span
              onClick={() => {
                setLoginSignUp("Sign Up");
              }}>
              Sign up
            </span>
          </p>
        )}
        {loginSignUp === "Sign Up" ? (
          <div className="signup">
            <div className="names">
              <label htmlFor="profile">
                <img src={image ? URL.createObjectURL(image) : assests.profile} alt="" />
              </label>
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id="profile"
                hidden required
              />
              <input
                onChange={onChangeHandler}
                value={data.firstName}
                name="firstName"
                type="text"
                placeholder="First Name"
                required
              />
              <input
                onChange={onChangeHandler}
                value={data.lastName}
                name="lastName"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="email-pass">
              <input
                onChange={onChangeHandler}
                value={data.email}
                name="email"
                type="email"
                placeholder="example@gmail.com"
                required
              />
              <input
                onChange={onChangeHandler}
                value={data.password}
                name="password"
                type="password"
                placeholder="password"
                required
              />
            </div>
          </div>
        ) : (
          <div className="login">
            <input
              onChange={onChangeHandler}
              value={data.email}
              name="email"
              type="text"
              placeholder="example@gmail.com"
              required
            />
            <input
              onChange={onChangeHandler}
              value={data.password}
              name="password"
              type="password"
              placeholder="password"
              required
            />
          </div>
        )}

        <div className="terms">
          <p>
            <input type="checkbox" id="terms" required />
          </p>
          <p>I agree to the Terms and Conditions</p>
        </div>
        <button type="submit">
          {loginSignUp === "Sign Up" ? "Create Account" : "Login to Your Account"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
