import React from 'react';
import { StyleSheet, ScrollView, TouchableHighlight, View, Image } from 'react-native';

export default function Thumbnails({ images, setIndex }) {
  const imageList = images.image;

  function handleClick(index) {
    //console.log(index);
    setIndex(index);
  }

  return(
    <ScrollView horizontal style={styleThumb.container}>
      {imageList.map((element, index) => 
        <TouchableHighlight key={index} underlayColor="transparent" onPress={() => handleClick(index)}>
          <View style={styleThumb.wrapper}>
            <Image  
              source={{uri: element.url}} 
              style={styleThumb.imgStyle} />
          </View>
        </TouchableHighlight>
      )}
    </ScrollView>
  )
}

const styleThumb = StyleSheet.create({
  container: {
    position:'absolute',
    paddingVertical: 20,
    bottom:0,
    backgroundColor:'rgba(255,255,255,.12)'
  },

  wrapper: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
  },

  imgStyle: {
    width: 100,
    height: 100,
    borderRadius: 10,
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'red',
    shadowOpacity: 1.0,
  }
});