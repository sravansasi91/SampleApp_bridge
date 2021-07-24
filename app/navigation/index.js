import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../features/home/actions/homePageAction';
//import HomePage from '../features/home/components/homePageScreen';
import { Provider } from 'react-redux';
import store from './../../app/features/store';

const Stack = createStackNavigator();

function NavigationStack() {
  return (
    <Provider store={store}>
      <NavigationContainer headerMode="none">
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <>
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{
                header: () => null,
              }}
            />
            {/* { <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{
              header: () => null,
            }}
          /> } */}
          </>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default NavigationStack;
