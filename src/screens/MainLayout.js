import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

// TODO:figure out the animated drawer config
const MainLayout = ({ drawerAnimationStyle }) => {
  return (
    <Animated.View style={[styles.mainContainer, { ...drawerAnimationStyle }]}>
      <Text>MainLayout</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
});

export default MainLayout;
