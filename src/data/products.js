export const products = [
  {
    id: "basic",
    name: "AquaGrow Basic",
    price: 1800,
    description: "The AquaGrow Basic model is the perfect entry point for students and home gardeners. Powered by an Arduino Uno, it features a robust timer-based irrigation system that delivers water at precise intervals.",
    longDescription: "Designed for simplicity and reliability, the Basic model eliminates the guesswork of plant care. It includes a mini submersible pump, a water reservoir, and all necessary tubing. The system allows you to choose between 6, 12, 24, or 48-hour watering cycles, making it ideal for hostel dwellers and busy professionals.",
    emoji: "🌱",
    rating: 4,
    reviews: 124,
    features: [
      "Arduino Uno Microcontroller",
      "Timer-based logic (6/12/24/48h)",
      "Mini Submersible Pump",
      "500ml Water Reservoir",
      "6-month Warranty",
      "WhatsApp Support"
    ],
    specs: {
      power: "5V USB / DC Adapter",
      material: "Eco-friendly ABS Plastic",
      pumpFlow: "1.2L / min",
      dimensions: "15cm x 15cm x 20cm"
    }
  },
  {
    id: "pro",
    name: "AquaGrow Pro",
    price: 3500,
    description: "The Pro model is our most popular choice, featuring a hybrid irrigation system that combines precision timing with real-time soil moisture monitoring.",
    longDescription: "Take your plant care to the next level with the AquaGrow Pro. In addition to the features of the Basic model, the Pro includes an RTC (Real-Time Clock) module for accurate scheduling regardless of power interruptions, and a high-precision soil moisture sensor. The system can operate in hybrid mode, watering your plants only when the soil is actually dry, while still following a scheduled safety cycle.",
    emoji: "🌿",
    rating: 5,
    reviews: 89,
    isFeatured: true,
    features: [
      "Everything in Basic",
      "Real-Time Clock (RTC) Module",
      "Soil Moisture Sensor",
      "Hybrid Mode (Time + Sensor)",
      "1-year Full Warranty",
      "Priority Support"
    ],
    specs: {
      power: "5V USB / DC Adapter",
      material: "Premium Matte Finish",
      pumpFlow: "1.5L / min",
      dimensions: "18cm x 18cm x 22cm"
    }
  },
  {
    id: "smart",
    name: "AquaGrow Smart",
    price: 6500,
    description: "The future of gardening. Fully connected with WiFi and mobile app integration for remote monitoring and control.",
    longDescription: "AquaGrow Smart is designed for tech enthusiasts who want total control. With built-in WiFi connectivity, you can monitor your plant's health, adjust watering schedules, and receive alerts directly on your smartphone. Whether you're in the next room or across the globe, your plants are always just a tap away.",
    emoji: "🚀",
    rating: 5,
    reviews: 42,
    features: [
      "Everything in Pro",
      "WiFi Connectivity Module",
      "Mobile App Integration",
      "Remote Monitoring & Control",
      "Cloud Health Analytics",
      "Premium 1-year Warranty"
    ],
    specs: {
      power: "5V Type-C Power Input",
      material: "Aerospace Grade Components",
      pumpFlow: "2.0L / min",
      dimensions: "20cm x 20cm x 25cm"
    }
  }
];
