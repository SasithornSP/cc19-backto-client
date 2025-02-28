import React, { useEffect, useState } from "react";
import useAuthStore from "../../store/auth-store";
import {
  actionDeleteUser,
  actionListUser,
  actionUpdateRole,
} from "../../api/user";
import { Trash2 } from "lucide-react";
import { createAlert } from "../../utils/createAlert";
import Swal from "sweetalert2";

function Manage() {
  const [users, setUsers] = useState([]);
  const token = useAuthStore((state) => state.token);
  console.log(users);

  useEffect(() => {
    hdlFetchUsers(token);
  }, []);

  const hdlFetchUsers = async (token) => {
    try {
      const resp = await actionListUser(token);
      setUsers(resp.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  const hdlUpdateRole = async (token, id, role) => {
    console.log(token, id, role);
    try {
      const resp = await actionUpdateRole(token, { id, role });
      createAlert("success", "Update Role Success");
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  const hdlDeleteUser = async (token, id) => {
    console.log(token, id);
    try {
      Swal.fire({
        icon: "info",
        text: "Are you sure?",
        //showDenyButton:true
        showCancelButton: true,
        showCloseButton: true,
      }).then(async (data) => {
        console.log(data.isConfirmed);
        if (data.isConfirmed) {
          const resp = await actionDeleteUser(token, id);
          console.log(resp);
          createAlert("success", "Delete success!!");
          hdlFetchUsers(token);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>
                  <select
                    onChange={(e) =>
                      hdlUpdateRole(token, item.id, e.target.value)
                    }
                    defaultValue={item.role}
                  >
                    <option>USER</option>
                    <option>ADMIN</option>
                  </select>
                </td>
                <td>
                  <Trash2
                    onClick={() => hdlDeleteUser(token, item.id)}
                    color="red"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Manage;
