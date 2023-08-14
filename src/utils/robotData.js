const getRobotData = () => {
  const robots = [
    {
      id: "1",
      robotName: "Robot A",
      status: "Online",
      lastUpdate: "2023-08-10 10:30AM",
      battery: 50,
      gpsTracking: 1,
      deliveryStatus: "On Route",
      areaCoverage: "A",
      temperature: Math.floor(Math.random() * (65 - 45 + 1)) + 45, // Temperature between 45-65
      totalDistanceTravelled: "300 km",
      totalCompletedDeliveries: 15,
    },
    {
      id: "2",
      robotName: "Robot B",
      status: "Offline",
      lastUpdate: "N/A",
      battery: 100,
      gpsTracking: 0,
      deliveryStatus: "Idle",
      areaCoverage: "B",
      temperature: Math.floor(Math.random() * (65 - 45 + 1)) + 45, // Temperature between 45-65
      totalDistanceTravelled: "150 km",
      totalCompletedDeliveries: 8,
    },
    {
      id: "3",
      robotName: "Robot C",
      status: "Online",
      lastUpdate: "2023-08-10 10:25AM",
      battery: 20,
      gpsTracking: 1,
      deliveryStatus: "Delivered",
      areaCoverage: "C",
      temperature: Math.floor(Math.random() * (65 - 45 + 1)) + 45, // Temperature between 45-65
      totalDistanceTravelled: "500 km",
      totalCompletedDeliveries: 20,
    },
  ];

  return robots;
};

export default getRobotData;
