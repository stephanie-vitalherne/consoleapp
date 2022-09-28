import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';

import { COLORS, FONTS, SIZES } from '../constants';

const DrawerItem = ({ label, icon, type, isFocused, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.mainContainer,
        { backgroundColor: isFocused ? COLORS.transparentBlack : null },
      ]}
      onPress={onPress}>
      <Icon name={icon} type={type} color={COLORS.white} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 28,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: SIZES.base,
    borderRadius: SIZES.base,
    paddingLeft: SIZES.radius,
  },
  label: {
    marginLeft: 15,
    color: COLORS.white,
    ...FONTS.h3,
  },
});

export default DrawerItem;
