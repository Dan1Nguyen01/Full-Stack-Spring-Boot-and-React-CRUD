import React from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
const ViewUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = React.useState({});

  const getUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
    console.log(result.data + "here");
  };

  React.useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 showdow">
          <h2 className="text-center m-4">User Detail</h2>

          <div className="card">
            <div className="card-header">
              Details of user id:
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name: {user.name}</b>
                </li>
                <li className="list-group-item">
                  <b>UserName: {user.userName}</b>
                </li>
                <li className="list-group-item">
                  <b>Email: {user.email}</b>
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
