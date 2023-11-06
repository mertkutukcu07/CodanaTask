import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

interface Props {
  data: string;
  onSelect: (category: string) => void;
  selectedCategory: string | null;
}

const RenderCategory: React.FC<Props> = ({
  data,
  onSelect,
  selectedCategory,
}) => {
  const isSelected = data === selectedCategory;
  console.log('KATEGORİ', selectedCategory + 'Data', data);
  return (
    <TouchableOpacity
      style={[styles.catContainer]}
      onPress={() => onSelect(data)}>
      <Text style={[styles.catTxt, isSelected && styles.selectedCategory]}>
        {data}
      </Text>
    </TouchableOpacity>
  );
};

export default RenderCategory;

const styles = StyleSheet.create({
  catContainer: {
    marginHorizontal: scale(10),
    backgroundColor: 'rgba(8, 25, 245, 0.2)',
  },
  selectedCategory: {
    backgroundColor: 'rgba(8, 25, 245, 0.5)',
    color: 'white',
  },
  catTxt: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
    color: 'black',
  },
});
