import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn284419Navigator from '../features/SignIn284419/navigator';
import BlankScreen2178967Navigator from '../features/BlankScreen2178967/navigator';
import Settings73711Navigator from '../features/Settings73711/navigator';
import UserProfile73704Navigator from '../features/UserProfile73704/navigator';
import Settings73703Navigator from '../features/Settings73703/navigator';
import Settings73701Navigator from '../features/Settings73701/navigator';
import SignIn273699Navigator from '../features/SignIn273699/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
SignIn284419: { screen: SignIn284419Navigator },
BlankScreen2178967: { screen: BlankScreen2178967Navigator },
Settings73711: { screen: Settings73711Navigator },
UserProfile73704: { screen: UserProfile73704Navigator },
Settings73703: { screen: Settings73703Navigator },
Settings73701: { screen: Settings73701Navigator },
SignIn273699: { screen: SignIn273699Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
