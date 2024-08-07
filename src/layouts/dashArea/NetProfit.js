import { NetProfitSection } from "./styles"
import P from "../../components/p/P"
import Indicator from "../../components/indicator/Indicator"

const NetProfit = () => {
    return (
        <NetProfitSection>
            <div>
                <P fontsize='0.7rem'>Net Profit</P>
                <P fontsize='1.5rem' fontweight='bold'>$6759.25</P>
                <Indicator value={3} />
            </div>
            <div>
            </div>
        </NetProfitSection>
    )
}

export default NetProfit