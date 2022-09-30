import React from 'react';
import { Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, images, SIZES } from '../../constants';

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Image
        source={images.login}
        resizeMode="cover"
        style={{ height: SIZES.height, width: SIZES.width }}
      />
      <Pressable
        style={styles.fakeBox}
        onPress={() => navigation.navigate('Home')}
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
    height: 65,
    position: 'absolute',
    bottom: 45,
    right: 20,
  },
});

export default DashboardScreen;
