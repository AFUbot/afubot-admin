import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const restaurantData = [
  { name: "Kafe Selasih, Arked Cengal", deliveries: 12 },
  { name: "Deen Corner, Arked Cengal", deliveries: 8 },
  { name: "Belanga Cafe, Arked Cengal", deliveries: 6 },
  { name: "The Kave, Arked Cengal", deliveries: 5 },
  { name: "PUDJ, Arked N24 dan Arked KDSE", deliveries: 9 },
  {
    name: "Cafe (SKM), Sekolah Kejuruteraan Mekanikal (tepi sungai)",
    deliveries: 7,
  },
  { name: "Cafe P19, SKE", deliveries: 11 },
  { name: "Cafe P03 SKE", deliveries: 6 },
  { name: "Aina Cafe and Catering, T02", deliveries: 4 },
  { name: "Embun Cafe, KTF", deliveries: 3 },
  { name: "VCafe, Arked Meranti", deliveries: 7 },
  { name: "Richiamo Cafe, Arked Meranti", deliveries: 8 },
];

const SHADES_OF_BLUE = [
  "#00B0F0", // Original color
  "#48A4D1", // Lighter shade
  "#367FA6", // Slightly darker shade
  "#266180", // Even darker shade
  "#15515A", // Darkest shade
  // Add more shades if needed
];

export default function DonutChartWithCustomizedLabel() {
  return (
    <ResponsiveContainer width="100%" height={600}>
      <PieChart>
        <Pie
          dataKey="deliveries"
          data={restaurantData}
          innerRadius={60}
          outerRadius={180}
          label={({ percent }) => `${percent.toFixed(2)}%`}
        >
          {restaurantData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={SHADES_OF_BLUE[index % SHADES_OF_BLUE.length]}
            />
          ))}
        </Pie>
        <Tooltip
          formatter={(value, name, props) => [value, `Deliveries: ${name}`]}
        />
        <Legend align="left" />
      </PieChart>
    </ResponsiveContainer>
  );
}
