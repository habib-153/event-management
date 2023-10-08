import { FcGoogle } from 'react-icons/fc'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleGoogleLogin =()=>{
    googleLogin()
    .then((res) => {
      console.log(res.user)
      toast.success("Login successful")

      // navigate after login
      navigate('/')
    })
    .catch((err) => {
      console.error(err);
      toast.error(err.message)
    });
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    //console.log(email, password);

    signIn(email, password)
      .then((res) => {
        console.log(res.user)
        toast.success("Login successful")

        // navigate after login
        navigate('/')
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message)
      });
  };
  return (
    <div className="mx-auto rounded-[5px] card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
      <h2 className="text-[30px] text-center font-semibold m-12 mb-0 pb-8 border-b-2">
        Login your account
      </h2>
      <form onSubmit={handleLogin} className="card-body px-12">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[18px] text-[#403F3F] font-semibold">
              Email Address
            </span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[18px] text-[#403F3F] font-semibold">
              Password
            </span>
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-4">
          <button
            type="submit"
            className="btn bg-[#ff9318cc] text-[#FFF] hover:bg-[#b8772d] rounded-[5px]"
          >
            Login
          </button>
        </div>
      </form>
      <p className="text-[#706F6F] text-[16px] text-center -mt-4 pb-2">
        Dont’t Have An Account ?{" "}
        <Link to="/register" className="text-[#ff9318cc] font-semibold">
          Register
        </Link>
      </p>
      <div className='px-12'>
      <button onClick={handleGoogleLogin} className="btn btn-outline w-full my-2">
          <FcGoogle className='text-xl'></FcGoogle>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
