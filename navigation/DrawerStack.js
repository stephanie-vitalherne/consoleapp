import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MainLayout } from '../src/screens';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <View style={styles.mainContainer}>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="MainLayout"
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          drawerStyle: styles.drawer,
          overlayColor: 'transparent',
          sceneContainerStyle: styles.drawerContainer,
        }}
        drawerContent={props => {
          return <DrawerContent navigation={props.navigation} />;
        }}>
        <Drawer.Screen name="MainLayout">
          {props => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#062033',
  },
  drawer: {
    flex: 1,
    width: '65%',
    paddingRight: 20,
    backgroundColor: 'transparent',
  },
  drawerContainer: {
    backgroundColor: 'transparent',
  },
});

export default DrawerStack;
