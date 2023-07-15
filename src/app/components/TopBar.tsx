import { RiNotificationLine } from "react-icons/ri";
import { HiMenuAlt4 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
const TopBar = () => {
  return (
    <div className="bg-blue-600 ">
      <div className="flex justify-between p-6">
        <div>
          {" "}
          <HiMenuAlt4 size={25} className="text-white" />{" "}
        </div>
        <div>
          <RiNotificationLine size={25} className="text-white" />{" "}
        </div>
      </div>
      <div>
        <h1 className="text-4xl text-white font-bold px-6 py-2">Markets</h1>
      </div>
      <div className="px-6 pt-3">
        <input
          type="text"
          placeholder="Search Markets"
          className="input input-bordered w-full max-w-md bg-opacity-30 text-white placeholder-white"
        />
      </div>
      <div className="px-6 py-6">
        <div className=" flex overflow-x-auto gap-10 w-full">
          <NavLink
            to="/market"
            className={({ isActive }) =>
              isActive ? "opacity-100" : "opacity-30"
            }
          >
            <h4 className="text-white font-semibold whitespace-nowrap">
              {" "}
              Main Market
            </h4>
          </NavLink>
          <NavLink
            to="/market"
            className={({ isActive }) =>
              isActive ? "opacity-100" : "opacity-30"
            }
          >
            <h4 className="text-white font-semibold whitespace-nowrap">
              {" "}
              Junior Market
            </h4>
          </NavLink>
          <NavLink
            to="/market"
            className={({ isActive }) =>
              isActive ? "opacity-100" : "opacity-30"
            }
          >
            <h4 className="text-white font-semibold whitespace-nowrap">
              {" "}
              FX Rates
            </h4>
          </NavLink>
          <NavLink
            to="/market"
            className={({ isActive }) =>
              isActive ? "opacity-100" : "opacity-30"
            }
          >
            <h4 className="text-white font-semibold whitespace-nowrap">
              {" "}
              Funding
            </h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
