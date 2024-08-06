import { Author, Avatar, OrderRow, OrderStatus, RecentOrdersSection } from "./styles"
import Card from "../../components/card/Card"
import P from "../../components/p/P"

const RecentOrders = () => {
    const ordersData = [
        {
            customer: 'Rajat Saxena',
            orderNumber: '123456',
            amount: 100,
            status: 'Delivered',
        },
        {
            customer: 'Rajat Saxena',
            orderNumber: '123456',
            amount: 100,
            status: 'Delivered',
        },
        {
            customer: 'Rajat Saxena',
            orderNumber: '123456',
            amount: 100,
            status: 'Canceled',
        },
    ]
    return (
        <RecentOrdersSection>
            <Card>
                <P fontweight='bold'>Recent Orders</P>
                <br />
                <OrderRow>
                    <Author>
                        <P fontweight='bold'>Customer</P>
                    </Author>
                    <P fontweight='bold'>Order no.</P>
                    <P fontweight='bold'>Amount</P>
                    <P fontweight='bold'>Status</P>
                </OrderRow>
                <hr />
                {
                    ordersData.map((item, index) => (
                        <>
                            <OrderRow key={index}>
                                <Author>
                                    <Avatar src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1tp9TiImDk19cB5AqKVYUHEDALJOqXNlOM0iLLlMJ6PcDHlbF-7FxcVQjkeZ_NpQblqs&usqp=CAU'} alt='avatar'></Avatar>
                                    <P>{item.customer}</P>
                                </Author>
                                <P>{item.orderNumber}</P>
                                <P>${item.amount}</P>
                                <OrderStatus bgcolor={item.status==='Delivered' ? 'rgba(0,255,0,0.2)' : 'rgba(255,0,0,0.2)'} color={item.status==='Delivered' ? 'green' : 'red'}>{item.status}</OrderStatus>
                            </OrderRow>
                            <hr />
                        </>
                    ))
                }
            </Card>
        </RecentOrdersSection>
    )
}

export default RecentOrders