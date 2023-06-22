import React from 'react';
import {View, Text, TextInput} from 'react-native';

import Carousel from 'react-native-reanimated-carousel';

function App() {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
      <Text>Ola</Text>
      <Text>Banner</Text>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: 5,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'red',
            width: 100,
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
          }}>
          <View></View>
          <Text>Manicure e Pedicure</Text>
        </View>
        <View>
          <View></View>
          <Text>Designer de Sobrancelha</Text>
        </View>
        <View>
          <View></View>
          <Text>Depilação</Text>
        </View>
        <View>
          <View></View>
          <Text>Serviços a Domicílio</Text>
        </View>
        <View>
          <View></View>
          <Text>Alongamento de Cílios</Text>
        </View>
        <View>
          <View></View>
          <Text>Limpeza de pele</Text>
        </View>
        <View>
          <View></View>
          <Text>Cosmeticos</Text>
        </View>
        <View>
          <View></View>
          <Text>Contato</Text>
        </View>
      </View>

      <View>
        <Text> Navbar</Text>
      </View>
    </View>
  );
}

export default App;
