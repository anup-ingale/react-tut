import "./Subscription.css";

function Subscription(props) {
 
  return (
    <div className="subscription">
      <div>{props.passedDate}</div>
      <h2 className="subscription_title">{props.passedTitle}</h2>
      <div className="subscription_price">{props.passedAmount}</div>
    </div>
  );
}

export default Subscription;
