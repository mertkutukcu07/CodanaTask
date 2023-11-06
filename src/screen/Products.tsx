import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllProducts} from '../redux/productsSlice';
import {useFocusEffect} from '@react-navigation/native';
import SearchInput from '../components/SearchInput';
import {scale, verticalScale} from 'react-native-size-matters';
import Loading from '../components/Loading';
import {AppDispatch} from '../redux/store';
import {RootState} from '../redux/productsSlice';
import RenderProducts from '../components/RenderProducts';
import RenderCategory from '../components/RenderCategory';

const Products: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.data);
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const [searchValue, setSearchValue] = useState<string>('');
  const uniqueCategories = Array.from(
    new Set(
      products?.products?.map((product: {category: any}) => product.category),
    ),
  );
  const filteredProducts = products?.products?.filter(
    product =>
      (selectedCategory ? product.category === selectedCategory : true) &&
      (searchValue
        ? product.title.toLowerCase().includes(searchValue.toLowerCase())
        : true),
  );

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchAllProducts());
    }, [dispatch]),
  );

  if (loading) {
    return <Loading loading={true} />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.flatlistContainer}
        horizontal={false}>
        <View style={styles.bodyC}>
          <SearchInput
            placeholder="Search Product..."
            value={searchValue}
            onChangeText={(text: string) => setSearchValue(text)}
          />

          <FlatList
            data={uniqueCategories}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <RenderCategory
                data={item}
                onSelect={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

          <View style={styles.flatlistContainer}>
            <FlatList
              data={filteredProducts}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => <RenderProducts data={item} />}
              numColumns={2}
              horizontal={false}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
  },
  bodyC: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(20),
    gap: verticalScale(20),
  },
  flatlistContainer: {
    width: Dimensions.get('window').width,
    marginBottom: verticalScale(10),
  },
  catText: {
    color: 'red',
  },
});
