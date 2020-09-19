import {Colors, Typography, Spacings} from 'react-native-ui-lib';

Colors.loadColors({
  primaryColor: '#2364AA',
  secondaryColor: '#81C3D7',
  textColor: '#221D23',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '#FF963C',

  primaryBackgroundColor: '#3678e3',
  secondaryBackgroundColor: '#adb0b5',
  primaryLoaderColor: '#FFFFFF',
  secondaryLoaderColor: '#000000',

  tabBarBackground: '#FFFFFF',
  drawerBackground: '#FFFFFF',
});

Typography.loadTypographies({
  heading: {fontSize: 36, fontWeight: '600'},
  subheading: {fontSize: 28, fontWeight: '500'},
  body: {fontSize: 18, fontWeight: '400', color: Colors.textColor},
  drawerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.primaryColor,
    textAlign: 'center',
  },
  drawerBtn: {fontSize: 18, color: Colors.textColor, fontWeight: '700'},
  drawerBtnActive: {color: Colors.primaryColor},
});

Spacings.loadSpacings({
  page: 20,
  content: 15,
});

console.debug('Foundation configured');
