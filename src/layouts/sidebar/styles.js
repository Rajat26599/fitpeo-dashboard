import styled from "styled-components"
import { darkTheme } from "../../constants/globalStyles"

export const SidebarWrapper = styled.div`
    background-color: ${darkTheme.colors.bgprimary};
    position: absolute;
    height: 100vh;
    width: 50px;
    z-index: 9;
`

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${darkTheme.icon.color};
    margin: 30px 0;
    border-left: 1px solid transparent;

    &:hover {
        color: ${darkTheme.colors.primary};
        cursor: pointer;
        border-color: ${darkTheme.colors.primary};
    }

    &:nth-last-of-type(1) {
        position: absolute;
        bottom: 20px;
    }

`