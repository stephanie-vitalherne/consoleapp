import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-dynamic-vector-icons';
import { COLORS, FONTS, SIZES } from '../../constants';

const TabButton = ({
  icon,
  type,
  label,
  isFocused,
  onPress,
  outerContainerStyle,
  innerContainerStyle,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.outerContainer, outerContainerStyle]}>
        <Animated.View style={[styles.innerContainer, innerContainerStyle]}>
          <Icon
            name={icon}
            type={type}
            color={isFocused ? COLORS.white : COLORS.gray2}
          />
          {isFocused && (
            <Text numberOfLines={1} style={styles.label}>
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    height: 50,
    width: '80%',
    borderRadius: 25,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  label: {
    marginLeft: SIZES.base,
    color: SIZES.white,
    ...FONTS.h3,
  },
});

export default TabButton;
