import styled from "styled-components";

const Thirds = styled.input`
    left: ${props => props.theme.contentPaddingLeft};
    right: 0%;
    top: 31.25%;
    bottom: 0%; */
    background: #FFFFFF;
    border: 1px solid ${props => props.theme.zircon};
    box-sizing: border-box;
    width: 314px;
    height: 65px;
    margin-bottom: 40px;
    font-size: 25px;
`;

export { Thirds };