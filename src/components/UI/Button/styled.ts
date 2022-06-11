import styled from "styled-components";

const color: any = {
  yellow: {
    color: '#000',
    background: 'linear-gradient(270deg, #FED32C 0%, #CFA503 100%)',
  },
  grey: {
    color: '#fff',
    background: 'rgba(0, 0, 0, 0.19)',
  },
  link: {
    color: '#fff',
    background: 'transparent',
    border: 'none',
    padding: 0,
    margin: 0,
  }
}

// @ts-ignore
export const Button = styled.button`
  border: 0;
  margin: 10px 0; 
  padding: 15px 0;
  ${(prop): any => {
    return color[prop.color]
  }}
  width: ${({width}: {width: string}) => width};
  border-radius: 18px;
  font-family: 'Cabin';
  font-style: normal;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
`;
