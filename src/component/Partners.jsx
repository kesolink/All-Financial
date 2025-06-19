import React, { useState } from 'react'
import "./Client.scss"
import { Link } from 'react-router-dom';
import value from "../assets/value.jpg";
import citidata from "../assets/citidata.jpg";
import protest from "../assets/protest.jpg"
import logic from "../assets/logic.jpg"
import dsgs from "../assets/dsgs.jpg"
function Partners() {

    const [hoveredLogo, setHoveredLogo] = useState(null);

    const clients = [
        {
          name: "Microbiz microfinance bank",
          description: "An innovative Digital Microfinance Bank",
          logo: citidata,
          url: "",
        },
        {
          name: "Honey Microfinance Bank",
          description: "Providing smart, secure, and flexible financial solutions for the digital age.",
          logo: value,
          url: "",
        },
        {
          name: "YCT Microfinance Bank",
          description: "Bringing fast, secure, and accessible digital banking to everyone.",
          logo: protest,
          url: "",
        },
        {
          name: "Molusi Microfinance Bank",
          description: "MFB providing grass root financial service",
          logo: logic,
          url: "",
        },

        {
          name: "YCT Microfinance Bank",
          description: "Bringing fast, secure, and accessible digital banking to everyone.",
          logo: dsgs,
          url: "",
        },
        // {
        //   name: "Molusi Microfinance Bank",
        //   description: "MFB providing grass root financial service",
        //   logo: molusi,
        //   url: "",
        // },
      ];
  return (
    <section className="client-showcase">
      <div className="container">
        <div className="header-section">
          <h2>Our Partners</h2>
          <p className="subtitle">
            Collaborating with industry leaders to deliver transformative solutions and mutual growth
          </p>
        </div>

        <div className="client-grid">
          {clients.map((client, index) => (
            <div
              key={client.name}         
              className="client-card"
              onMouseEnter={() => setHoveredLogo(index)}
              onMouseLeave={() => setHoveredLogo(null)}
            >
              <div className="card-inner">
                <div className="logo-container">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className={`client-logo ${hoveredLogo === index ? 'hovered' : ''}`}
                  />
                </div>
                <div className="client-info">
                  {/* <h3>{client.name}</h3> */}
                  {/* <p className="description">{client.description}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default Partners
