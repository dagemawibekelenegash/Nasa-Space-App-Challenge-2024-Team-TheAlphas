import { Link } from 'react-router-dom';
import './Help.css';

const Help = () => {
    return (
        <div className="help-container">
            <h2>Help</h2>
            <p>At Agri Flow, we are committed to providing farmers with all the support they need to maximize water resources and stay informed about extreme weather events. If you encounter any issues or have questions, we are here to help!</p>

            <h3>Common Issues:</h3>
            <ul>
                <li>
                    <strong>Data Accuracy:</strong> If you're seeing incorrect data or inconsistencies in the weather reports, please check your internet connection or contact us for further assistance.
                </li>
                <li>
                    <strong>Navigation Help:</strong> Can't find the features you're looking for? Use the top navigation bar to explore precipitation history, forecast data, and contact support.
                </li>
                <li>
                    <strong>Account Issues:</strong> Trouble logging in or signing up? Make sure your credentials are correct or reset your password.
                </li>
            </ul>

            <h3>Contact Us:</h3>
            <p>If you need further assistance, don't hesitate to reach out. We're here to help you with any problems or inquiries.</p>

            <Link to="/contact" className="contact-link">Need more help? Contact us</Link>
        </div>
    );
};

export default Help;
