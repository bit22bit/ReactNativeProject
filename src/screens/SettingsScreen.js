import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default SettingsScreen;