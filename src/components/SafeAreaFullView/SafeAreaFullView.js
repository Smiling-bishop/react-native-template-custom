import React from 'react';
import {View} from 'react-native-ui-lib';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function SafeAreaView({children, style}) {
  const insets = useSafeAreaInsets();

  return (
    <View
      flex
      style={{
        paddingTop: insets.top,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
      }}>
      {children}
    </View>
  );
}
