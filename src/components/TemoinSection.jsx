import "../styles/TemoinSection.css";
import profile from "../assets/profile.png";

const TemoinSection = () => {
  return (
    <section className="temoin-section" id="">
      <div className="temoin-container">
        <div className="temoin-row">
          <div className="temoin-col-left">
            <span className="subtitle">TÉMOIGNAGES</span>
            <h3>Retours de nos utilisateurs</h3>

            <div className="dots-container">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

          <div className="temoin-col-right">
            <div className="testimonial-card">
              <img
                src={profile}
                alt="profile"
                className="profile-img-overlap"
              />
              <p>"Une expertise en conseils de vie impressionnante... 🌟"</p>
            </div>

            <div className="testimonial-card">
              <h5>RANDRIAVAO Selon</h5>
              <p>"Student"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemoinSection;
