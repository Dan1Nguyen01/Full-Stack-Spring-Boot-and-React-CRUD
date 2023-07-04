import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const AddUser = () => {
  let navigate = useNavigate();
  const [newUser, setNewUser] = React.useState({
    name: "",
    userName: "",
    email: "",
  });

  const { name, userName, email } = newUser;

  const onInputChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", newUser);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 showdow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              ></input>

              <label htmlFor="UserName" className="form-label">
                User name
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter user name"
                name="userName"
                value={userName}
                onChange={(e) => onInputChange(e)}
              ></input>

              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <button className="btn btn-outline-primary" type="submit">
              Submit
            </button>

            <Link className="btn btn-outline-danger mx-2" to={"/"}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
