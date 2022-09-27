import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { SIZES } from '../constants';

const DrawerItem = ({ label, icon }) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={() => {}}>
      <Text>DrawerItem</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: SIZES.base,
    borderRadius: SIZES.base,
    paddingLeft: SIZES.radius,
  },
});

export default DrawerItem;
