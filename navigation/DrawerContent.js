import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Fontisto';

import DrawerItem from './DrawerItem';
import { images, COLORS, SIZES, FONTS, constants } from '../constants';
const home = constants.drawerItems[0];

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
            <Icon name="close-a" color={COLORS.white} size={17} />
          </TouchableOpacity>
        </View>

        {/* Profile */}
        <TouchableOpacity
          style={styles.profileContainer}
          onPress={() => console.log('Profile')}>
          <Image source={images.logo} style={styles.avatar} />
          <View style={styles.profileDetails}>
            <Text style={styles.username}>John Cena</Text>
            <Text style={styles.text}>View your profile</Text>
          </View>
        </TouchableOpacity>

        {/* Drawer Items */}
        <View style={styles.itemsContainer}>
          <DrawerItem type={home.type} icon={home.icon} label={home.label} />
          {constants.drawerItems.slice(1, 4).map(item => (
            <>
              <Text style={styles.drawerCategory}>{item.category}</Text>
              {item.items.map(i => (
                <DrawerItem type={i.type} icon={i.icon} label={i.label} />
              ))}
              <View style={styles.divider} />
            </>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.drawerFooter}>
          {constants.drawerItems[4].items.map(item => (
            <DrawerItem type={item.type} icon={item.icon} label={item.label} />
          ))}
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
    borderRadius: 32,
    tintColor: COLORS.white,
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
  divider: {
    height: 0.5,
    marginLeft: SIZES.radius,
    marginVertical: SIZES.radius,
    backgroundColor: COLORS.lightGray,
  },
  drawerCategory: {
    color: COLORS.white,
    marginLeft: SIZES.base,
    ...FONTS.category,
  },
  drawerFooter: {
    marginBottom: SIZES.padding,
  },
});

export default DrawerContent;
