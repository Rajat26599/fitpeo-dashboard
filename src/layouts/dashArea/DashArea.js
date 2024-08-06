import Card from "../../components/card/Card"
import Icon from "../../components/icon/Icon"
import Indicator from "../../components/indicator/Indicator"
import P from "../../components/p/P"
import {darkTheme} from "../../constants/globalStyles"
import NetProfit from "./NetProfit"
import RecentOrders from "./RecentOrders"
import { DashAreaWrapper, Sections, MainSection, RightSection, StatsSection, QuickAction, Chevron, QuickActionLeft, FeedbackSection, Feedbacks, Avatar, Author, ActivitySection } from "./styles"

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
    const feebackData = [
        {
            name: 'Jeremy',
            stars: 4,
            feedback: 'The CSS anchor positioning module defines features that allow you to tether elements together. Certain elements are defined as anchor elements; anchor-positioned elements can then have their size and position set based on the size and location of the anchor elements to which they are bound.',
        },
        {
            name: 'Jeremy',
            stars: 4,
            feedback: 'The CSS anchor positioning module defines features that allow you to tether elements together. Certain elements are defined as anchor elements; anchor-positioned elements can then have their size and position set based on the size and location of the anchor elements to which they are bound.',
        },
        {
            name: 'Jeremy',
            stars: 4,
            feedback: 'The CSS anchor positioning module defines features that allow you to tether elements together. Certain elements are defined as anchor elements; anchor-positioned elements can then have their size and position set based on the size and location of the anchor elements to which they are bound.',
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
                    <Card>
                        <P>Customer's Feedback</P>
                        <Feedbacks>
                            {
                                feebackData.map((item, index) => (
                                    <>
                                        <FeedbackSection>
                                            <Author>
                                                <Avatar src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1tp9TiImDk19cB5AqKVYUHEDALJOqXNlOM0iLLlMJ6PcDHlbF-7FxcVQjkeZ_NpQblqs&usqp=CAU'} alt='avatar'></Avatar>
                                                <P fontsize='0.8rem'>{item.name}</P>
                                            </Author>
                                            <P fontsize='0.7rem' color='#aaa'>{item.feedback}</P>
                                        </FeedbackSection>
                                        <hr />
                                    </>
                                ))
                            }
                        </Feedbacks>
                    </Card>
                </RightSection>
            </Sections>
        </DashAreaWrapper>
    )
}

export default DashArea