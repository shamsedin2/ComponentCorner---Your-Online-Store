import "./Footer.css";

const Footer = ({ email, phone }) => {
  return (
    <footer className="footer">
      <p>ComponentCorner</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </footer>
  );
};

export default Footer;
