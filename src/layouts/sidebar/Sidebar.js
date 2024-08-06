import { IconWrapper, SidebarWrapper } from "./styles"
import Icon from "../../components/icon/Icon"

const Sidebar = () => {
    const icons = [
        "fa-solid fa-house",
        "fa-solid fa-chart-column",
        "fa-regular fa-clipboard",
        "fa-regular fa-floppy-disk",
        "fa-solid fa-bag-shopping",
        "fa-solid fa-arrow-right-from-bracket"
    ]
    return (
        <SidebarWrapper>
            {
                icons.map((icon, index) => (
                    <IconWrapper key={index}><Icon className={icon}></Icon></IconWrapper>
                ))
            }
        </SidebarWrapper>
    )
}

export default Sidebar