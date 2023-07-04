import React from "react";
import { NavLink } from "react-bootstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const Home = () => {
  const [users, setUsers] = React.useState([]);
  const { id } = useParams();
  React.useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/users");

      console.log(result.data);
      setUsers(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/deleteuser/${id}`);
      loadUsers();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index + 1}>
                  {index + 1}
                </th>
                <td>{user?.name}</td>
                <td>{user?.userName}</td>
                <td>{user?.email}</td>

                <Link
                  className="btn btn-primary mx-2 my-1"
                  to={`/viewuser/${user.id}`}
                >
                  View
                </Link>
                <Link
                  className="btn btn-outline-success mx-2 my-1"
                  to={`/edituser/${user.id}`}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-outline-danger mx-2 my-1"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
