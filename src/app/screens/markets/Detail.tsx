import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../util/functions";
import { ResponsiveContainer, LineChart, Line } from "recharts";
import { IoChevronBackSharp } from "react-icons/io5";

const Detail = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-full p-6  ">
        <div className="flex gap-2">
          <div
            className="rounded-full border w-10 h-10 flex items-center justify-center"
            onClick={() => navigate("/market")}
          >
            <IoChevronBackSharp size={20} />
          </div>
          <div>
            <h4 className="text-md font-bold">DJIA</h4>
            <h5 className="text-sm text-gray-300 whitespace-nowrap">
              Down Jones Industry
            </h5>
          </div>
        </div>
        <div className="my-6">
          <h4 className="text-4xl font-bold">{formatCurrency(25000.96)}</h4>
          <h5 className="text-red-500 text-xl">-0.36</h5>
        </div>

        <div className="w-full  mt-6">
          <ResponsiveContainer width="100%" height={100}>
            <LineChart
              width={300}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <Line
                type="monotone"
                dataKey="uv"
                stroke="black"
                dot={false}
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex gap-4 justify-between">
          <div className="rounded-full border w-10 h-10 flex items-center justify-center">
            <h4 className="text-sm font-bold">1D</h4>
          </div>
          <div className="rounded-full border w-10 h-10 flex items-center justify-center">
            <h4 className="text-sm font-bold">7D</h4>
          </div>
          <div className="rounded-full border w-10 h-10 flex items-center justify-center">
            <h4 className="text-sm font-bold">1M</h4>
          </div>
          <div className="rounded-full border w-10 h-10 flex items-center justify-center">
            <h4 className="text-sm font-bold">3M</h4>
          </div>
          <div className="rounded-full border w-10 h-10 flex items-center justify-center">
            <h4 className="text-sm font-bold">1Y</h4>
          </div>
        </div>

        <div className="flex flex-col gap-2 my-6 px-1">
          <div className="flex w-full">
            <div className="w-1/2">
              <h4 className="text-lg font-medium text-left">Close Price</h4>
            </div>
            <div className="w-1/2">
              <h4 className="text-lg font-extrabold text-right">
                {formatCurrency(25000.96)}
              </h4>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/2">
              <h4 className="text-lg font-medium text-left">
                Last Trading Place
              </h4>
            </div>
            <div className="w-1/2">
              <h4 className="text-lg font-extrabold text-right">
                {formatCurrency(25000.96)}
              </h4>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/2">
              <h4 className="text-lg font-medium text-left">Outstanding</h4>
            </div>
            <div className="w-1/2">
              <h4 className="text-lg font-extrabold text-right">
                {formatCurrency(25000.96)}
              </h4>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/2">
              <h4 className="text-lg font-medium text-left">Market Value</h4>
            </div>
            <div className="w-1/2">
              <h4 className="text-lg font-extrabold text-right">
                {formatCurrency(25000.96)}
              </h4>
            </div>
          </div>
        </div>

        <div>
          <button className="btn w-full bg-black text-white">
            Add to portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 350,
    pv: 4300,
    amt: 2100,
  },
];
