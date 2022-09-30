import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Dashboard,
  Notifications,
  Buckets,
  BucketDetails,
  FolderDetails,
  AddData,
} from '../src/screens';

const Stack = createNativeStackNavigator();

export const DashboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}>
      <Stack.Screen name="DashboardScreen" component={Dashboard} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="FolderDetails" component={FolderDetails} />
    </Stack.Navigator>
  );
};

export const BucketsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}>
      <Stack.Screen name="BucketsScreen" component={Buckets} />
      <Stack.Screen name="BucketDetails" component={BucketDetails} />
      <Stack.Screen name="FolderDetails" component={FolderDetails} />
    </Stack.Navigator>
  );
};

export const ModalStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        gestureEnabled: true,
      }}>
      <Stack.Screen
        name="AddData"
        component={AddData}
        options={{ presentation: 'transparentModal' }}
      />
    </Stack.Navigator>
  );
};
