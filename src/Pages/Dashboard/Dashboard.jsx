import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredEvent } from "../../Utility/LocalStorage";

const Dashboard = () => {
  const services = useLoaderData();

  const [serviceCards, setServiceCards] = useState([]);

  const [serviceLength, setServiceLength] = useState(4);

  useEffect(() => {
    const storedServiceIds = getStoredEvent();

    if (services.length > 0) {
      const booked = [];
      for (const id of storedServiceIds) {
        const service = services.find((service) => service.id === id);
        if (service) {
          booked.push(service);
        }
        setServiceCards(booked);
      }
    }
  }, [services]);
  return (
    <div data-aos="fade-up"  data-aos-duration="500" className="p-4">
      <div className="grid my-4 gap-4 md:grid-cols-2 grid-cols-1">
        {serviceCards.slice(0, serviceLength).map((service) => (
          <div key={service.id}>
            <div className="rounded-lg p-2 bg-base-300">
              <div className="flex items-center gap-3">
                <figure className="w-[180px] h-[160px]">
                  <img
                    className="w-full h-full rounded-lg"
                    src={service.image}
                  />
                </figure>
                <div className="px-2 py-5">
                  <h2 className="font-bold mt-3 text-xl text-[#201f1fe1]">
                    {service.name}
                  </h2>
                  <p className="font-semibold text-[#201f1fe1]">
                    $ {service.price}
                  </p>
                  <Link service={service} to={`/service/${service.id}`}>
                    <button className="btn text-[#FFFF]  bg-[#ff9318cc] hover:bg-[#8f5615]">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={serviceCards.length <= 4 && "hidden"}>
        <div className={serviceLength === services.length && "hidden"}>
          <div className="my-8 flex justify-center">
            <button
              onClick={() => setServiceLength(services.length)}
              className="text-white py-3 rounded-lg px-6 bg-[#ff9318cc]"
            >
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
