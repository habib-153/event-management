import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const Services = useLoaderData()
    return (
        <div className="mt-5 md:p-10 bg-[#1111111b] text-center">
            <div className="pt-4 md:pt-8 lg:pt-14 space-y-4 lg:max-w-4xl mx-auto">
                <h2 className="text-5xl font-semibold ">Our <span className="text-[#ff9318cc] font-bold">Services</span></h2>
                <p className="text-xl font-medium">We make your events smart & impactful by personalised event management services</p>
                <p className="text-sm text-[#656565]">Our event management website offers a range of services to help you plan, organize, and execute your events with ease and efficiency.Our event management website is your one-stop solution for all your event needs. Contact us today and let us make your event a success!</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4">
                {
                    Services.map(service => <ServiceCard 
                        key={service.id}
                        service={service}
                        ></ServiceCard> )
                }
            </div>
        </div>
    );
};

export default Services;