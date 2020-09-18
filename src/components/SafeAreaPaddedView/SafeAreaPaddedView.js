import React from 'react';
import {View} from 'react-native-ui-lib';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function SafeAreaView({children}) {
  const insets = useSafeAreaInsets();

  return (
    <View
      flex
      style={{
        marginTop: insets.top,
        marginRight: insets.right,
        marginBottom: insets.bottom,
        marginLeft: insets.left,
      }}>
      {children}
    </View>
  );
}
