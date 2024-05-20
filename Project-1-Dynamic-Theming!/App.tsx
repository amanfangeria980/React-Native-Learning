import React from 'react'
import {View, Text, SafeAreaView, Button} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World!</Text>
        <Button title='Press me!' color="aqua" />
      </View>
    </SafeAreaView>
  );
};

export default App;