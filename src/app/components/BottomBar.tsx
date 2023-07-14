import { PiNewspaper } from "react-icons/pi";
import { TbMobiledata } from "react-icons/tb";
import { BiPieChartAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const BottomBar = () => {
  return (
    <div className="w-full py-6 flex justify-evenly fixed bottom-0 border  bg-white z-50">
      <div>
        <NavLink
          to="/portfolio"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          <BiPieChartAlt size={30} className="text-inherit" />
          Portfolio
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/market"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          <TbMobiledata size={30} className="text-inherit" />
          Markets
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          <PiNewspaper size={30} />
          News
        </NavLink>
      </div>
    </div>
  );
};

export default BottomBar;
