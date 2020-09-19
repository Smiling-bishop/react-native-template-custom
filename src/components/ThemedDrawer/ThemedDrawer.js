import React from 'react';
import {TouchableOpacity, View, Text, Spacings} from 'react-native-ui-lib';
import I18n from '../../i18n';

const ThemedDrawer = ({title, insets, state: {index, routes}, navigation}) => {
  const displayTitle = React.useCallback(() => {
    if (title) {
      return (
        <Text drawerTitle marginB-content>
          {title}
        </Text>
      );
    }
    return null;
  }, [title]);
  const displayContent = React.useCallback(
    () => (
      <View flex>
        {routes.map(({name, key}, idx) => (
          <TouchableOpacity
            key={key}
            paddingV-content
            onPress={() => navigation.navigate(name)}>
            <Text drawerBtn drawerBtnActive={idx === index}>
              {I18n.t(`drawer-${name}`)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    ),
    [index, routes, navigation],
  );

  return (
    <View
      flex
      bg-drawerBackground
      style={{
        width: '100%',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left + Spacings.page,
        paddingRight: insets.right + Spacings.page,
      }}>
      {displayTitle()}
      {displayContent()}
    </View>
  );
};

export default ThemedDrawer;
