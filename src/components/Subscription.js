import "./Subscription.css";
import SubscriptionDate from "./SubscriptionDate";
import Container from "./Container";

function Subscription(props) {
  return (
    <Container className="subscription">
      <SubscriptionDate
        date={props.date}
        title={props.title}
        amount={props.amount}
      ></SubscriptionDate>
      <h2 className="subscription_title">{props.title}</h2>
      <div className="subscription_price">{props.amount}</div>
    </Container>
  );
}

export default Subscription;
