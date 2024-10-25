import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './screens/AppNavigation'

// Location example imports

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


