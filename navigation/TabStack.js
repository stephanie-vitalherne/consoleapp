import React from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import { Invoice, Profile } from '../src/screens';
import { DashboardStack, BucketsStack } from './ScreenStack';
import { COLORS } from '../constants';
import { home, folder, invoice, plus, profile } from '../constants/icons';

const Tab = createBottomTabNavigator();
const TabBarCustomButton = ({ children, onPress }) => {
  return (
    <Pressable style={[styles.customButton, styles.shadow]} onPress={onPress}>
      <LinearGradient
        colors={[COLORS.primary, COLORS.primary]}
        style={styles.gradient}>
        {children}
      </LinearGradient>
    </Pressable>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name={'Dashboard'}
        component={DashboardStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarSquare}>
              <Image
                source={home}
                resizeMode="contain"
                style={[
                  styles.tabBarImage,
                  { tintColor: focused ? COLORS.primary : COLORS.gray2 },
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'Buckets'}
        component={BucketsStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarSquare}>
              <Image
                source={folder}
                resizeMode="contain"
                style={[
                  styles.tabBarImage,
                  { tintColor: focused ? COLORS.primary : COLORS.gray2 },
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddBucket"
        component={BucketsStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={plus} style={styles.plusBtn} resizeMode="contain" />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name={'Invoice'}
        component={Invoice}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarSquare}>
              <Image
                source={invoice}
                resizeMode="contain"
                style={[
                  styles.tabBarImage,
                  { tintColor: focused ? COLORS.primary : COLORS.gray2 },
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarSquare}>
              <Image
                source={profile}
                resizeMode="contain"
                style={[
                  styles.tabBarImage,
                  { tintColor: focused ? COLORS.primary : COLORS.gray2 },
                ]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,

    elevation: 5,
  },
  tabBarSquare: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarImage: {
    width: 30,
    height: 30,
  },
  plusBtn: {
    width: 30,
    height: 30,
    tintColor: COLORS.white,
  },
  customButton: {
    top: -25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  tabBar: {
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    padding: 10,
    width: '100%',
    height: 90,
    zIndex: 0,
  },
});

export default Tabs;
