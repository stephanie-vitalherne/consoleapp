import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { FONTS } from '../../constants';

const Header = ({ title, containerStyle, leftComponent, rightComponent }) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <View style={styles.titleContainer}>
        {leftComponent}
        <Text style={styles.title}>{title}</Text>
        {rightComponent}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    textTransform: 'uppercase',
    ...FONTS.h3,
  },
});

export default Header;
