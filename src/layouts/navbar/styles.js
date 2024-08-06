import styled from "styled-components";
import { darkTheme } from "../../constants/globalStyles";
import { MyIcon } from "../../components/icon/styles";

export const NavbarWrapper = styled.nav`
    background-color: ${darkTheme.colors.bgprimary};
    color: ${darkTheme.icon.color};
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 15px;
`
export const Brand = styled.div`
    ${MyIcon} {
        font-size: 1.5rem;
        color: ${darkTheme.colors.primary};
    }
`

export const SearchBarWrapper = styled.div`
    position: relative;
    margin-left: 30px;
`

export const SearchIcon = styled.span`
    position: absolute;
    left: 8px;
    top: 6px;
`

export const SearchBar = styled.input`
    background-color: ${darkTheme.colors.gray};
    padding: 10px;
    padding-left: 40px;
    border: none;
    border-radius: 5px;
    color: ${darkTheme.font.color};

    &:focus {
        outline-color: ${darkTheme.colors.primary};
    }
`
export const NavIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    right: 20px;
`

export const NavIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(0.9);
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    margin-right: 10px;

    &:nth-last-of-type(1) {
        margin-right: 20px;
    }

    i {
        padding: 6px;
    }
`

export const Avatar = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
`