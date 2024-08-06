import styled from "styled-components";
import { darkTheme } from "../../constants/globalStyles";

export const MyIcon = styled.i`
    color: ${props => props.color ? props.color : darkTheme.icon.color};    
    font-size: ${props => props.fontsize};
    
    &:hover {
        color: ${darkTheme.colors.primary};
    }
`