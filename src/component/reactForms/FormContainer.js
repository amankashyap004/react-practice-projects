import React from "react";

export default function FormContainer(props) {
   return (
      <div className="input-body">
         <input
            className="input"
            type="text"
            placeholder="First Name"
            onChange={props.change}
            name="firstName"
            value={props.firstNameValues}
         />
         <input
            className="input"
            type="text"
            placeholder="Last Name"
            onChange={props.change}
            name="lastName"
            value={props.lastNameValues}
         />
         <input
            className="input"
            type="email"
            placeholder="Email"
            onChange={props.change}
            name="email"
            value={props.emailValues}
         />

         {/* Textarea */}
         <textarea
            className="input"
            placeholder="Comments"
            onChange={props.change}
            name="comments"
            value={props.textareaValues}
         />

         {/* Checkbox */}
         <div className="checkbox">
            <input
               className="checkbox-input"
               type="checkbox"
               onChange={props.change}
               name="isFriendly"
               checked={props.checkedData}
            />
            <label htmlFor="isFriendly" className="label-text">
               Are you friendly
            </label>
         </div>

         {/* Radio Button */}
         <div>
            <fieldset className="input">
               <legend className="label-text">Current Employment Status</legend>
               <input
                  className="radio-button-input"
                  type="radio"
                  id="unemployed"
                  name="employment"
                  value="unemployed"
                  checked={props.radioButtonData === "unemployed"}
                  onChange={props.change}
               />
               <label htmlFor="unemployed" className="label-text">
                  Unemployed
               </label>
               <br />

               <input
                  className="radio-button-input"
                  type="radio"
                  id="part-time"
                  name="employment"
                  value="part-time"
                  checked={props.radioButtonData === "part-time"}
                  onChange={props.change}
               />
               <label htmlFor="part-time" className="label-text">
                  Part-time
               </label>
               <br />

               <input
                  className="radio-button-input"
                  type="radio"
                  id="full-time"
                  name="employment"
                  value="full-time"
                  checked={props.radioButtonData === "full-time"}
                  onChange={props.change}
               />
               <label htmlFor="full-time" className="label-text">
                  Full-time
               </label>
               <br />
            </fieldset>
         </div>

         {/* Select & Option */}
         <div className="select-and-option">
            <label htmlFor="favColor" className="label-text">
               What is your favorite color?
            </label>
            <br />
            <select
               className="input select-and-option-input"
               id="favColor"
               value={props.selectAndOptionValue}
               onChange={props.change}
               name="favColor"
            >
               <option value="">-- Choose --</option>
               <option value="red">Red</option>
               <option value="orange">Orange</option>
               <option value="yellow">Yellow</option>
               <option value="green">Green</option>
               <option value="blue">Blue</option>
               <option value="indigo">Indigo</option>
               <option value="violet">Violet</option>
            </select>
         </div>
         <button className="btn input form-btn">Submit</button>
      </div>
   );
}
