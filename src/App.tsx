import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppNavigation from './screens/AppNavigation'

// Location example imports
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default function App() {
  return (
    <NavigationContainer>
        <AppNavigation>

        </AppNavigation>
        <StatusBar style="dark" />
    </NavigationContainer>

  );
}

// Usage of Location Example
// const App: React.FC = () => {
  // const [location, setLocation] = useState<Location.LocationObject | null>(null);
// 
  // useEffect(() => {
    // (async () => {
      // let { status } = await Location.requestForegroundPermissionsAsync();
      // if (status !== 'granted') {
        // console.log('Permission Denied');
        // return;
      // }
// 
      // let currentLocation = await Location.getCurrentPositionAsync({});
      // setLocation(currentLocation);
    // })();
  // }, []);
// 
  // return (
    // <View>
      {/* <Text>Location: {location ? JSON.stringify(location) : 'Loading...'}</Text> */}
    {/* </View> */}
  // );
// };
// 
// export default App;







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

