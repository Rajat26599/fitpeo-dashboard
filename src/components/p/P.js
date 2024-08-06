import { MyP } from "./styles"

const P = (props) => {
    const { fontsize, fontweight, color, children } = props
    return (
        <MyP fontsize={fontsize} fontweight={fontweight} color={color}>{children}</MyP>
    )
}

export default P