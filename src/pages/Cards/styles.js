import styled from "styled-components/native";

export const GeneralCardStyling = styled.View`
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  align-items: center; 
`;

export const ChildCardStyling = styled.View`
  border-color: red;
  width: 120px;
  height: 110px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: pink;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  color: black;
  font-size: 13px;
  font-family: sans-serif;
  font-weight: bold;
  align-items: center;
  
`;

export const Img = styled.Image`
  width: 50px;
  height: 50px;
`;
