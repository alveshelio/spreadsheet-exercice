import axios from "axios"

export const fetchWeatherByCity = (city: string): Promise<any> =>
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dfe494283969970c9d35efa5be8dcb48`
    )
    .then(response => response.data)
