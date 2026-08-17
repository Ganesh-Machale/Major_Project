const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Goa",
    country: "India",
  },

  {
    title: "Modern Apartment in Mumbai",
    description:
      "Stay in this stylish modern apartment located in the heart of Mumbai. Perfect for city explorers and business travelers.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Mumbai",
    country: "India",
  },

  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin surrounded by beautiful nature and breathtaking views.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Manali",
    country: "India",
  },

  {
    title: "Historic Villa in Jaipur",
    description:
      "Experience traditional Indian architecture in this beautifully maintained heritage villa near the famous attractions of Jaipur.",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Jaipur",
    country: "India",
  },

  {
    title: "Luxury Villa in Lonavala",
    description:
      "Relax in this spacious luxury villa surrounded by greenery. Perfect for families and weekend trips.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Lonavala",
    country: "India",
  },

  {
    title: "Lake View Resort",
    description:
      "Enjoy a peaceful vacation in this beautiful resort with amazing lake views and comfortable rooms.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Udaipur",
    country: "India",
  },

  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beautiful property offers the perfect relaxing vacation.",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Cancun",
    country: "Mexico",
  },

  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and enjoying nature from this cozy cabin located beside a peaceful lake.",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Lake Tahoe",
    country: "United States",
  },

  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Los Angeles",
    country: "United States",
  },

  {
    title: "Ski-In Ski-Out Chalet",
    description:
      "Enjoy direct access to the slopes from this beautiful chalet surrounded by the Swiss Alps.",
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Verbier",
    country: "Switzerland",
  },

  {
    title: "Safari Lodge",
    description:
      "Experience the beauty of wildlife and nature while staying in this comfortable safari lodge.",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
    price: 4200,
    location: "Serengeti",
    country: "Tanzania",
  },

  {
    title: "Historic Canal House",
    description:
      "Stay in this beautiful historic canal house located in one of the most charming areas of Amsterdam.",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    price: 2300,
    location: "Amsterdam",
    country: "Netherlands",
  },

  {
    title: "Private Island Retreat",
    description:
      "Enjoy an exclusive island vacation surrounded by clear water, beautiful beaches, and peaceful nature.",
    image:
      "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60",
    price: 7000,
    location: "Fiji",
    country: "Fiji",
  },

  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the beautiful beaches of Bali while staying in this comfortable beachfront bungalow.",
    image:
      "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Bali",
    country: "Indonesia",
  },

  {
    title: "Mountain View Cabin",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin surrounded by the Canadian Rockies.",
    image:
      "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60",
    price: 1900,
    location: "Banff",
    country: "Canada",
  },

  {
    title: "Art Deco Apartment",
    description:
      "Stay in this stylish apartment and experience the classic architecture and lively atmosphere of Miami.",
    image:
      "https://images.unsplash.com/photo-1506965516968-4a5d6c3d1f8c?auto=format&fit=crop&w=800&q=60",
    price: 2600,
    location: "Miami",
    country: "United States",
  },

  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this beautiful villa with comfortable rooms and peaceful surroundings.",
    image:
      "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60",
    price: 3200,
    location: "Phuket",
    country: "Thailand",
  },

  {
    title: "Historic Castle in Scotland",
    description:
      "Experience the beauty of the Scottish Highlands while staying in this unique historic property.",
    image:
      "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60",
    price: 4500,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },

  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the desert while enjoying a private pool and beautiful desert surroundings.",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },

  {
    title: "Hilltop Cottage in Ooty",
    description:
      "Enjoy cool weather, beautiful hills, and peaceful surroundings from this charming cottage.",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60",
    price: 1700,
    location: "Ooty",
    country: "India",
  },
];

module.exports = { data: sampleListings };