import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  createDrawerNavigator,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { connect } from 'react-redux';
import { setSelectedTab } from '../store/tab/tabActions';

import { COLORS } from '../constants';
import { MainLayout } from '../src/screens';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerStack = ({ selectedTab, setSelectedTab }) => {
  // TODO:figure out the animated drawer config
  // const progress = useDrawerProgress();
  // const scale = Animated.interpolateNode(progress.value, {
  //   inputRange: [0, 1],
  //   outputRange: [1, 0.8],
  // });
  // const borderRadius = Animated.interpolateNode(progress.value, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 26],
  // });
  // const animatedStyle = useAnimatedStyle(() => {
  //   return {
  //     borderRadius,
  //     transform: [{ scale }],
  //   };
  // });

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
          return (
            <DrawerContent
              navigation={props.navigation}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          );
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
    backgroundColor: COLORS.primary,
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

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: selectedTab => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerStack);
