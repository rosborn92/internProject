import styled from "styled-components";

const StyledInput = styled.input`
    /* position: absolute;
    left: ${props => props.theme.contentPaddingLeft};
    right: 0%;
    top: 31.25%;
    bottom: 0%; */
    background: #FFFFFF;
    border: 1px solid ${props => props.theme.Zircon};
    box-sizing: border-box;
    width: 500px;
    height: 65px;
`;

export { StyledInput };
