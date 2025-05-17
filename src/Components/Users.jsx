import { useLoaderData } from "react-router";
import User from "./User";
import { useState } from "react";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <User
                users={users}
                setUsers={setUsers}
                key={user._id}
                user={user}
                index={index}
              ></User>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
