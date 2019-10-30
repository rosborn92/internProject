import styled from "styled-components";

const LocationStyledInput = styled.input`
    left: ${props => props.theme.contentPaddingLeft};
    right: 0%;
    top: 31.25%;
    bottom: 0%; */
    background: #FFFFFF;
    border: 1px solid ${props => props.theme.zircon};
    box-sizing: border-box;
    width: 1050px;
    height: 78px;
    margin-bottom: 40px;
    font-size: 25px;

`;

export { LocationStyledInput };
