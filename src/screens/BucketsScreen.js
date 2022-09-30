import React from 'react';
import { ScrollView, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, images, SIZES } from '../../constants';

const BucketsScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Image source={images.buckets} resizeMode="cover" style={styles.image} />
      <Pressable
        style={styles.fakeBox}
        onPress={() => navigation.navigate('BucketDetails')}
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
    width: 150,
    height: 150,
    position: 'absolute',
    top: 170,
    left: 20,
    right: 0,
  },
});

export default BucketsScreen;
