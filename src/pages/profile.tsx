import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    document.title = "Lets Feast - Profile";
  });
  return (
    <div>
      <div className="flex items-center justify-center">
        <p>Profile</p>
      </div>
    </div>
  );
};

export default Profile;
