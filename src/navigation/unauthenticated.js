import React from 'react';
import {Text} from 'react-native-ui-lib';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar/TabBar';
import SafeAreaFullView from '../components/SafeAreaFullView/SafeAreaFullView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ThemedView from '../components/ThemedView/ThemedView';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ThemedDrawer from '../components/ThemedDrawer/ThemedDrawer';

enableScreens();

function HomeDrawerScreen() {
  return (
    <SafeAreaFullView>
      <ThemedView>
        <Text>Home!</Text>
      </ThemedView>
    </SafeAreaFullView>
  );
}

function SettingsDrawerScreen() {
  return (
    <SafeAreaFullView>
      <ThemedView>
        <Text>Settings!</Text>
      </ThemedView>
    </SafeAreaFullView>
  );
}
function HomeScreen() {
  return (
    <ThemedView bottomSafePadding>
      <Text>Home!</Text>
    </ThemedView>
  );
}

function SettingsScreen() {
  return (
    <ThemedView bottomSafePadding>
      <Text>Settings!</Text>
    </ThemedView>
  );
}

export const UNAUTHENTICATED_PAGES = {
  HOME: 'Home',
  SETTINGS: 'Settings',
};
const TabPages = [
  {
    name: UNAUTHENTICATED_PAGES.HOME,
    component: HomeScreen,
  },
  {
    name: UNAUTHENTICATED_PAGES.SETTINGS,
    component: SettingsScreen,
  },
];

const Tab = createBottomTabNavigator();
const TabSample = () => (
  <SafeAreaFullView style={{paddingBottom: 0}}>
    <NavigationContainer>
      <Tab.Navigator
        backBehavior={'none'}
        screenOptions={{cardStyle: {backgroundColor: 'blue'}}}
        tabBar={(props) => <TabBar {...props} />}>
        {TabPages.map(({name, component, ...props}) => (
          <Tab.Screen key={name} name={name} component={component} {...props} />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  </SafeAreaFullView>
);

const Stack = createNativeStackNavigator();
const StackSample = () => (
  <NavigationContainer>
    <Stack.Navigator backBehavior={'none'}>
      {TabPages.map(({name, component, ...props}) => (
        <Stack.Screen key={name} name={name} component={component} {...props} />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);

const DrawerPages = [
  {
    name: UNAUTHENTICATED_PAGES.HOME,
    component: HomeDrawerScreen,
  },
  {
    name: UNAUTHENTICATED_PAGES.SETTINGS,
    component: SettingsDrawerScreen,
  },
];
const Drawer = createDrawerNavigator();
const DrawerSample = ({insets}) => (
  <NavigationContainer>
    <Drawer.Navigator
      backBehavior={'none'}
      hideStatusBar={true}
      openByDefault
      drawerContent={(props) => (
        <ThemedDrawer {...props} title={'RN-Template'} insets={insets} />
      )}>
      {DrawerPages.map(({name, component, ...props}) => (
        <Drawer.Screen
          key={name}
          name={name}
          component={component}
          {...props}
        />
      ))}
    </Drawer.Navigator>
  </NavigationContainer>
);

const Unauthenticated = () => {
  const insets = useSafeAreaInsets();

  return <TabSample insets={insets} />;
};

export default Unauthenticated;
