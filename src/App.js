import './App.css';
import Subscription from './components/Subscription/Subscription'
import Container from './components/templates/Container';
import React from 'react';



const App =()=> {
  let subscriptions = [
    {
      id:"1",
      date:(new Date("2021", "04", "23")),
      title:"Quaterly Plan",
      amount:"125.25"
    },
    {
      id:"2",
      date:(new Date("2021", "05", "25")),
      title:"Monthly Plan",
      amount:"225.25"
    },
    {
      id:"3",
      date:(new Date("2021", "06", "25")),
      title:"Yearly Plan",
      amount:"850.25"
    },
  ]

  return (
    // React.createElement('div',{},React.createElement('h2',{},"Let's Start !! "))
    <Container>
      <Subscription date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount} />
      <Subscription date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount} />
      <Subscription date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount} />
   </Container>
  )
}

export default App;
