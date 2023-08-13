import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const temperatureData = [
  { day: "Sunday", temperature: 42 },
  { day: "Monday", temperature: 45 },
  { day: "Tuesday", temperature: 50 },
  { day: "Wednesday", temperature: 55 },
  { day: "Thursday", temperature: 57 },
  { day: "Friday", temperature: 52 },
  { day: "Saturday", temperature: 48 },
];

export default function LineCh() {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <LineChart
        data={temperatureData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="day" />
        <YAxis domain={[40, 60]}>
          <Label
            value="°C"
            angle={-90}
            position="insideLeft"
            style={{ textAnchor: "middle" }}
          />
        </YAxis>

        {/* Set the Y-axis domain */}
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#00B0F0"
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
