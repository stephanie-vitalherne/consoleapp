import React from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';

import { COLORS, images, SIZES } from '../../constants';

const AddDataScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={images.addData}
        resizeMode="cover"
        style={{ height: SIZES.height, width: SIZES.width }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  image: {
    height: SIZES.height,
    width: SIZES.width,
    position: 'relative',
  },
  fakeBox: {
    zIndex: 100,
    backgroundColor: 'red',
    width: 150,
    height: 150,
    position: 'absolute',
    top: 170,
    left: 20,
    right: 0,
  },
});

export default AddDataScreen;
