import React from 'react';
import {View, Colors} from 'react-native-ui-lib';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

const SafeAreaFullView = ({children, style}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      flex
      style={[
        {
          flex: 1,
          paddingTop: insets.top,
          paddingRight: insets.right,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          backgroundColor: Colors.primaryBackgroundColor,
        },
        style,
      ]}>
      <StatusBar barStyle="light-content" />
      {children}
    </View>
  );
};

export default SafeAreaFullView;
