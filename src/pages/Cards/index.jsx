import React from 'react';

import {GeneralCardStyling, ChildCardStyling, Title, Img} from './styles';

const Cards = () => {
  return (
    <>
      <GeneralCardStyling>
        <ChildCardStyling>
          <Img source={require('../../assets/img/manicurePedicure.png')} />
          <Title>Manicure e Pedicure</Title>
        </ChildCardStyling>
        <ChildCardStyling>
          <Img source={require('../../assets/img/sobrancelha.png')} />
          <Title>Designer de Sobrancelha</Title>
        </ChildCardStyling>
        <ChildCardStyling>
          <Img source={require('../../assets/img/depilacao.png')} />
          <Title>Depilação</Title>
        </ChildCardStyling>
        <ChildCardStyling>
          <Img source={require('../../assets/img/servicoDomicilio.png')} />
          <Title>Serviços a Domicílio</Title>
        </ChildCardStyling>
        <ChildCardStyling>
          <Img source={require('../../assets/img/cilios.png')} />
          <Title>Alongamento de Cílios</Title>
        </ChildCardStyling>
        <ChildCardStyling>
          <Img source={require('../../assets/img/limpezaDePele.png')} />
          <Title>Limpeza de pele</Title>
        </ChildCardStyling>
        <ChildCardStyling>
          <Img source={require('../../assets/img/cosmeticos.png')} />
          <Title>Cosmeticos</Title>
        </ChildCardStyling>
      </GeneralCardStyling>
    </>
  );
};

export default Cards;
