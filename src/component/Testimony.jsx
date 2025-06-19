import "./Testimony.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Testimony = () => {
  const testimonials = [
    {
      id: 1,
      name: "Florence Ogubanjo",
      position: "MD, Honey Mfb",
      company: "TechVision Global",
      image:
        "https://public.readdy.ai/ai/img_res/6e8ae144fbdae1474d3a2119aee8a8e3.jpg",
      text: "The team has a very responsive support system.",
      rating: 5,
      date: "2025-03-20",
    },
    {
      id: 2,
      name: "Olumide Gbadebo",
      position: "CEO at InnovateNow",
      company: "InnovateNow",
      image:
        "https://public.readdy.ai/ai/img_res/348611da9b0d451fd9eb9d7d68e8f847.jpg",
      text: "Outstanding service and attention to details. Their wealth management strategies have helped us secure our financial future. The personalized approach makes all the difference.",
      rating: 5,
      date: "2025-03-18",
    },
    {
      id: 3,
      name: "oluwadamilare olatunji",
      position: "Director of Operations",
      company: "Future Dynamics",
      image:
        "https://public.readdy.ai/ai/img_res/d1db3239af0cc4ee58273028e6a7f3d9.jpg",
      text: "The investment insights and portfolio management have exceeded our expectations. We've seen consistent growth and excellent risk management.",
      rating: 5,
      date: "2025-03-15",
    },
    {
      id: 4,
      name: "Agnes Okeoma",
      position: "Founder",
      company: "Quantum Solutions",
      image:
        "https://public.readdy.ai/ai/img_res/b28148933415692ce3dbd2f3ba54db33.jpg",
      text: "Their financial planning services have been transformative for our business. The team's proactive approach and deep market knowledge are truly exceptional.",
      rating: 5,
      date: "2025-03-12",
    },
    {
      id: 5,
      name: "Busola Osinaike",
      position: "Investment Director",
      company: "Asia Pacific Holdings",
      image:
        "https://public.readdy.ai/ai/img_res/6f96bc065e786b0bdd6b8cbdd67e9df3.jpg",
      text: "The comprehensive financial solutions and dedicated support have helped us navigate complex market conditions with confidence.",
      rating: 5,
      date: "2025-03-10",
    },
    {
      id: 6,
      name: "James Ubokobong",
      position: "Managing Partner",
      company: "Wilson & Associates",
      image:
        "https://public.readdy.ai/ai/img_res/d9326b910d2075d3dc64cbb5d094abec.jpg",
      text: "Exceptional service quality and professional expertise. Their strategic financial guidance has been crucial to our long-term success.",
      rating: 5,
      date: "2025-03-08",
    },
  ];

  return (
    <div className="testimonial-section">
      <div className="section-heading">
        <h2>What Our Clients Say</h2>
        <p>Real feedback from our valued clients</p>
        <div className="divider">
          <div className="line"></div>
          <FontAwesomeIcon icon={faQuoteRight} className="quote-icon" />
          <div className="line"></div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="card-header">
              <h3>{testimonial.name}</h3>
              {/* <img src={testimonial.image} alt={testimonial.name} /> */}
              {/* <div className="user-info">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.position}</p>
              </div> */}
            </div>

            <div className="card-content">
              <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
              <p>{testimonial.text}</p>
            </div>

            {/* <div className="card-footer">
              <div className="stars">{renderStars(testimonial.rating)}</div>
              <div className="verified">
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Verified</span>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimony;
