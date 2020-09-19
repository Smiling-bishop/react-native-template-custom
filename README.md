# First install
1. Set Theme in src/react-native-ui-lib/FoundationConfig.js, src/react-native-ui-lib/ComponentsConfig.js
2. Set default locale in I18n/index.js and add locale for dayjs and I18n
3. Configure react-native-gesture-handler (https://docs.swmansion.com/react-native-gesture-handler/docs/#installation)
4. Update android/app/src/main/.../MainActivity.java

Update your MainActivity.java file (or wherever you create an instance of ReactActivityDelegate), so that it overrides the method responsible for creating ReactRootView instance and then use the root view wrapper provided by this library. Do not forget to import ReactActivityDelegate, ReactRootView, and RNGestureHandlerEnabledRootView:
````java
package com.swmansion.gesturehandler.react.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }
+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
````
5. Define the correct status bar in the SafeAreaXXXView components
6. Finally, use the native components from 'react-native-ui-lib'
è. Don't forget to update the app navigation in the src/navigation directory.

# Help
## Navigation
An authentication flows has been integrated at src/navigation.index.js
Some navigation samples are provide in the file src/navigation/unauthenticated.js

# I18n
I18nProvider allows the app to dynamically update the locale

# Resources to know
````
https://medium.com/dailyjs/the-1-2-3s-of-react-native-templates-1f5dda037e11
https://wix.github.io/react-native-ui-lib/
https://reactnavigation.org/
https://day.js.org/
````

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

