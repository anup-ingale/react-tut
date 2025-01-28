import "./Subscription.css";
import SubscriptionDate from "./SubscriptionDate";
import Container from "../templates/Container";
import {useState} from "react";

const Subscription = (props) => {
    const [title, setTitle] = useState(props.title)
    const onClickHandler = () => {
        setTitle("Hello Sir Wonderful!!")
    }
    return (
        <Container className="subscription">
            <SubscriptionDate date={props.date} title={props.title} amount={props.amount}/>
            <h2 className="subscription_title">{title}</h2>
            <div className="subscription_price">{props.amount}</div>
            <div className="form-button">
                <button type="submit" onClick={onClickHandler}> Change </button>
            </div>
        </Container>
    );
}

export default Subscription;
