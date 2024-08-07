import styled from "styled-components";
import { darkTheme } from "../../constants/globalStyles";
import { CardWrapper } from "../../components/card/styles";
import { MyIcon } from "../../components/icon/styles";
import { IndicatorWrapper } from "../../components/indicator/styles";

const ScrollBarStyles = `
    &::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: tarsparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`

export const DashAreaWrapper = styled.div`
    padding-left: 65px;
    padding-top: 10px;
    background-color: ${darkTheme.colors.bgsecondary};
    padding-right: 20px;
    height: calc(100vh - 60px);
    overflow: hidden;

    @media only screen and (max-width: 768px) {
        overflow: scroll;
    }
`
export const Sections = styled.div`
    padding: 10px 0;
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 20px;

    ${CardWrapper} {
        padding: 1rem; 
    }

    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        row-gap: 20px;
    }
`

export const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    grid-row-gap: 20px;
`

export const StatsSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 10px;

    ${CardWrapper} {
        position: relative;
    }

    ${IndicatorWrapper} {
        position: absolute;
        right: 10px;
        bottom: 5px;
    }

    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        row-gap: 20px;
    }
`
export const ActivitySection = styled.div``

export const Author = styled.div`
    display: flex;
    grid-column-gap: 10px;
    align-items: center;
`

export const RecentOrdersSection = styled(CardWrapper)`
    ${Author} {
        justify-content: center;
    }
`

export const RecentOrdersList = styled.div`
    overflow-y: scroll;
    height: 212px;

    ${ScrollBarStyles}
`

export const OrderRow = styled.div`
    font-size: 0.7rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    text-align: center;
`
export const OrderStatus = styled.p`
    padding: 5px;
    background-color: ${props => props.bgcolor};
    border-radius: 500px;
    color: ${props => props.color};
    margin: 0;
`

export const RightSection = styled.div`
    display: grid;
    row-gap: 20px;
`
export const NetProfitSection = styled(CardWrapper)`
    display: grid;
    grid-template-columns: 1fr 3fr;

    ${IndicatorWrapper} {
        margin-bottom: 0;
    }
`
export const ProgressWrapper = styled.div``

export const QuickAction = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const QuickActionLeft = styled.div`
    display: flex;
    align-items: center;

    i {
        padding: 8px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.2);
        margin: 3px 0;
        margin-right: 10px;
    }
`

export const Chevron = styled.div`
    ${MyIcon} {
        height: 0.9rem;
        width: 0.9rem;
        padding: 5px;
        text-align: center;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.2);
    }
`

export const FeedbackSection = styled(CardWrapper)``

export const Feedbacks = styled.div`
    overflow-y: scroll;
    height: 130px;

    ${ScrollBarStyles}
`

export const IndividualFeedback = styled.section``

export const Avatar = styled.img`
    height: 20px;
    width: 20px;
    border-radius: 50%;
`