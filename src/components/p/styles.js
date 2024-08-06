import styled, { css } from "styled-components";
import { darkTheme } from "../../constants/globalStyles";

export const MyP = styled.p`
    ${props => css`
        margin: 0;
        font-weight: ${props.fontweight};
        font-size: ${props.fontsize};
        color: ${props.color ? props.color: darkTheme.font.color};
        `
    }
`