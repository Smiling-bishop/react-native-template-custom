import React from 'react';
import {View, Colors} from 'react-native-ui-lib';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const BottomSafePadding = ({display}) => {
  const insets = useSafeAreaInsets();

  return display ? (
    <View style={{width: '100%', height: insets.bottom}} />
  ) : null;
};
const ThemedView = ({
  children,
  style,
  primary = true,
  bottomSafePadding = false,
  ...props
}) => (
  <View
    style={[
      {
        flex: 1,
        backgroundColor: primary
          ? Colors.primaryBackgroundColor
          : Colors.secondaryBackgroundColor,
      },
      style,
    ]}
    {...props}>
    <View style={{flex: 1}}>{children}</View>
    <BottomSafePadding display={bottomSafePadding} />
  </View>
);

export default ThemedView;
