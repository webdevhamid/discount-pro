import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, updateUserProfile, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    // User display name and photo url
    // Update user profile
    updateUserProfile(name, photo)
      .then(() => {
        // show successful toast
        toast.success("Profile updated successfully!");

        // Navigate the user to my profile
        navigate("/my-profile");

        // Set the loading to false
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
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
            <h2 className="text-5xl">Update Your Profile</h2>
          </div>
        </div>
      </div>
      {/* Profile Card */}
      <div className="card bg-base-100 w-96 shadow-xl absolute top-80 left-1/2 -translate-x-1/2 ">
        <figure>
          <img src={user?.photoURL} alt="Shoes" />
        </figure>
        <form className="card-body" onSubmit={handleUpdateProfile}>
          {/* Name */}
          <div className="from-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="url"
              placeholder="New photoURL"
              className="input input-bordered"
              required
              name="photo"
              defaultValue={user.photoURL}
            />
          </div>
          {/* Email */}
          <div className="form-control mb-2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="New name"
              className="input input-bordered"
              required
              defaultValue={user.displayName}
            />
          </div>

          <div className="card-actions justify-start">
            <button className="btn bg-primary text-white px-6 w-full">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
