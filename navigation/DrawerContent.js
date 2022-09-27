import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

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
            onPress={() => navigation.closeDrawer()}></TouchableOpacity>
        </View>
        {/* Profile */}
        {/* Drawer Items */}
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
    paddingHorizontal: 12,
  },
  closeContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  close: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DrawerContent;
