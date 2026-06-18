import '../styles/ServiceTitle.css';

const ServiceTitle = ({ title, description }) => {
  return (
    <section className="service-section">
      <div className="service-container">
        <div className="service-title-container">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceTitle;