import {Dimensions, Image, StyleSheet, View} from 'react-native';
import React from 'react';

interface Props {
  image: {item: string};
}

const RenderCarousel = ({image}: Props) => {
  return (
    <View>
      <Image source={{uri: image.item}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
  },
});

export default RenderCarousel;
