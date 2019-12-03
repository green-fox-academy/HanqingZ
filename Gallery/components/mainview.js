import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';


export default function MainView({ images, index }) {

  const imageList = images.image[index];

  return (
    <View style={styles.container}>
      {/* <Text>{JSON.stringify(imageList)}</Text> */}
      <Image style={styles.imgStyle} source={{uri: imageList.url}} />
      {/* <Text>{ imageList.name }</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  imgStyle: {
    padding: 0,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    margin: 0
  }
});