import {Colors, ThemeManager, BorderRadiuses} from 'react-native-ui-lib';

ThemeManager.setComponentTheme('Button', {
  backgroundColor: Colors.red30,
  color: Colors.white,
  borderRadius: BorderRadiuses.br20,
});

console.debug('Theme configured');
