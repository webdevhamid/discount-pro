import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { forgetEmail, resetPasswordEmail, setForgetEmail, user, logOut } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset password with email
    resetPasswordEmail(forgetEmail)
      .then(() => {
        if (user && user.email) {
          // Logout the user
          logOut();
        }
        window.open("https://mail.google.com/", "_blank");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  return (
    <div className="min-h-[calc(100vh-69px)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Reset you password</h2>
          <p className="mt-2 text-sm text-gray-600">Enter your email to reset your password</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={forgetEmail}
                onChange={(e) => setForgetEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-primary"
                placeholder="name@mail.com"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Reset password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
