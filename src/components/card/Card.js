import { CardWrapper } from "./styles"

const Card = (props) => {
    const { children } = props
    return (
        <CardWrapper>{children}</CardWrapper>
    )
}

export default Card