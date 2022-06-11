import styled from "styled-components";

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}

export const LayoutGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  
  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`;

export const LayoutHeader = styled.div`
  grid-area: 1 / 1 / 6 / 4;
  @media ${device.tablet} {
    grid-area: 1 / 1 / 2 / 2;
  }
`;

export const LayoutMain = styled.div`
  grid-area: 1 / 4 / 5 / 13; 
  overflow: auto;
  @media ${device.tablet} {
    grid-area: 2 / 1 / 9 / 2;
  }
`;

export const LayoutFooter = styled.div`
  grid-area: 5 / 4 / 6 / 13;
  height: 40px;
  padding: 5px 15px;
  @media ${device.tablet}{
    display: none;
  }
`;
