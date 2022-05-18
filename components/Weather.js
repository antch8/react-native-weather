import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export const Weather = ({ info }) => {
  const options = weatherOptions[info.weather[0].main];
  const temp = Math.round(info.main.temp);
  const region = info.name;

  return (
    <LinearGradient
      colors={options.gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.info}>
        <Text style={styles.region}>
          {region}
        </Text>
        <Text style={getTempClass(temp)}>
          {temp}º
        </Text>
        <MaterialCommunityIcons
          name={options.iconName}
          size={40}
          color="white"
        />
      </View>
      <View style={styles.more}>
        <Text style={styles.weatherType}>
          {options.name}
        </Text>
        <Text style={styles.description}>
          {options.description}
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  more: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  region: {
    marginTop: 120,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  temp: {
    marginBottom: 25,
    color: 'white',
    fontSize: 100
  },
  ml: {
    marginLeft: 25
  },
  weatherType: {
    marginBottom: 10,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  description: {
    maxWidth: 200,
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  }
});

const getTempClass = temp => (temp < 10
  ? styles.temp
  : {...styles.temp, ...styles.ml}
);

const weatherOptions = {
  Thunderstorm: {
    name: 'Thunderstorm',
    iconName: 'weather-lightning',
    gradient: ['#141e30', '#243b55'],
    description: 'We\'ll have to stay at home(('
  },

  Drizzle: {
    name: 'Drizzle',
    iconName: 'weather-rainy',
    gradient: ['#182848', '#4b6cb7'],
    description: 'A little drizzle, not the best weather('
  },

  Rain: {
    name: 'Rain',
    iconName: 'weather-pouring',
    gradient: ['#3f4c6b', '#606c88'],
    description: 'If you\'re going out, don\'t forget your umbrella))'
  },

  Snow: {
    name: 'Snow',
    iconName: 'snowflake',
    gradient: ['#6190e8', '#a7bfe8'],
    description: 'It\'s snowing a lot, time to make snowmen?)'
  },

  Atmosphere: {
    name: 'Wind',
    iconName: 'weather-windy',
    gradient: ['#2c3e50', '#2980b9'],
    description: 'It\'s very windy, don\'t let it blow you away)'
  },

  Clear: {
    name: 'Clear',
    iconName: 'weather-sunny',
    gradient: ['#2f80ed', '#56ccf2'],
    description: 'It\'s nice weather, time to go outside)'
  },

  Clouds: {
    name: 'Clouds',
    iconName: 'weather-cloudy',
    gradient: ['#457fca', '#5691c8'],
    description: 'I love this mild weather)'
  }
};
