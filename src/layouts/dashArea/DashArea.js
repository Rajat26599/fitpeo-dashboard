import Card from "../../components/card/Card"
import Icon from "../../components/icon/Icon"
import Indicator from "../../components/indicator/Indicator"
import P from "../../components/p/P"
import {darkTheme} from "../../constants/globalStyles"
import Feedback from "./Feedback"
import NetProfit from "./NetProfit"
import RecentOrders from "./RecentOrders"
import { DashAreaWrapper, Sections, MainSection, RightSection, StatsSection, QuickAction, Chevron, QuickActionLeft, ActivitySection } from "./styles"

const DashArea = () => {
    const statsData = [
        {
            icon: 'fa-solid fa-basket-shopping',
            iconColor: 'rgb(73, 100, 249)', 
            name: 'Total Orders',
            count: 75,
            percent: 3,
        },
        {
            icon: 'fa-solid fa-basket-shopping',
            iconColor: 'green', 
            name: 'Total Orders',
            count: 75,
            percent: -3,
        },
        {
            icon: 'fa-solid fa-basket-shopping',
            iconColor: 'orange', 
            name: 'Total Orders',
            count: 75,
            percent: 3,
        },
        {
            icon: 'fa-solid fa-basket-shopping',
            iconColor: 'pink', 
            name: 'Total Orders',
            count: 75,
            percent: -3,
        },
    ]
    const quickActions = [
        {
            icon: 'fa-solid fa-bullseye',
            iconColor: 'red',
            name: 'Goals',
        },
        {
            icon: 'fa-solid fa-burger',
            iconColor: 'blue',
            name: 'Popular Dishes',
        },
        {
            icon: 'fa-solid fa-utensils',
            iconColor: 'green',
            name: 'Menus',
        },
    ]
    return (
        <DashAreaWrapper>
            <P fontsize='1.5rem' fontweight='bold' color={darkTheme.font.color}>Dashboard</P>
            <Sections>
                <MainSection>
                    <StatsSection>
                        {
                            statsData.map((item, index) => (
                                <Card key={index}>
                                    <Icon className={item.icon} color={item.iconColor}></Icon>
                                    <P fontsize='0.7rem'>{item.name}</P>
                                    <P fontweight='bold' fontsize='1.5rem'>{item.count}</P>
                                    <Indicator value={item.percent} />
                                </Card>
                            ))
                        }
                    </StatsSection>

                    <ActivitySection>
                        <Card>
                            <P fontweight='bold'>Activity</P>
                        </Card>
                    </ActivitySection>

                    <RecentOrders />

                </MainSection>
                <RightSection>
                    <NetProfit />
                    <Card>
                        {
                            quickActions.map((item, index) => (
                                <QuickAction key={index}>
                                    <QuickActionLeft iconbg={item.iconColor}>
                                        <Icon fontsize='0.8rem' key={index} className={item.icon} color={item.iconColor} />
                                        <P fontsize='0.8rem'>{item.name}</P>
                                    </QuickActionLeft>
                                    <Chevron>
                                        <Icon className='fa-solid fa-angle-right' />
                                    </Chevron>
                                </QuickAction>
                            ))
                        }
                    </Card>

                    <Feedback />
                </RightSection>
            </Sections>
        </DashAreaWrapper>
    )
}

export default DashArea