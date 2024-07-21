import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,

      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 3 days with each day plan with best\ntime to visit in JSON format.\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotel_options\": [\n    {\n      \"name\": \"The D Las Vegas\",\n      \"address\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50-$100 per night\",\n      \"image_url\": \"https://www.theD.com/images/gallery/hero-carousel/the-d-hero-image.jpg\",\n      \"geo_coordinates\": [36.1698, -115.1422],\n      \"rating\": 4.0,\n      \"description\": \"A budget-friendly hotel located in the heart of Fremont Street, offering a casino, restaurants, and live entertainment.\"\n    },\n    {\n      \"name\": \"Golden Nugget Las Vegas\",\n      \"address\": \"129 E Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$70-$150 per night\",\n      \"image_url\": \"https://www.goldennugget.com/las-vegas/images/header-bg-golden-nugget-las-vegas.jpg\",\n      \"geo_coordinates\": [36.1693, -115.1417],\n      \"rating\": 4.5,\n      \"description\": \"A historic hotel with a casino, multiple restaurants, a pool, and a shark tank.\"\n    },\n    {\n      \"name\": \"Plaza Hotel & Casino\",\n      \"address\": \"1 Main Street, Las Vegas, NV 89101\",\n      \"price\": \"$60-$120 per night\",\n      \"image_url\": \"https://www.plazahotelcasino.com/images/hero/plaza-casino-resort-hero-2.jpg\",\n      \"geo_coordinates\": [36.1694, -115.1424],\n      \"rating\": 3.5,\n      \"description\": \"A centrally located hotel with a casino, restaurants, and access to Fremont Street.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"morning\": {\n        \"placeName\": \"Fremont Street Experience\",\n        \"placeDetails\": \"A pedestrian mall with a canopy of lights and free live entertainment. You can also check out the Slotzilla zipline.\",\n        \"placeImageUrl\": \"https://www.fremontstreetexperience.com/sites/default/files/styles/hero_image/public/2020-04/Fremont-Street-Experience-Hero.jpg?itok=gC0o44D9\",\n        \"geoCoordinates\": [36.1699, -115.1421],\n        \"ticketPricing\": \"Free\",\n        \"timeToTravel\": \"2-3 hours\"\n      },\n      \"afternoon\": {\n        \"placeName\": \"Neon Museum\",\n        \"placeDetails\": \"A museum dedicated to the history of Las Vegas' iconic neon signs.\",\n        \"placeImageUrl\": \"https://www.neonmuseum.org/wp-content/uploads/2022/05/Neon-Museum-Exterior-at-Night.jpg\",\n        \"geoCoordinates\": [36.1721, -115.1458],\n        \"ticketPricing\": \"$20-$30\",\n        \"timeToTravel\": \"1-2 hours\"\n      },\n      \"evening\": {\n        \"placeName\": \"The D Las Vegas\",\n        \"placeDetails\": \"Enjoy dinner at one of the many restaurants and enjoy free live music at the casino.\",\n        \"placeImageUrl\": \"https://www.theD.com/images/gallery/hero-carousel/the-d-hero-image.jpg\",\n        \"geoCoordinates\": [36.1698, -115.1422],\n        \"ticketPricing\": \"Free\",\n        \"timeToTravel\": \"2-3 hours\"\n      }\n    },\n    \"day2\": {\n      \"morning\": {\n        \"placeName\": \"Hoover Dam\",\n        \"placeDetails\": \"A short drive from Las Vegas, you can take a tour of the iconic Hoover Dam and see the engineering marvel.\",\n        \"placeImageUrl\": \"https://www.nps.gov/hdam/learn/nature/images/Hoover-Dam-with-Rainbow-004-web.jpg\",\n        \"geoCoordinates\": [36.0216, -114.9603],\n        \"ticketPricing\": \"Free (for walking tours), $30-$50 (for guided tours)\",\n        \"timeToTravel\": \"4-5 hours (including travel time)\"\n      },\n      \"afternoon\": {\n        \"placeName\": \"Red Rock Canyon National Conservation Area\",\n        \"placeDetails\": \"A scenic drive and hiking destination with red rock formations.\",\n        \"placeImageUrl\": \"https://www.nps.gov/redr/learn/nature/images/RedRockCanyon-7.jpg\",\n        \"geoCoordinates\": [36.2377, -115.2571],\n        \"ticketPricing\": \"$15 per vehicle\",\n        \"timeToTravel\": \"3-4 hours\"\n      },\n      \"evening\": {\n        \"placeName\": \"Fremont Street Experience\",\n        \"placeDetails\": \"Experience the vibrant atmosphere of Fremont Street at night, with the canopy of lights and free live entertainment.\",\n        \"placeImageUrl\": \"https://www.fremontstreetexperience.com/sites/default/files/styles/hero_image/public/2020-04/Fremont-Street-Experience-Hero.jpg?itok=gC0o44D9\",\n        \"geoCoordinates\": [36.1699, -115.1421],\n        \"ticketPricing\": \"Free\",\n        \"timeToTravel\": \"2-3 hours\"\n      }\n    },\n    \"day3\": {\n      \"morning\": {\n        \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n        \"placeDetails\": \"A stunning floral display with themed gardens that change seasonally.\",\n        \"placeImageUrl\": \"https://www.bellagio.com/content/dam/mgmresorts/bellagio/images/conservatory/conservatory-hero-image.jpg\",\n        \"geoCoordinates\": [36.1101, -115.1733],\n        \"ticketPricing\": \"Free\",\n        \"timeToTravel\": \"1-2 hours\"\n      },\n      \"afternoon\": {\n        \"placeName\": \"The LINQ Promenade\",\n        \"placeDetails\": \"An outdoor shopping and dining promenade with a giant observation wheel, High Roller.\",\n        \"placeImageUrl\": \"https://www.caesars.com/linq/media/images/hero/the-linq-promenade-hero-1.jpg\",\n        \"geoCoordinates\": [36.1081, -115.1744],\n        \"ticketPricing\": \"Free (for the promenade), $30-$50 (for High Roller)\",\n        \"timeToTravel\": \"2-3 hours\"\n      },\n      \"evening\": {\n        \"placeName\": \"The Venetian and The Palazzo\",\n        \"placeDetails\": \"Explore the canals and enjoy the grand ambiance of this luxurious hotel, with a variety of restaurants and shops.\",\n        \"placeImageUrl\": \"https://www.venetian.com/content/dam/mgmresorts/venetian/images/hero/hero-venetian.jpg\",\n        \"geoCoordinates\": [36.1002, -115.1716],\n        \"ticketPricing\": \"Free\",\n        \"timeToTravel\": \"2-3 hours\"\n      }\n    }\n  }\n}\n```\n\n**Important Notes:**\n\n* **Prices:** Hotel and activity prices are approximate and can vary depending on the time of year and availability.\n* **Transportation:** Consider using public transportation or ride-sharing services like Uber or Lyft to save money on transportation.\n* **Food:** Pack snacks and drinks to avoid spending too much on food.\n* **Free Activities:** Many attractions in Las Vegas offer free events and activities, such as live music, art installations, and fountain shows.\n* **Time Management:** The itinerary is a suggestion, and you can customize it to fit your interests and time constraints.\n\nThis is just a basic outline, and you can customize it to fit your specific needs and interests. Enjoy your trip! \n"},
          ],
        },
      ],
    });
  
    
