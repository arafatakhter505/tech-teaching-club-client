import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";
import { toast } from "react-hot-toast";
import { profile } from "../../assets";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Log Out Successfully"))
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="flex justify-center mt-12">
      <div className="w-80 p-6 shadow-2xl rounded flex flex-col items-center">
        <img
          src={user?.photoURL ? user?.photoURL : profile}
          className="rounded-full w-[100px] mb-8 border-2 border-sky-500"
          alt="profile"
        />
        <h3 className="text-sky-500 text-2xl font-semibold">
          {user?.displayName}
        </h3>
        <p>Email: {user?.email}</p>
        <button
          onClick={handleLogOut}
          className="bg-sky-500 text-white w-full px-4 py-2 mt-8"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
