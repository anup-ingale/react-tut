import './FormSubscription.css'
import {useState} from "react";

const FormSubscription = (props) => {
    const [Form,SetForm] = useState({userTitle:'Enter Subscription Name',userDate:'',userAmount:'Enter Amount'})
    // const [userTitle,setUserTitle]   = useState("");
    // const [userDate,setUserDate]     = useState("");
    // const [userAmount,setUserAmount] = useState("");

    const titleChangeHandler = (events) => {
        SetForm((prevState)=> { return {...prevState,userTitle: events.target.value}})
    }
    const dateChangeHandler =(events) =>{
        SetForm((prevState)=> { return {...prevState,userDate: events.target.value}})
    }
    const amountChangeHandler =(events)=>{
        SetForm((prevState)=> { return {...prevState,userAmount: events.target.value}})
    }
    const submitHandler =(events)=> {
        events.preventDefault()
        const Subscription = {title:Form.userTitle,date:new Date(Form.userDate),amount:Form.userAmount}
        props.onSave(Subscription)
    }
    return (
      <form className="form-subscription" onSubmit={submitHandler}>
            <div className="form-controls">
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" placeholder="Enter title" value={Form.userTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="form-control">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" value={Form.userDate} onChange={dateChangeHandler}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" min="10" placeholder="Enter amount" value={Form.userAmount} onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className="form-button">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}
export default FormSubscription;