import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import colorPalette from "../../utils/colorPalette";

const robotHoursData = [
  { day: "Sunday", "Robot A": 8, "Robot B": 6, "Robot C": 7 },
  { day: "Monday", "Robot A": 7.5, "Robot B": 5.5, "Robot C": 6.8 },
  { day: "Tuesday", "Robot A": 2, "Robot B": 1, "Robot C": 8 },
  { day: "Wednesday", "Robot A": 3, "Robot B": 7.2, "Robot C": 0 },
  { day: "Thursday", "Robot A": 2, "Robot B": 1, "Robot C": 4 },
  { day: "Friday", "Robot A": 9, "Robot B": 7.2, "Robot C": 8 },
  { day: "Saturday", "Robot A": 9, "Robot B": 0, "Robot C": 8 },
];

export default function RobotHoursLineChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={robotHoursData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <XAxis dataKey="day" />
        <YAxis
          label={{
            value: "Hours Operated",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Robot A"
          stroke={colorPalette().AFUPurple} // AFUPurple
          strokeWidth={1.5} // Thicker line
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="Robot B"
          stroke={colorPalette().AFUBlue} // AFUBlue
          strokeWidth={1.5} // Thicker line
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="Robot C"
          stroke={colorPalette().AFUSuccess} // AFUSuccess (Green)
          strokeWidth={1.5} // Thicker line
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
