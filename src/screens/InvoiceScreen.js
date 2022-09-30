import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';

import { COLORS, images, SIZES } from '../../constants';

const InvoiceScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={images.invoice} resizeMode="cover" style={styles.image} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  image: {
    width: SIZES.width,
    height: SIZES.height,
  },
});

export default InvoiceScreen;
