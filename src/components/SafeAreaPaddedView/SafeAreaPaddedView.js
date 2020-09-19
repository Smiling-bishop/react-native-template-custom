import React from 'react';
import {Colors, View} from 'react-native-ui-lib';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

const SafeAreaPaddedView = ({children, style}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      flex
      style={[
        {
          flex: 1,
          marginTop: insets.top,
          marginRight: insets.right,
          marginBottom: insets.bottom,
          marginLeft: insets.left,
          backgroundColor: Colors.primaryBackgroundColor,
        },
        style,
      ]}>
      <StatusBar barStyle="dark-content" />
      {children}
    </View>
  );
};

export default SafeAreaPaddedView;
