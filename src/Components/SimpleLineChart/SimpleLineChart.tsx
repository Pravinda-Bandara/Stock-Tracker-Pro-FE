import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from "recharts";

type Props = {
  data: any;
  xAxis: string;
  dataKey: string;
};

const SimpleLineChart = ({ data, xAxis, dataKey }: Props) => {
  return (
    <>
      <ResponsiveContainer width={"98%"} height={500}>
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 20, // Increase right margin for better spacing
            left: 20,  // Increase left margin for better spacing (for Y-axis label)
            bottom: 40, // Increase bottom margin for better spacing (for X-axis label)
          }}
        >
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#40c463" // Line color
            strokeWidth={3} // Increased stroke width for the line
            activeDot={{ r: 8 }}
          />
          
          <XAxis
            dataKey={xAxis}
            stroke="#cccccc" // X-axis line color
            tick={{ fill: "#40c463", fontSize: 14 }} // X-axis tick color and font size
            strokeWidth={2} // Increased thickness of the X-axis line
            label={{
              value: "Date", // Set X-axis label
              position: "insideBottom",
              offset: -20, // Adjust offset to avoid cutting off
              fill: "#cccccc", // Label color
              fontSize: 24,
            }}
          />
          <YAxis
            stroke="#cccccc" // Y-axis line color
            tick={{ fill: "#40c463", fontSize: 14 }} // Y-axis tick color and font size
            strokeWidth={2} // Increased thickness of the Y-axis line
            label={{
              value: "Dividend", // Set Y-axis label
              angle: -90, // Rotate Y-axis label
              position: "insideLeft",
              offset: -3, // Increase the offset to move it further
              fill: "#cccccc", // Label color
              fontSize: 24,
            }}
          />

          {/* Tooltip for displaying values when hovering */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#333",
              border: "1px solid #cccccc",
              color: "#cccccc",
            }}
            labelStyle={{
              color: "#ffffff",
              fontSize: 16,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default SimpleLineChart;
