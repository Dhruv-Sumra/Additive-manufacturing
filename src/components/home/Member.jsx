import React , {useState , useEffect} from "react";
import data from "../../data/db.json";

const Member = () => {
  const [member, setMember] = useState([]);

  useEffect(() => {
    setMember(data.Member);
  }, []);

  return (
    <div className="px-5 md:px-15 w-full h-auto mt-15 bg-blue-50 py-10">
      <h2 className="text-2xl md:text-4xl text-center md:text-start font-bold">Membership benefits</h2>

      <p className="md:text-lg mt-2 w-full md:w-3/4 text-center md:text-start">
        Join ISAMC to connect with professionals, access exclusive resources,
        and advance your career in additive manufacturing.
      </p>

      <div className="px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {member.map((item, index) => (
          <div
            key={index}
            className="card_scale bg-blue-200 shadow-md p-3 md:p-4 rounded-md flex flex-col items-center text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-15 md:h-30 object-cover"
            />
            <h2 className="text-xl font-semibold mt-3">{item.title}</h2>
            <p className="text-black mt-2">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
      <a href=""><button className="text-white bg-blue-500 hover:bg-blue-600 py-2 cursor-pointer px-3 md:px-5 rounded-lg tracking-wide md:text-2xl">Become a Member</button></a>
      </div>    
    </div>
  );
};

export default Member;
