import React, { useEffect, useState } from "react";
import Home from "../Sidebar/Sidebar";
import "../../Styles/Profile/MyProfile.css";
import Cookies from "js-cookie";
import axios from "axios";

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  image: string;
  skills: string[];
  experience: string;
  bio: string;
}

interface MyProfileProps {
  employee: Employee;
}

const MyProfile: React.FC<MyProfileProps> = ({ employee }) => {

  const [info, setInfo] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    var userInfo: string | undefined = Cookies.get('userInfo')
    if (userInfo !== undefined) {
      var Info: string | null = localStorage.getItem(userInfo)
      if (Info !== null) {
        setInfo(JSON.parse(Info));
      }

    }
  }, [])

  const [employeeInfo, setEmployeeInfo] = useState<Employee>({
    id: 0,
    name: '',
    position: '',
    department: '',
    email: '',
    phone: '',
    image: '',
    skills: [],
    experience: '',
    bio: '',
  });

  // const response =  axios.post("http://localhost:8000/myprofile", employeeInfo);

  return (
    <>
      <Home />
      <span className="heading">
        <h3>My Profile</h3>
      </span>
      <div className="profile-details">
        <img
          className="profile-image"
          src={employee.image}
          alt={employee.name}
        />
        <h1>{employee.name}</h1>
      </div>
      <div className="otherdetails">
        <p>Position: {employee.position}</p>
        <p>Department: {employee.department}</p>
        <p>Email: {employee.email}</p>
        <p>Phone: {employee.phone}</p>
        <h3>Skills:</h3>
        <ul>
          {employee.skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <h3>Experience:</h3>
        <p>{employee.experience}</p>
        <h3>Bio:</h3>
        <p>{employee.bio}</p>
      </div>
    </>
  );
};

export default MyProfile;


//Trying to get things Dynamicaly 

// import React, { useEffect, useState } from "react";
// import Home from "./Home";
// import "./MyProfile.css"; // You can create a separate CSS file for styling
// import Cookies from "js-cookie";

// interface Employee {
//   id: number;
//   name: string;
//   position: string;
//   department: string;
//   email: string;
//   phone: string;
//   image: string;
//   skills: string[];
//   experience: string;
//   bio: string;
// }

// interface MyProfileProps {
//   employee: Employee; // Pass the employee's ID to the component
// }

// const MyProfile: React.FC<MyProfileProps> = ({ employee }) => {
//   const [info, setInfo] = useState({
//     name: "",
//     email: "",
//   });

//   const [employeeInfo, setEmployeeInfo] = useState<Employee>({
//     id: parseInt(''),
//     name: '',
//     position: '',
//     department: '',
//     email: '',
//     phone: '',
//     image: '',
//     skills: [],
//     experience: '',
//     bio: '',
//   });

//   useEffect(() => {
//     var userInfo: string | undefined = Cookies.get("userInfo");
//     if (userInfo !== undefined) {
//       var Info: string | null = localStorage.getItem(userInfo);
//       if (Info !== null) {
//         setInfo(JSON.parse(Info));
//       }
//     }

//     // Fetch employee profile data from the API
//     fetch(`http://localhost:8000/profile/${employee}`)
//       .then((response) => response.json())
//       .then((data) => setEmployeeInfo(data))
//       .catch((error) => console.error("Error fetching employee profile:", error));
//   }, [employee]);

//   return (
//     <>
//     <div className=".my-profile-container">
//       <Home />
//       <span className="heading">
//         <h3>My Profile</h3>
//       </span>
//       <div className="profile-details">
//         <img
//           className="profile-image"
//           src={employee.image}
//           alt={employee.name}
//         />
//         <h1>{employeeInfo.name}</h1>
//       </div>
//       <div className="otherdetails">
//         <p>Position: {employee.position}</p>
//         <p>Department: {employee.department}</p>
//         <p>Email: {employee.email}</p>
//         <p>Phone: {employee.phone}</p>
//         <h3>Skills:</h3>
//         <ul>
//           {employee.skills.map(skill => (
//             <li key={skill}>{skill}</li>
//           ))}
//         </ul>
//         <h3>Experience:</h3>
//         <p>{employee.experience}</p>
//         <h3>Bio:</h3>
//         <p>{employee.bio}</p>
//       </div>
//       </div>
//     </>
//   );
// };

// export default MyProfile;

