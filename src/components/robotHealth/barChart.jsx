import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  Text,
  Legend,
} from "recharts";
import colorPalette from "../../utils/colorPalette";

const hoursOperatedData = [
  { day: "Sun", hours: 8 },
  { day: "Mon", hours: 7 },
  { day: "Tue", hours: 9 },
  { day: "Wed", hours: 8.5 },
  { day: "Thu", hours: 7.5 },
  { day: "Fri", hours: 6 },
  { day: "Sat", hours: 7.8 },
];

export default function HoursOperatedBarChart() {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={hoursOperatedData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 60, // Increased bottom margin for the legend
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day"></XAxis>

        <YAxis>
          <Label
            value="Hours Operated"
            angle={-90}
            position="insideLeft"
            style={{ textAnchor: "middle" }}
          />
        </YAxis>
        <Tooltip
          contentStyle={{
            backgroundColor: "#F4F6F8",
            border: "none",
            borderRadius: "5px",
            color: "#000000",
          }}
        />
        <Bar
          dataKey="hours"
          fill={colorPalette().AFUPurple}
          className="custom-bar"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
