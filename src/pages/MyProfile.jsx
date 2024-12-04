import { useContext } from "react";
import WelcomeUser from "../components/WelcomeUser";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="min-h-screen">
      <div
        className="hero h-[300px] relative"
        style={{
          backgroundImage: "url(../src/assets/profile-bg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-5xl font-medium">
            {/* Welcome Message */}
            <WelcomeUser user={user} font="5xl" color="white" content="Welcome" />
          </div>
        </div>
      </div>
      {/* Profile Card */}
      <div className="card bg-base-100 w-96 shadow-xl absolute top-80 left-1/2 -translate-x-1/2 ">
        <figure>
          <img src={user?.photoURL} alt="Shoes" />
        </figure>
        <form className="card-body">
          {/* Name */}
          <div className="from-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <p className="text-xl">{user?.displayName}</p>
          </div>
          {/* Email */}
          <div className="form-control mb-2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <p>
              <span className="text-xl">{user?.email}</span>
            </p>
          </div>

          <div className="card-actions justify-start">
            <Link to="/update-profile" className="btn bg-primary text-white px-6 w-full">
              Update Profile
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
