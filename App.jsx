import React from 'react';
import {Text} from 'react-native';
import Cards from './src/pages/Cards/index';

import {View, Img} from './stylesGlobal';

function App() {
  return (
    <View>
      <Img source={require('./src/assets/img/Logo.png')} />
      <Cards />

      <View>
        <Text> Navbar</Text>
      </View>
    </View>
  );
}

export default App;
