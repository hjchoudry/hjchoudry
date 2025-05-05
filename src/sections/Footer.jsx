import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div> */}
        <div className="socials">
          {socialImgs.map((social, index) => (
            <a href={social.link} target="_blank" key={index}>
              <div className="icon">
                <img
                  src={social.imgPath}
                  alt="social icon"
                  style={{
                    width: "28px",
                    height: "28px",
                  }}
                />
              </div>
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Husnain Javed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
