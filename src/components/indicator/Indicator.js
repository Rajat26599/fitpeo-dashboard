import { IndicatorWrapper } from "./styles"

const Indicator = (props) => {
    const { value } = props
    return (
        <IndicatorWrapper color={value >= 0 ? 'green' : 'red'}>
            <span>
                {
                    value >= 0 
                    ? <i class="fa-solid fa-sort-up"></i>
                    : <i class="fa-solid fa-sort-down"></i> 
                }
            </span>
            <span>{Math.abs(value)}%</span>
        </IndicatorWrapper>
    )
}

export default Indicator