import React, { useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { connect } from 'react-redux';
import Icon from 'react-native-dynamic-vector-icons';
import LinearGradient from 'react-native-linear-gradient';

import { Header, TabButton } from '../components';
import { Dashboard, Buckets } from '../screens';
import { COLORS, SIZES, FONTS, constants, images } from '../../constants';
import { setSelectedTab } from '../../store/tab/tabActions';

// TODO:figure out the animated drawer config
const MainLayout = ({
  drawerAnimationStyle,
  navigation,
  selectedTab,
  setSelectedTab,
}) => {
  useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);

  return (
    <Animated.View style={[styles.mainContainer, { ...drawerAnimationStyle }]}>
      <Header
        containerStyle={styles.header}
        title="Home"
        leftComponent={
          <TouchableOpacity
            style={styles.headerLeftComponent}
            onPress={() => navigation.openDrawer()}>
            <Icon
              size={24}
              type="Ionicons"
              color={COLORS.gray}
              name="ios-menu-outline"
            />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity style={styles.headerRightComponent}>
            <Image source={images.logo} style={styles.logo} />
          </TouchableOpacity>
        }
      />

      <View style={styles.contentContainer}>
        <Text>MainLayout</Text>
      </View>

      <View style={styles.footer}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 4 }}
          colors={[COLORS.transparent, COLORS.lightGray]}
          style={styles.gradient}
        />
        <View style={styles.tabsContainer}>
          <TabButton
            icon="home"
            label={constants.screens.home}
            isFocused={selectedTab == constants.screens.home}
            onPress={() => setSelectedTab(constants.screens.home)}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    height: 50,
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
  },
  contentContainer: {
    flex: 1,
  },
  headerLeftComponent: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: SIZES.radius,
  },
  headerRightComponent: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: SIZES.radius,
  },
  footer: {
    height: 100,
    justifyContent: 'flex-end',
  },
  gradient: {
    position: 'absolute',
    top: -20,
    left: 0,
    right: 0,
    height: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tabsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: SIZES.radius,
    paddingBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.white,
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

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
