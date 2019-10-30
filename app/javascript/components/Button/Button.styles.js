import styled from "styled-components";

const StyledButton = styled.button`
    position: absolute;
    background: ${props => props.theme.crayonOrange};
    border-radius: 50px;
    width: 230px;
    height: 65px;
    right: 75px;

    span { 
        color: white;
        font-family: ${props => props.theme.sansSerif};
        text-align: center;
        font-weight: ${props => props.theme.weightBold};
        font-size: 20px;
    }
`;

export { StyledButton }; 