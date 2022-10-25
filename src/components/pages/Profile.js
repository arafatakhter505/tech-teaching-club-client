import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";
import { toast } from "react-hot-toast";

const Profile = () => {
  const { logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Log Out Successfully"))
      .catch((e) => toast.error(e.message));
  };
  return (
    <div>
      <h2>This is profile page</h2>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default Profile;
