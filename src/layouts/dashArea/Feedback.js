import P from "../../components/p/P"
import { Feedbacks, Author, Avatar, FeedbackSection, IndividualFeedback } from "./styles"

const Feedback = () => {
    const feedbackData = [
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
        <FeedbackSection>
            <P>Customer's Feedback</P><br />
            <Feedbacks>
            {
                feedbackData.map((item, index) => (
                    <>
                        <IndividualFeedback>
                            <Author>
                                <Avatar src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1tp9TiImDk19cB5AqKVYUHEDALJOqXNlOM0iLLlMJ6PcDHlbF-7FxcVQjkeZ_NpQblqs&usqp=CAU'} alt='avatar'></Avatar>
                                <P fontsize='0.8rem'>{item.name}</P>
                            </Author>
                            <P fontsize='0.7rem' color='#aaa'>{item.feedback}</P>
                        </IndividualFeedback>
                    {index !== feedbackData.length-1 && <hr />}
                    </>
                ))
            }
            </Feedbacks >
        </FeedbackSection>
    )
}

export default Feedback