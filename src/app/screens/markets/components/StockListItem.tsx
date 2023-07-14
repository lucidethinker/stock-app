// type Props = {
//     heading :string;
//     subHeading:string;
//     stockdata:any[];
//     price:number;
//     variation:number;

import { ResponsiveContainer, LineChart, Line } from "recharts";
import { formatCurrency } from "../../../util/functions";
import { useNavigate } from "react-router-dom";

// }

const StockListItem = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full p-6  flex justify-between"
      onClick={() => navigate("/market-detail")}
    >
      <div>
        <h4 className="text-md font-bold">DJIA</h4>
        <h5 className="text-sm text-gray-300 whitespace-nowrap">
          Down Jones Industry
        </h5>
      </div>
      <div className="w-full ml-8W">
        <ResponsiveContainer width="80%" height="80%">
          <LineChart
            width={500}
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
              stroke="green"
              dot={false}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h4 className="text-md font-bold">{formatCurrency(25000.96)}</h4>
        <h5 className="text-red-500 text-sm">-0.36</h5>
      </div>
    </div>
  );
};

export default StockListItem;

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
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
