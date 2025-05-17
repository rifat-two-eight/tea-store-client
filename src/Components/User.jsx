import React from "react";
import Swal from "sweetalert2";

const User = ({ user, index, users, setUsers }) => {
  const { _id, name, address, phone } = user;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = users.filter((user) => user._id !== _id);
              setUsers(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td className="flex gap-2">
          {" "}
          <button className="btn">V</button>
          <button className="btn">E</button>
          <button onClick={() => handleDelete(_id)} className="btn">
            X
          </button>
        </td>
      </tr>
    </>
  );
};

export default User;
