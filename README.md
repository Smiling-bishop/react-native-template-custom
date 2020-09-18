# First install
1. Set Theme in src/react-native-ui-lib/FoundationConfig.js, src/react-native-ui-lib/ComponentsConfig.js
2. Set default locale in I18n/index.js and add locale for dayjs and I18n
3. Configure react-native-gesture-handler (https://docs.swmansion.com/react-native-gesture-handler/docs/#installation)

# Templetize
1. Add all the dependencies into dependencies.json, omit react and react-native
2. Update package.json
````json
{    
    "name": "react-native-template-custom", 
    "version": "0.0.1"
}
````
3. Remove android and ios directories

# Use the Template
````
react-native init test --template https://github.com/Smiling-bishop/react-native-template-custom
````
