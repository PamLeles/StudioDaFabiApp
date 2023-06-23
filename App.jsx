import React from 'react';
import {View, Text, Image} from 'react-native';
import Cards from './src/pages/Cards/index';

function App() {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
      <Text>Ola</Text>
      <Image
        style={{width: 250, height: 180, resizeMode: 'center'}}
        source={require('./src/assets/img/Logo.png')}
      />
      <Cards />

      <View>
        <Text> Navbar</Text>
      </View>
    </View>
  );
}

export default App;
