import logo from './logo.svg';
import './App.css';
import Subscription from './components/Subscription'



function App() {
  let subscriptions = [
    {
      id:"1",
      date:(new Date("2021", "03", "23")),
      title:"Quaterly Plan",
      amount:"125.25"
    },
    {
      id:"2",
      date:(new Date('2021', "08", "25")),
      title:"Monthly Plan",
      amount:"225.25"
    },
    {
      id:"3",
      date:(new Date('2021', "10", "25")),
      title:"Yearly Plan",
      amount:"850.25"
    },
  ]

  return (
    <div className="App">
      <Subscription passedDate={subscriptions[0].date.toISOString()} passedTitle={subscriptions[0].title} passedAmount={subscriptions[0].amount} />
      <Subscription passedDate={subscriptions[1].date.toISOString()} passedTitle={subscriptions[1].title} passedAmount={subscriptions[1].amount} />
      <Subscription passedDate={subscriptions[2].date.toISOString()} passedTitle={subscriptions[2].title} passedAmount={subscriptions[2].amount} />
   </div>
  )
}

export default App;
