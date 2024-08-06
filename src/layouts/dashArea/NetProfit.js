import { NetProfitSection } from "./styles"
import Card from "../../components/card/Card"
import P from "../../components/p/P"
import Indicator from "../../components/indicator/Indicator"

const NetProfit = () => {
    return (
        <NetProfitSection>
            <Card>
                <div>
                    <P fontsize='0.7rem'>Net Profit</P>
                    <P fontsize='2rem' fontweight='bold'>$6759.25</P>
                    <Indicator value={3} />
                </div>
                <div>
                </div>
            </Card>
        </NetProfitSection>
    )
}

export default NetProfit