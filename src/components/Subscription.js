import "./Subscription.css";

function Subscription(props) {
  const month = props.date.toLocaleString("en-US",{month:'long'});
  const day   = props.date.toLocaleString("en-US",{day:'2-digit'});
  const year  = props.date.getFullYear();
  return (
    <div className="subscription">
      <div>{day} - {month} - {year}</div>
      <h2 className="subscription_title">{props.title}</h2>
      <div className="subscription_price">{props.amount}</div>
    </div>
  );
}

export default Subscription;
