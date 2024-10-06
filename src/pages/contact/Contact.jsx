import './Contact.css'; 

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <h5>Any questions or remarks? Just write us a message!</h5>
      <h3>Contact Information</h3>
      <h5>Say something to start a live chat</h5>
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
  );
}
