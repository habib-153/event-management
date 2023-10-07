//import { useLoaderData } from "react-router-dom";
import Member from "./Member";
import { useEffect, useState } from "react";

const Team = () => {
    const [teamMembers, setTeamMembers] =useState([])

    useEffect(()=>{
        fetch('team.json')
        .then(res=>res.json())
        .then(data=>setTeamMembers(data))
    },[])
    return (
        <div className=" md:p-10 bg-[#1111111b] text-center">
            <div className="pt-4  space-y-4 lg:max-w-4xl mx-auto">
                <h2 className="text-5xl font-semibold ">Our <span className="text-[#ff9318cc] font-bold">Team Members</span></h2>
                <p className="text-xl font-medium">We make your events smart & impactful by personalised event management services</p>
            </div>
            <div className="grid md:grid-cols-2  mt-8 gap-4">
                {
                    teamMembers.map(member => <Member 
                        key={member.id}
                        member={member}
                        ></Member> )
                }
            </div>
        </div>
    );
};

export default Team;