# 🌤️ Weather App

A simple weather application built with React and TypeScript that consumes the OpenWeatherMap API to display real-time weather data for a given city.

---

## 🚀 Tech Stack

- **React**
- **TypeScript**
- **Tailwind CSS**
- **Axios**

---

## 📦 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Jesus24-Dev/WeatherApp-ReactTS.git
   cd weather-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Get an OpenWeatherMap API Key:**

   - Create an account at [openweathermap.org](https://openweathermap.org/api)
   - Go to your dashboard and copy your **API key**

4. **Configure environment variables:**

   - Create a `.env` file in the root of the project
   - Copy the contents of `.env.example` and paste your key

   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

---

## 📌 Features

- Search for any city in the world
- Display current temperature, humidity, weather description, and icon
- Fully typed API responses with TypeScript
- Error handling and loading states

---

## 🔧 To-Do / Future Improvements

- Add 5-day forecast support
- Include geolocation-based search
- Improve responsive design and mobile UX

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
