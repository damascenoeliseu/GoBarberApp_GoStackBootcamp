import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import CreateAppointment from '../pages/CreateAppointment';
import CreatedAppointment from '../pages/CreatedAppointment';
import Profile from '../pages/Profile';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
   <Auth.Navigator
      screenOptions={{
         headerShown: false,
         cardStyle: { backgroundColor: '#312e38' },
      }}
   >
      <Auth.Screen name="Dashboard" component={Dashboard} />
      <Auth.Screen name="CreateAppointment" component={CreateAppointment} />
      <Auth.Screen name="CreatedAppointment" component={CreatedAppointment} />

      <Auth.Screen name="Profile" component={Profile} />
   </Auth.Navigator>
);

export default AuthRoutes;
