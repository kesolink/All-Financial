import React, { useState } from 'react'
import "./Client.scss"
import { Link } from 'react-router-dom';
import YTC from "../assets/YCT.jpg";
import HMFB from "../assets/HMFB.jpg";
import molusi from "../assets/molusi-logo.jpg"
function Client() {

    const [hoveredLogo, setHoveredLogo] = useState(null);

    const clients = [
        {
          name: "Microbiz microfinance bank",
          description: "An innovative Digital Microfinance Bank",
          logo: "data:image/png;base64,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",
          url: "",
        },
        {
          name: "Honey Microfinance Bank",
          description: "Providing smart, secure, and flexible financial solutions for the digital age.",
          logo: HMFB,
          url: "",
        },
        {
          name: "YCT Microfinance Bank",
          description: "Bringing fast, secure, and accessible digital banking to everyone.",
          logo: YTC,
          url: "",
        },
        {
          name: "Molusi Microfinance Bank",
          description: "MFB providing grass root financial service",
          logo: molusi,
          url: "",
        },
      ];
  return (
    <section className="client-showcase">
      <div className="container">
        <div className="header-section">
          <h2>Our Trusted Clients</h2>
          <p className="subtitle">
            Partnering with industry leaders to deliver exceptional solutions and drive innovation forward
          </p>
        </div>

        <div className="client-grid">
          {clients.map((client, index) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
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
                  <h3>{client.name}</h3>
                  <p className="description">{client.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="cta-section">
          <p className="cta-text">
            Join rusted clients companies already growing with us
          </p>
          <Link to="/contact"><button className="cta-button">
            Become Our Partner
          </button></Link>
        </div>
      </div>
    </section>
  )
}

export default Client





// {videoUrlSelected ? (
//     <JWPlayer
//       library="https://cdn.jwplayer.com/libraries/HT7Dts3H.js" // Updated library
//       licenseKey="6A187VGxhSB65jBlTtuEk7U0pu+jYZ21fZE9AOU/d6CSMV2b" // Verify key validity
//       playlist={[
//         {
//           file: videoUrlSelected,
//           image: spkvideo?.thumbnail_url,
//         },
//       ]}
//       playbackRateControls={true}
//       autostart={false}
//       aspectRatio="16:9"
//       customProps={{
//         hlsjsConfig: {
//           debug: true, // Enable HLS.js debugging
//           capLevelToPlayerSize: true, // Auto quality adjustment
//         },
//       }}
//     />
//   ) : (
//     <div className="video-loader">
//       <ImSpinner9 className="spinner" />
//     </div>
//   )}


// import JWPlayer from "@jwplayer/jwplayer-react";