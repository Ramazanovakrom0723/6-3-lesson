// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [users, setUsers] = useState([])
//   const [form, setForm] = useState([])
  

//   const handleChange = (event) => {
//   const {name, value} = target.value;
//   event.preventDefault()
//   setUsers({...users})
//   console.log(users);
//   }

  



//   const handleSubmit = (event) => {
//     e.preventDefault()
//     const newUser = { name:value };
//     setUsers([...users, newUser]);
//   };

//   return (
//     <div className="container">
//       <div className="row mt-5">
//         <div className="col-md-12">
//           <div className="text-center">
//             <h2>Users Table</h2>
//           </div>
//           <table className="table table-bordered">
//             <thead>
//               <tr>
//                 <th>T/R</th>
//                 <th>Name</th>
//                 <th>Age</th>
//                 <th>Phone number</th>
//                 <th>Address</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((item, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{item.name}</td>
//                   <td>{item.age}</td>
//                   <td>{item.phone}</td>
//                   <td>{item.address}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-header">
//               <h3 className="text-center">Add User</h3>
//             </div>
//             <div className="card-body">
//               <form onSubmit={handleSubmit}>
//                 <input type="text"   on placeholder="Name" className="form-control my-2" />
//                 <input type="number" on placeholder="Age" className="form-control my-2" />
//                 <input type="tel"  on  placeholder="Phone" className="form-control my-2" />
//                 <input type="text"  on  placeholder="Address" className="form-control my-2" />
//               </form>
//             </div>
//             <div className="card-footer">
//               <button className="btn btn-primary" onClick={addUser}>Add Users</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...formData };
    setUsers([...users, newUser]);
    setFormData({});
    e.target.reset();
  };

  const dalateUser = (index)=> {
    let new_users = users.filter(index => index !== i)
    setUsers([...new_users])
  }

  return (
    <div className="container">
      <div className="row mt-5 text-center">
      <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h1 className="text-center">Add user</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control my-2"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  className="form-control my-2"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="form-control my-2"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="form-control my-2"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Add User
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-10">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col"> T/R</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Phone number</th>
                <th scope="col">Address</th>
                <th scope="col">Clear </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>
                    <button className="btn btn-danger">delate</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
}

export default UserList;