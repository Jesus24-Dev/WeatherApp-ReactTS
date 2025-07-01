import { useState } from "react";
import useWeather from "./hooks/useWeather";
import WeatherCard from "./components/WeatherCard";
import SearchForm from "./components/SearchForm";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [input, setInput] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const { weather, isLoading, error } = useWeather(city);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!input.trim()) return;
    setCity(input.trim());
    setInput("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Weather App</h1>
          <p className="text-lg text-gray-600">Check the weather in your city</p>
        </header>

        {/* Search Form */}
        <SearchForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={input}
        />

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Error Message */}
        {error && <ErrorMessage error={error} />}

        {/* Weather Card */}
        {weather && <WeatherCard weather={weather} />}

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 mt-12">
          <p>Powered by OpenWeatherMap API</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
