import React from 'react';
import { Image, StyleSheet, Pressable, View, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, images, SIZES } from '../../constants';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animated.FlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        data={images.onboarding}
        scrollEventThrottle={16}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <>
              <Pressable
                style={styles.fakeBox}
                onPress={() => navigation.navigate('Login')}
              />
              <Image
                style={styles.image}
                source={item.image}
                resizeMode="contain"
              />
            </>
          );
        }}
      />
    </View>
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
    height: 150,
    position: 'absolute',
    top: 10,
    right: 20,
  },
});

export default OnboardingScreen;
