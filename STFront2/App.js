 import { StatusBar } from 'expo-status-bar';
 import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes';

// const App = () => {
//   <View style={{flex: 1}}>
//     <Routes/>
//   </View>
// }

// export default App;






export default function App() {
  return (
    <View style={styles.container}>
      <Text>Comment tu vas?</Text>
      <Routes/>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 70,
    justifyContent: 'center',
  },
});
