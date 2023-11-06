// ProductDetail.tsx
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import RenderCarousel from '../components/RenderCarousel';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const ProductDetail = ({route}) => {
  const {product} = route.params || {product: null};
  const [ActiveSlide, setActiveSlide] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={styles.productDetailC}>
      <View style={styles.carouselC}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Carousel
          data={product.images}
          renderItem={({item}) => <RenderCarousel image={{item}} />}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          onSnapToItem={index => setActiveSlide(index)}
        />
        <View style={styles.paginationContainer}>
          <Pagination
            dotsLength={product.images.length}
            activeDotIndex={ActiveSlide}
            dotStyle={styles.activeDotStyle}
            inactiveDotStyle={styles.inactiveDotStyle}
            inactiveDotOpacity={1}
            inactiveDotScale={1}
          />
        </View>
      </View>
      <View style={styles.bodyC}>
        <View style={styles.textC}>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.detailtxtc}>
            <Text style={styles.text}>
              {product.brand} - {product.category}
            </Text>
            <Text>{product.rating}</Text>
          </View>
          <Text style={styles.contentTxt}>{product.description}</Text>
          <View style={styles.bottomC}>
            <Text style={styles.price}>$ {product.price}</Text>
            <TouchableOpacity style={styles.addcardc}>
              <Text style={styles.addcardtxt}>Add to Card</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  productDetailC: {
    flex: 1,
  },
  activeDotStyle: {
    width: 20,
    height: 20,
    borderRadius: moderateScale(10),
    backgroundColor: '#000000',
  },
  inactiveDotStyle: {
    width: 20,
    height: 20,
    borderRadius: moderateScale(10),
    backgroundColor: '#ffffffff',
  },
  carouselC: {
    position: 'relative',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 5,
    width: '100%',
    alignItems: 'center',
  },
  dotContainerStyle: {},
  textC: {
    gap: 10,
    position: 'absolute',
    paddingHorizontal: scale(20),
    marginTop: verticalScale(20),
  },
  detailtxtc: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(20),
  },
  bodyC: {
    backgroundColor: '#ffffff',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'relative',
    borderTopRightRadius: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
  },
  title: {
    fontSize: moderateScale(20),
    color: '#000000',
  },
  text: {
    fontSize: moderateScale(15),
    color: '#000000',
  },
  contentTxt: {
    fontSize: moderateScale(15),
    color: '#000000',
    marginTop: verticalScale(20),
  },
  bottomC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(200),
  },
  price: {
    fontSize: moderateScale(20),
    color: '#000000',
  },
  addcardc: {
    backgroundColor: '#000000',
    paddingHorizontal: scale(30),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(10),
  },
  addcardtxt: {
    color: '#ffffff',
    fontSize: moderateScale(15),
  },
  backButton: {
    top: 25,
    left: 20,
    zIndex: 1,
    position: 'absolute',
  },
  backButtonText: {
    color: '#000000',
    fontSize: moderateScale(15),
  },
});
