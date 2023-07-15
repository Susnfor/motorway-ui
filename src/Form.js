import React from 'react';
import './form.css';

const Form = () => {
    return ( 
        <div className='Form'>
            <div className='form-container'> 
            <h1>Want a Car?</h1>
            <p>Fill out this form for a chance to get one</p>
         <form action="mailto:unknown">
        <input name="name" type="text" className="feedback-input" placeholder="Name" />   
        <input name="email" type="text" className="feedback-input" placeholder="Email" />
        <input type="date" id="birthday" className="feedback-input" name="birthday"/>
        <label for="color" className='feedback-input'>Pick your favourite car colour <input type="color" /> </label>
        <select id="salary" name="salary" className="feedback-input" > 
            <option>What is your salary?</option>
            <option>£0-£1</option>
            <option>£2-£3</option>
            <option>£3-£4</option>
            <option>£4-£5</option>
        </select>
        <input type="submit" value="SUBMIT"/>

      </form>
            </div>
    </div>
    );
}
 
export default Form;