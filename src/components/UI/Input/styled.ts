import styled from "styled-components";

export const InputField = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  input[type=text] {
    padding-bottom: 5px;
    position: absolute;
    background: transparent;
    border:none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: none;
    font-size: 16px;
    color: #fff;
    width: 100%;
  };
  
  input[type=text]:focus + label,
  input[type=text]:valid + label {
    transform: translateY(-25px);
    font-size: 14px;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  display: block;
  transition: .5s;
`;

export const Error = styled.span`

`;

