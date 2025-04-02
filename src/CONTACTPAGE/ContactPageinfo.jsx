import React from "react";
import "./ContactPageinfo.css"

const ContactPageinfo = () => {
  return (
    <>
      <div className="ContactContainer">
        <div className="Contact">
          <div className="contactInformation">
            <h1>CONTACT US</h1>
            <ul>
              <li>
                <h4>Address</h4>
                <h5>No 10 Dollarfill Oriokuta Agric Ikorodu</h5>
              </li>
              <li>
                <h4>Tell</h4>
                <h5>08137577286</h5>
              </li>
              <li>
                <h4>Cell</h4>
                <h5>09022542838(Owuama chuks)</h5>
              </li>
              <li>
                <h4>Email</h4>
                <h5>Goldstarz845@gmail.com</h5>
              </li>
              <li>
                <h4>Web</h4>
                <h5>www.naijawings.com</h5>
              </li>
            </ul>
          </div>
          <div className="contactForm">
            <form action="">
              <h1>Quick Inquiry</h1>
              <input
                type="text"
                name=""
                id=""
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Email Address"
                required
              />
              <input type="tel" name="" id="" placeholder="Phone No" />
              <textarea
                name=""
                id=""
                style={{
                  width: "70%",
                  height: "100px",
                  outline: "transparent",
                }}
              ></textarea>
              <input type="submit" name="" id="" />
            </form>
          </div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d74227.82627469373!2d3.4499666100851543!3d6.639237174924724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1soriokuta%20ikorodu!5e0!3m2!1sen!2sng!4v1740976918526!5m2!1sen!2sng"
              width={"100%"}
              height={550}
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPageinfo;
