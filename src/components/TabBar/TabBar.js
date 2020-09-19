import React from 'react';
import {Colors, View, TabBar as TabBarUI} from 'react-native-ui-lib';
import I18n from '../../i18n';

const TabBar = ({state, navigation}) => {
  const onPressTab = React.useCallback(
    (page) => () => {
      navigation.navigate(page);
    },
    [navigation],
  );

  return (
    <View
      style={{
        backgroundColor: Colors.tabBarBackground,
      }}>
      <TabBarUI
        backgroundColor={Colors.tabBarBackground}
        indicatorStyle={{height: 0}}
        selectedIndex={state.index}>
        {state.routeNames.map((key) => (
          <TabBarUI.Item
            key={key}
            label={I18n.t(`bottom-tab-${key}`)}
            onPress={onPressTab(key)}
          />
        ))}
      </TabBarUI>
    </View>
  );
};

export default TabBar;
