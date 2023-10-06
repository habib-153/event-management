import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <div className='-mt-10 text-center'>
            <h1 className='text-[400px] font-bold'>
                404
            </h1>
            <div className="-mt-16">
                <h2 className='text-5xl font-bold'>
                NOT FOUND
            </h2>
            <Link to='/'>Go to Home</Link>
            </div>
        </div>
        </div>
    );
};

export default Error;