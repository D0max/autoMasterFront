import styled from "styled-components";

export const ProfileHeaderComponent = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > span {
    margin-left: 15px;
  }
`;

export const ProfileBody = styled.form`
  margin: 40px 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 50px;
  
  & input {
    width: 200px;
  }
`;

export const ProfileButton = styled.div`
  display: flex;
  justify-content: flex-end;
  & > button:first-child {
    margin-right: 15px;
  }
`;
