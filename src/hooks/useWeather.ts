import { useState, useEffect } from "react"
import axios from "axios"
import type { WeatherResponse } from "../types/weather"

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?lang=es&units=metric&appid=${API_KEY}&q=`

export default function useWeather(city: string){

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [weather, setWeather] = useState<WeatherResponse | null>(null)

  useEffect(() => {
    const getWeatherFromCity = async () => {
      if (!city) return;

      setIsLoading(true);
      setError("");

      try {
        const response = await axios.get<WeatherResponse>(`${API_URL}${city}`);
        setWeather(response.data);
      } catch (err: any) {
        if (err.response?.data?.message) {
          setError(err.response.data.message);
        } else {
          setError("Error desconocido al consultar el clima");
        }
        setWeather(null);
      } finally {
        setIsLoading(false);
      }
    };

    getWeatherFromCity();
  }, [city]);

  return {isLoading, error, weather}

}