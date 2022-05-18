import { StyleSheet, Text, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export const Loading = () => {
  return (
    <LinearGradient
      colors={['#c9d6ff', '#e2e2e2']}
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" />
      <MaterialCommunityIcons
        name="weather-cloudy-clock"
        size={60}
        color="black"
      />
      <Text style={styles.text}>Loading weather info...</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    marginVertical: 20,
    fontSize: 20,
  }
});
