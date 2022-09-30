import React from 'react';
import { Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, images, SIZES } from '../../constants';

const NotificationsScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Pressable
        style={styles.fakeArrowBox}
        onPress={() => navigation.goBack()}
      />
      <Image
        source={images.notifications}
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
  fakeArrowBox: {
    zIndex: 100,
    width: 40,
    height: 40,
    position: 'absolute',
    top: 50,
    left: 20,
    right: 0,
  },
  image: {
    height: SIZES.height,
    width: SIZES.width,
    position: 'relative',
  },
});

export default NotificationsScreen;
