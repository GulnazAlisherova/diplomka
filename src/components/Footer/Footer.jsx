import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="Footer">
          ©Copyright All rights reserved.
        <div className="icons">
         <div className="flex">
         <ul>
            <h3>Find us on:</h3>
            <li><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="https://www.twitter.com/"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://www.google.com/"><i class="fa-brands fa-google-plus-g"></i></a></li>
            <li><a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a></li>
          </ul>
          <div className="elcards">
          <ul>
            <h3>We accept:</h3>
            <li><i class="fa-brands fa-cc-apple-pay"></i></li>
            <li><i class="fa-brands fa-google-pay"></i></li>
            <li><i class="fa-brands fa-amazon-pay"></i></li>
            <li><i class="fa-brands fa-cc-paypal"></i></li>
            <li><i class="fa-brands fa-cc-visa"></i></li>
          </ul>
          </div>
        </div>
        </div>
          2022 Alisherova Gulnaz.
      </footer>

    </div>
  );
}
export default Footer; 