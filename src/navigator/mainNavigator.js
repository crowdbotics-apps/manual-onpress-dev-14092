import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen213274Navigator from '../features/BlankScreen213274/navigator';
import BlankScreen113265Navigator from '../features/BlankScreen113265/navigator';
import BlankScreen013264Navigator from '../features/BlankScreen013264/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen213274: { screen: BlankScreen213274Navigator },
BlankScreen113265: { screen: BlankScreen113265Navigator },
BlankScreen013264: { screen: BlankScreen013264Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
