import { StyleSheet, Text, View, StatusBar } from 'react-native';

export const Error = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Open settings</Text>
      <Text>Allow location access</Text>
      <Text>Restart app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
