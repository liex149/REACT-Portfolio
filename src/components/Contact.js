import React from "react";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
  
    function encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }
  
    function handleSubmit(e) {
      
      e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));
    }


  return (
    <div>
    <section id = 'contact' >
      <div >
        <div >
         
      
          <div >
            
            <div >
              <h6 >
                EMAIL: lienx149@gmail.com
              </h6>
             
              <h6 >
                PHONE: 555-555-5555
              </h6>
              
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          >
          <h6 >
            Contact: Want to get in touch? Fill out this form to send me a message.
          </h6>
     
          <div >
            <label >
              Name
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </div>
          <div >
            <label >
              Email
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div >
            <label
             >
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter message"
            />
          </div>
          <button
            type="submit"
           >
            Submit
          </button>
        </form>
      </div>
    </section>
    </div>
  );
}