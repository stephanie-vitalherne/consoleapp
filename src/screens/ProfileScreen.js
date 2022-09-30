import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';

import { images, SIZES, COLORS } from '../../constants';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={images.profile} resizeMode="cover" style={styles.image} />
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

export default ProfileScreen;
