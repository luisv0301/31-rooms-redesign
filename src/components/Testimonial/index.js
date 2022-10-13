import testimonial from "../../images/testimonial-photo.png";
import start from "../../images/start.png";
import "./testimonial.scss";

export default function Testimonial() {
  return (
    <div className="testimonial">
      <img src={testimonial} alt="" width="136" height="136" />
      <div className="testimonial__description">
        <div className="testimonial__header">
          <h3>Rafael Nadal</h3>
          <p className="testimonial__subtitle">CEO en inmueble azul</p>
        </div>
        <p>
          “ The team's workflow was effective and seamlessly blended with the
          company's internal team. The feedback from users is overwhelmingly
          positive.”
        </p>
        <div className="testimonial__starts">
          <img src={start} alt="" width="160" height="160" />
          <img src={start} alt="" width="160" height="160" />
          <img src={start} alt="" width="160" height="160" />
          <img src={start} alt="" width="160" height="160" />
          <img src={start} alt="" width="160" height="160" />
        </div>
      </div>
    </div>
  );
}
