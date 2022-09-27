import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

import DrawerItem from './DrawerItem';
import { images, COLORS, SIZES, FONTS } from '../constants';

const DrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled
      contentContainerStyle={styles.mainContainer}>
      <View style={styles.container}>
        {/* Close */}
        <View style={styles.closeContainer}>
          <TouchableOpacity
            style={styles.close}
            onPress={() => navigation.closeDrawer()}>
            {/* Vector icon will go here */}
            <Text style={styles.text}>X</Text>
          </TouchableOpacity>
        </View>

        {/* Profile */}
        <TouchableOpacity
          style={styles.profileContainer}
          onPress={() => console.log('Profile')}>
          <Image source={images.logo} style={styles.avatar} />
          <View style={styles.profileDetails}>
            <Text style={styles.username}>Wasabi Customer</Text>
            <Text style={styles.text}>View your profile</Text>
          </View>
        </TouchableOpacity>

        {/* Drawer Items */}
        <View style={styles.itemsContainer}>
          <DrawerItem label="Home" icon="home" />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: SIZES.radius,
  },
  closeContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  close: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 35,
    height: 35,
    tintColor: COLORS.white,
    borderRadius: 32,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.radius,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: SIZES.radius,
  },
  profileDetails: {
    marginLeft: SIZES.radius,
  },
  username: {
    color: COLORS.white,
    ...FONTS.h3,
  },
  text: {
    color: COLORS.white,
    ...FONTS.body4,
  },
  itemsContainer: {
    flex: 1,
    marginTop: SIZES.padding,
  },
});

export default DrawerContent;
