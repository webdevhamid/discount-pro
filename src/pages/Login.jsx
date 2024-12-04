import { Eye, EyeOff } from "lucide-react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, signInWithGoogle, setUser, setForgetEmail } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Sign in user
    signInUser(email, password)
      .then((credential) => {
        const user = credential.user;
        //  Set the current user
        setUser(user);
        // Show successful toast
        toast.success("Signed in Successfully!");
        // Navigate the user to his desired path
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  // Sign in user using google auth
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;

        //  Set the current user
        setUser(user);
        toast.success("Account created successfully!");

        // Navigate the user to his desired path
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  return (
    <div className="min-h-[calc(100vh-69px)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Sign In</h2>
          <p className="mt-2 text-sm text-gray-600">Enter your email and password to sign in</p>
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
                onChange={(e) => setForgetEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-primary"
                placeholder="name@mail.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-primary"
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              SIGN IN
            </button>
          </div>

          <div className="text-sm text-right">
            <Link
              to="/auth/forget-password"
              className="font-medium text-gray-600 hover:text-gray-500"
            >
              Forgot password?
            </Link>
          </div>

          <div>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <img
                className="h-5 w-5 mr-2"
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google logo"
              />
              SIGN IN WITH GOOGLE
            </button>
          </div>

          <div className="text-sm text-center">
            <span className="text-gray-500">Not registered? </span>
            <Link to="/auth/register" className="font-medium text-gray-900 hover:text-gray-700">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
