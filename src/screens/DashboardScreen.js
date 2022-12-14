import React from 'react';
import { Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, images, SIZES } from '../../constants';

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Pressable
        style={styles.fakeNotBox}
        onPress={() => navigation.navigate('Notifications')}
      />
      <Image
        source={images.home}
        resizeMode="cover"
        style={{ height: SIZES.height, width: SIZES.width }}
      />
      <Pressable
        style={styles.fakeBox}
        onPress={() => navigation.navigate('FolderDetails')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  fakeNotBox: {
    zIndex: 100,
    width: 40,
    height: 40,
    position: 'absolute',
    top: 50,
    right: 20,
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
    bottom: 260,
    left: 20,
    right: 0,
  },
});

export default DashboardScreen;
