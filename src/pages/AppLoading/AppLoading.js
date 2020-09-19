import React from 'react';
import {LoaderScreen, Colors} from 'react-native-ui-lib';
import SafeAreaFullView from '../../components/SafeAreaFullView/SafeAreaFullView';
import I18n from '../../i18n';
import useAppState from '../../contexts/AppState';

const componentName = 'AppLoading';

const AppLoading = () => {
  const {setValue} = useAppState();

  React.useEffect(() => {
    let fct = async () => {
      // TODO add app loading logic
      setTimeout(() => setValue({loading: false}), 1500);
    };
    fct().catch((err) => {
      console.debug(componentName, err);
    });
  }, []);

  return (
    <SafeAreaFullView>
      <LoaderScreen
        loaderColor={Colors.primaryLoaderColor}
        message={I18n.t('loading')}
        messageStyle={{
          color: Colors.primaryLoaderColor,
        }}
      />
    </SafeAreaFullView>
  );
};

export default AppLoading;
