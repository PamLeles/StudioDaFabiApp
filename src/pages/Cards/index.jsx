import React from 'react';
import {Image, Text} from 'react-native';

import {GeneralCardStyling, ChildCardStyling} from './styles';

const Cards = () => {
  return (
    <>
      <GeneralCardStyling>
        <ChildCardStyling>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/img/manicurePedicure.png')}
          />
          <Text>Manicure e Pedicure</Text>
        </ChildCardStyling>
        <ChildCardStyling>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/img/sobrancelha.png')}
          />
          <Text>Designer de Sobrancelha</Text>
        </ChildCardStyling>
        <ChildCardStyling>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/img/depilacao.png')}
          />
          <Text>Depilação</Text>
        </ChildCardStyling>
        <ChildCardStyling>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/img/servicoDomicilio.png')}
          />
          <Text>Serviços a Domicílio</Text>
        </ChildCardStyling>
        <ChildCardStyling>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/img/cilios.png')}
          />
          <Text>Alongamento de Cílios</Text>
        </ChildCardStyling>
        <ChildCardStyling>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/img/limpezaDePele.png')}
          />
          <Text>Limpeza de pele</Text>
        </ChildCardStyling>
        <ChildCardStyling>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/img/cosmeticos.png')}
          />
          <Text>Cosmeticos</Text>
        </ChildCardStyling>
      </GeneralCardStyling>
    </>
  );
};

export default Cards;
