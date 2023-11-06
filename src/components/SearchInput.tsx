import {Dimensions, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const SearchInput = ({...props}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(20),
    borderRadius: moderateScale(13),
    width: Dimensions.get('window').width - scale(17),
  },
  input: {
    fontSize: 16,
  },
});
