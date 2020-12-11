import 'react-native-gesture-handler';
// In App.js in a new project

import * as React from 'react';
import { Text, View, Button } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
        title="Teri ma di lun" onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

export default HomeScreen;