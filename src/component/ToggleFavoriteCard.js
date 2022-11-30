import React from "react";

export default function ToggleFavoriteCard() {
   const [contact, setContact] = React.useState({
      firstName: "Mr.",
      lastName: "Bean",
      phone: "+1 (719) 555-1212",
      email: "itsmyrealname@example.com",
      isFavorite: true,
   });

   let starIcon = contact.isFavorite ? "star-empty.png" : "star-filled.png";

   function toggleFavorite() {
      setContact((prevContact) => {
         return {
            //    isFavorite : !prevContact.isFavorite   // problem
            ...prevContact,
            isFavorite: !prevContact.isFavorite,
         };
      });
   }

   return (
      <div className="container">
         <section className="toggle-favorite-card">
            <h3 className="heading">Toggle Favorite Card</h3>
            <section className="toggle-favorite-card-contain">
               <div className="toggle-favorite-card-img">
                  <img src="./img/mr-bean.png" />
               </div>
               <div className="toggle-favorite-card-contact">
                  <div className="toggle-favorite-card-favorite-icon">
                     <img src={`./img/${starIcon}`} onClick={toggleFavorite} />
                  </div>
                  <h3 className="heading toggle-favorite-card-name">
                     {contact.firstName} {contact.lastName}
                  </h3>
                  <div className="toggle-favorite-card-detail-section">
                     <p>{contact.phone}</p>
                     <p>{contact.email}</p>
                  </div>
               </div>
            </section>
         </section>
      </div>
   );
}
