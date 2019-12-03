import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import MainView from './components/mainview';
import images from './components/images';
import Thumbnails from './components/bottomview';

export default function App() {

  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <MainView images={ images } index={ index } />
      <Thumbnails images={ images } setIndex={ setIndex } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
