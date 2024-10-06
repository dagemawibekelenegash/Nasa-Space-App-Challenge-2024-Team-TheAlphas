import './Contact.css'; 

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-image"></div>
      <div className="contact-box">
        <h1>Contact Us</h1>
        <h5>Any questions or remarks? Just write us a message!</h5>
        <form className="contact-form">
          <label>First Name</label>
          <input type="text" placeholder="First Name" required />
          
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" required />
          
          <label>Email</label>
          <input type="email" placeholder="Email" required />
          
          <label>Phone Number</label>
          <input type="text" placeholder="Phone Number" required />
          
          <label>Message</label>
          <textarea placeholder="Write your message" required></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
