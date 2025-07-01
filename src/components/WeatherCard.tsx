import type { WeatherResponse } from "../types/weather";

export default function WeatherCard({ weather }: { weather: WeatherResponse }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 w-full max-w-md mx-auto">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-3xl font-bold text-gray-800">{weather.name}</h2>
        <p className="text-4xl font-light text-gray-700">{Math.round(weather.main.temp)}°C</p>
      </div>

      <div className="flex items-center mb-6">
        {weather.weather.map((w, index) => (
          <div key={index} className="flex items-center mr-4">
            <img
              src={`https://openweathermap.org/img/wn/${w.icon}@2x.png`}
              alt={w.description}
              className="w-16 h-16"
            />
            <span className="capitalize text-lg text-gray-600 ml-2">
              {w.description}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 text-gray-700">
        <div className="bg-white/50 rounded-lg p-3 shadow">
          <p className="text-sm font-medium text-gray-500">Humidity</p>
          <p className="text-xl font-semibold">{weather.main.humidity}%</p>
        </div>
        <div className="bg-white/50 rounded-lg p-3 shadow">
          <p className="text-sm font-medium text-gray-500">Wind</p>
          <p className="text-xl font-semibold">{weather.wind.speed} km/h</p>
        </div>
        <div className="bg-white/50 rounded-lg p-3 shadow">
          <p className="text-sm font-medium text-gray-500">Feels Like</p>
          <p className="text-xl font-semibold">{Math.round(weather.main.feels_like)}°C</p>
        </div>
        <div className="bg-white/50 rounded-lg p-3 shadow">
          <p className="text-sm font-medium text-gray-500">Pressure</p>
          <p className="text-xl font-semibold">{weather.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
}
