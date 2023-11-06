// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from '../screen/Products';
import ProductDetail from '../screen/ProductDetail';

const Stack = createNativeStackNavigator();

function Navigation(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
