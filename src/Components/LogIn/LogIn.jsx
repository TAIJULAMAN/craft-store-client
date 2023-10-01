import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext,  useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";


const LogIn = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { signIn } = useContext(AuthContext);

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // validation
    setError("");
    setSuccess("");
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Please add at least two uppercase.");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Please add a special character.");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 characters long");
      return;
    }
    signIn(email, password)
      // .then(result => {
      //     const user = result.user;
      //     console.log(user);
      // })
      // .catch(error => console.log(error));

      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        if (!loggedUser.emailVerified) {
          alert("please verify your mail");
        }
        setSuccess("User login successful.");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
    
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Please Login</h1>
            {/* <form> */}
            <form onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="LogIn"
                />
              </div>
            </form>
            <p className='text-black'>{error}</p>
       <p className='text-black'>{success}</p>

            {/* redirect to sign up */}
            <p className="my-4 text-center">
              New to Crafts ?{" "}
              <Link className="text-orange-600 font-bold" to="/signup">
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
