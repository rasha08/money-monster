import { Dashboard } from '../views/dashboard/Dashboard';
import { Auth } from '../views/auth/Auth';
import { createSwitchNavigator } from 'react-navigation';

export const MainNavigator = createSwitchNavigator({
  Dashboard: { screen: Dashboard },
  Auth: { screen: Auth }
});
