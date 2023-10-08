import Team from "../Team/Team";

const JoinUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photoURL = form.get('photo')
        const email = form.get('email')
        const phone = form.get('phone')
        const present_address = form.get('present_address')
        console.log(name, photoURL, email, phone, present_address);
    }
    
    return (
        <div>
            <div className="px-8 md:p-10 bg-[#1111111b] text-center">
            <div data-aos="zoom-in-up"  data-aos-duration="500" className="mx-auto rounded-[5px] card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <h2 className="text-[30px] text-center font-semibold m-12 mb-0 pb-8 border-b-2">Join Us as a Event Manager</h2>
            <form onSubmit={handleSubmit} className="card-body px-12">
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
                  <span className="label-text text-[18px] text-[#403F3F] font-semibold">Upload Image</span>
                </label>
                <input
                  type="file"
                  name="photo"
                  placeholder="Upload your image"
                  className=""
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
                  <span className="label-text text-[18px] text-[#403F3F] font-semibold">Phone Number</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="input input-bordered rounded bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[18px] text-[#403F3F] font-semibold">Present Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Present Address"
                  name="present_address"
                  className="input input-bordered rounded bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control mt-3">
                <button type="submit" className="btn bg-[#ff9318cc] text-[#FFF] hover:bg-[#b8772d] rounded-[5px]">Submit</button>
              </div>
            </form>
          </div>
            </div>
            <Team></Team>
        </div>
    );
};

export default JoinUs;