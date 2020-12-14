import 'react-native-gesture-handler';
// In App.js in a new project

import * as React from 'react';
import { Text, View, Button, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={styles.tinyLogo}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
      <Text>
        Miriam Bekham
      </Text>
      <Text>
        get the latest deals with us every satusday and sunday with new and freash arrival shoes.
      </Text>
    </View>
  );
}

export default ProfileScreen;