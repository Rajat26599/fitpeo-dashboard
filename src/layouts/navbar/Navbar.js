import Icon from "../../components/icon/Icon"
import { Avatar, NavbarWrapper, NavIcons, NavIconWrapper, SearchBar, SearchBarWrapper, SearchIcon, Brand } from "./styles"

const Navbar = () => {
    return (
        <NavbarWrapper>
            <Brand>
                <Icon className='fa-brands fa-slack'></Icon>
            </Brand>
            <SearchBarWrapper>
                <SearchIcon><Icon className='fa-solid fa-magnifying-glass'></Icon></SearchIcon>          
                <SearchBar placeholder='Search'></SearchBar>
            </SearchBarWrapper>
            <NavIcons>
                <NavIconWrapper><Icon className="fa-regular fa-envelope"></Icon></NavIconWrapper>
                <NavIconWrapper><Icon className="fa-solid fa-gear"></Icon></NavIconWrapper>
                <NavIconWrapper><Icon className="fa-regular fa-bell"></Icon></NavIconWrapper>
                <Avatar src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1tp9TiImDk19cB5AqKVYUHEDALJOqXNlOM0iLLlMJ6PcDHlbF-7FxcVQjkeZ_NpQblqs&usqp=CAU'} alt='avatar'></Avatar>
            </NavIcons>
        </NavbarWrapper>
    )
}

export default Navbar