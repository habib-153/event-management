/* eslint-disable react/prop-types */
import { useLoaderData, useParams } from "react-router-dom";
import { saveEvent } from "../../../Utility/LocalStorage";
import toast from "react-hot-toast";




const ServiceDetails = () => {
    
    const services = useLoaderData()
    
    const {id} = useParams();
    const idInt = parseInt(id);
    const service = services.find(service => service.id === idInt)
    saveEvent(service)
    console.log(service);
    
    const handleSave = () => {
        saveEvent(idInt);
        toast.success("Thanks For Your Booking")
    }
    return (
        <div>
            <div>
                <img className="w-full md:h-[500px] rounded-xl" src={service.image}alt="" />
                <div className="bg-[#392b1cdd] flex justify-between p-5 relative bottom-[86px] rounded-xl">
                    <button 
                    className="bg-[#ff9318fe] text-[#FFF] px-6 py-2 rounded-xl font-semibold text-[20px]">
                        Price: ${service.price}
                    </button>
                    <button onClick={handleSave}
                    className="btn bg-[#ff9318fe] hover:bg-[#916e47fe] text-[#FFF] px-6 py-2 rounded-xl font-semibold text-[20px]">
                        Book Now
                    </button>

                </div>
            </div>
            <h2 className="-mt-10 font-bold text-[#0B0B0B] text-4xl">{service.name}</h2>
            <p className="my-5 text-[16px] text-[rgba(11,11,11,0.7)]">{service.description}</p>
        </div>
    );
};

export default ServiceDetails;