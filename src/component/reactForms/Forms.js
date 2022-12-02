import React from "react";
import FormContainer from "./FormContainer";

export default function Forms() {
   const [formData, setFormData] = React.useState({
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isFriendly: true,
      employment: "",
      favColor: "",
   });

   function handleChange(event) {
      const { name, value, type, checked } = event.target;

      setFormData((prevFormData) => {
         return {
            ...prevFormData,
            // [event.target.name]: event.target.value,

            [name]: type === "checkbox" ? checked : value,
         };
      });
   }
   function handleSubmit(event) {
      event.preventDefault();
      // submitToApi(formData)
      console.log(formData);
   }

   return (
      <div className="container">
         <section className="forms-container">
            <h3 className="heading">React Forms</h3>
            <div className="forms-contain-body">
               <form onSubmit={handleSubmit}>
                  <FormContainer
                     change={handleChange}
                     firstNameValues={formData.firstName}
                     lastNameValues={formData.lastName}
                     emailValues={formData.email}
                     textareaValues={formData.comments}
                     checkedData={formData.isFriendly}
                     radioButtonData={formData.employment}
                     selectAndOptionValue={formData.favColor}
                  />
               </form>
            </div>
         </section>
      </div>
   );
}
