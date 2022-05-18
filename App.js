import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { Loading } from './components/Loading';
import { Error } from './components/Error';
import { Weather } from './components/Weather';
import { Alert, View, Text } from 'react-native';
import axios from 'axios';

const API_KEY = '2cbe6abc2af0580f4a1b9023112858b1';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_OPTIONS = '&units=metric';

export default function App () {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [info, setInfo] = useState({
    name: 'Kyiv', main: { temp: 18 }, weather: [{ main: 'Clear' }]
  });

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(`${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}${API_OPTIONS}`);
    setInfo(data);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(':(', 'we can\'t get your location');
        setError(true);
      } else {
        const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync({});
        // or `Location.getCurrentPositionAsync({})` for high accuracy (slowed response)

        getWeather(latitude, longitude);

        setIsLoading(false);
      }
    })();
  }, []);

  return (
    error ? <Error /> : isLoading ? <Loading /> : <Weather info={info}/>
  );
};
