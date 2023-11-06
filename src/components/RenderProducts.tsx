import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
interface Props {
  data: any;
}

const RenderProducts = ({data}: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetail', {
          product: data,
        })
      }
      style={styles.productContainer}>
      <Image source={{uri: data.thumbnail}} style={styles.img} />
      <View style={styles.productDetail}>
        <Text style={styles.productTitle}>{data.title}</Text>
        <Text style={styles.productPrice}> ${data.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginVertical: verticalScale(10),
    paddingHorizontal: scale(20),
    marginHorizontal: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width - scale(27),
    flex: 1,
    borderRadius: moderateScale(10),
    position: 'relative',
  },
  img: {
    width: scale(150),
    height: verticalScale(200),
    resizeMode: 'cover',
    borderRadius: moderateScale(10),
  },
  productDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    bottom: 0,
    paddingVertical: verticalScale(20),
    width: scale(150),
    paddingHorizontal: scale(9),
  },
  productTitle: {
    color: '#fff',
    fontSize: moderateScale(12),
    maxWidth: scale(100),
  },
  productPrice: {
    color: '#fff',
    fontSize: moderateScale(12),
  },
});

export default RenderProducts;
