import React from 'react'
import "./Point.scss"
// import img from "../assets/key-point.png"
// function Point() {
//   return (
//     <div className='point-container'>
//         <img src={img} alt="" />
//     </div>
//   )
// }

// export default Point



// import React from 'react';
// import './services-section.scss';

const Point = () => {
  const services = [
    { name: "CRM", color: "cyan-gradient", icon: "👥", description: "Customer Relationship Management" },
    { name: "Securities", color: "teal-gradient", icon: "🛡️", description: "Security & Compliance" },
    { name: "KYC", color: "gray-gradient", icon: "✓", description: "Know Your Customer" },
    { name: "Loans & Mortgages", color: "green-gradient", icon: "🏠", description: "Financing Solutions" },
    { name: "Integration", color: "light-cyan-gradient", icon: "🔗", description: "System Integration" },
    { name: "Esusu/Thrift", color: "light-teal-gradient", icon: "💰", description: "Cooperative Banking" },
    { name: "Past Due", color: "yellow-gradient", icon: "⚠️", description: "Payment Management" },
    { name: "Deposits", color: "dark-yellow-gradient", icon: "🏦", description: "Deposit Services" },
    { name: "Messaging", color: "dark-green-gradient", icon: "💬", description: "Communication Hub" },
    { name: "Teller", color: "gray-gradient", icon: "👤", description: "Teller Operations" },
    { name: "Reports", color: "orange-gradient", icon: "📊", description: "Analytics & Reports" },
    { name: "Products", color: "green-gradient", icon: "📦", description: "Product Management" },
    { name: "Funds Transfers", color: "cyan-gradient", icon: "💸", description: "Money Transfer" },
    { name: "Accounts", color: "light-cyan-gradient", icon: "📋", description: "Account Management" }
  ];

  return (
    <section className="services-section">
      <div className="background-decoration"></div>
      <div className="pulse-circle top-left"></div>
      <div className="pulse-circle bottom-right"></div>
      
      <div className="container">
        <div className="header-section">
          <div className="icon-container">
            <div className="inner-circle">
              <div className="dot"></div>
            </div>
          </div>
          <h2>All-Financial</h2>
          <p className="subtitle">Complete Financial Ecosystem</p>
          <div className="divider"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* <div className="central-hub">
            <div className="rotating-ring"></div>
            <div className="main-hub">
              <div className="pulse-overlay"></div>
              <div className="inner-circle">
                <div className="core"></div>
              </div>
              {[...Array(12)].map((_, i) => (
                <div key={i} className="gear-tooth"></div>
              ))}
            </div>
            <div className="pulse-ring"></div>
            <div className="pulse-ring delay-1s"></div>
          </div> */}
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={service.name} className="service-card">
                <div className="gradient-overlay"></div>
                <div className="card-content">
                  <div className={`icon-container ${service.color}`}>
                    <span className="icon">{service.icon}</span>
                  </div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="bottom-border"></div>
                <div className="particle top-right"></div>
                <div className="particle bottom-left"></div>
              </div>
            ))}
          </div>
          
          <div className="connection-lines">
            <svg>
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6"/>
                  <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
              {[...Array(8)].map((_, i) => (
                <line
                  key={i}
                  x1="50%"
                  y1="20%"
                  x2={`${30 + (i * 10)}%`}
                  y2={`${60 + (i * 5)}%`}
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Point;