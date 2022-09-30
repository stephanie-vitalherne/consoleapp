import React from 'react';
import { Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, images, SIZES } from '../../constants';

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Pressable
        style={styles.fakeArrowBox}
        onPress={() => navigation.goBack()}
      />
      <Image
        source={images.folderDetails}
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
  fakeArrowBox: {
    zIndex: 100,
    width: 40,
    height: 40,
    position: 'absolute',
    top: 50,
    left: 20,
    right: 0,
  },
});

export default DashboardScreen;
