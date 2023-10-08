import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
    const { createUser, handleUpdateProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photoURL')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);

        if(password.length < 6){
          toast.error('Password should be at 6 characters or longer');
          return
      }
      else if(!/[A-Z]/.test(password)){
        toast.error('Your password should have at least one Uppercase Character and a Special Character');
          return;
      }

        createUser(email, password)
        .then((res) => {
          console.log(res.user)
          toast.success("Registration successful")
    
          // navigate after login
          navigate('/')
        })
        .catch((err) => {
          console.error(err);
          toast.error(err.message)
        });
        handleUpdateProfile(name, photo)
        .then(()=>{
          console.log("updated")
      })
      .catch(err =>{
          console.error(err)
      })
      }

    return (
        <div className="mx-auto rounded-[5px] card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <h2 className="text-[30px] text-center font-semibold m-12 mb-0 pb-8 border-b-2">Register your account</h2>
            <form onSubmit={handleRegister} className="card-body px-12">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[18px] text-[#403F3F] font-semibold">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered rounded bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[18px] text-[#403F3F] font-semibold">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Enter your img url"
                  className="input input-bordered rounded bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[18px] text-[#403F3F] font-semibold">Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="input input-bordered rounded bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[18px] text-[#403F3F] font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  className="input input-bordered rounded bg-[#F3F3F3]"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-3">
                <button type="submit" className="btn bg-[#ff9318cc] text-[#FFF] hover:bg-[#b8772d] rounded-[5px]">Register</button>
              </div>
            </form>
            <p className="text-[#706F6F] text-[16px] text-center -mt-4 pb-2">Already Have An Account ? <Link to='/login' className="text-[#ff9318cc] font-semibold">Login</Link></p>
          </div>
    );
};

export default Register;