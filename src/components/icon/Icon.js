import { MyIcon } from "./styles"

const Icon = (props) => {
    const { className, children, color, fontsize } = props
    return (
        <MyIcon fontsize={fontsize} color={color} className={className}>{children}</MyIcon>
    )
}

export default Icon