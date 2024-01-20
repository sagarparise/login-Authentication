
import { MdOutlineArrowBackIos } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const ProfilePage = ({user, setUser})=>{

  return (
    <div className="form-container profilepage">
      <FaRegUserCircle className="profile-icon"/>
      <h1 style={{color:'#333'}}>Profile Page</h1>
      <p className="proInfo">User Name: {user.name}</p>
      <p className="proInfo">Email: {user.email}</p>
      <p className="proInfo">Password: {user.password}</p>
      <p className="back" onClick={()=>setUser("")}><MdOutlineArrowBackIos /> Back</p>
     
    </div>
  );
}
export default ProfilePage;