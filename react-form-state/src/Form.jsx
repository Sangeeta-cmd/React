import {useState} from "react"

/** whenever dealing with form inputs that to be controlled by React state then 
 * always remember, (input element's name attribute's value === key name of the object specified as state variale )
*/

export default function Form(){
    let [formData, setFormData] = useState({
        fullName : "",
        userName : "",
        password : ""
    })

    // handling multiple inputs
    let handleInputForm = (event)=>{
        setFormData((currData)=>{    
            return {
                ...currData,
                [event.target.name] : event.target.value,    // computed property value --> when we want to pass variable value as key 
            }
        })
    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData)
        setFormData({
            fullName:"",
            userName:"",
            password:""
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name : </label>
            <input 
            type="text" placeholder = "input" 
            value = {formData.fullName} onChange={handleInputForm}
            id ="fullname" 
            name="fullName"/>
            <br /><br />
            <label htmlFor="username">UserName : </label>
            <input 
            type="text" placeholder = "input" 
            value = {formData.userName} onChange={handleInputForm}
            id ="username"
            name="userName" />
            <br />
            <label htmlFor="pwd">Password : </label>
            <input 
            type="password" placeholder = "input" 
            value = {formData.password} onChange={handleInputForm}
            id ="pwd"
            name="password" />
            <button>Submit</button>
        </form>
    )
}