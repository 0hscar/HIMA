import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './screens/AppNavigation'
// import { Text, View } from 'react-native';
// import { divStyles } from './styles';

// Location example imports

export default function App() {
  return (
    <NavigationContainer>
        <AppNavigation/>

        <StatusBar style="dark" />
    </NavigationContainer>

  );
}


// EXAMPLE FOR TEXT
// App.tsx
// import { NavigationContainer } from "@react-navigation/native"
// import AppNavigation from "./screens/AppNavigation"


// export default function App() {
//   return (
//     <NavigationContainer>
//       <AppNavigation/>
//     </NavigationContainer>
//   )
// }

// Hot reload examle

// export default function App() {
//   return (
//     <View style={{
//       marginTop: "100%",
//     }}>
//       <Text style={{
//         justifyContent: "center",
//         textAlign: "center",
//         fontSize: 50,
//       }}>Expo med Hot Reloading före ändringen</Text>
//     </View>
//   )
// }

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
{/* <Text>Location: {location ? JSON.stringify(location) : 'Loading...'}</Text> */ }
{/* </View> */ }
// );
// };
// 
// export default App;


