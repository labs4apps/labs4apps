// components/Services.js
import Image from 'next/image';

const services = [
  { title: "Web Development", icon: "/_static/webdev-service.png" },
  { title: "Mobile Development", icon: "/_static/mobile-service.png" },
  { title: "Cybersecurity", icon: "/_static/cybersec-service.png" },
  { title: "Cloud Solutions", icon: "/_static/cloud-service.png" },
];

export function Services() {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          We work with enterprises, organizations, and businesses from various industries, helping them create and launch products that are used by thousands of customers around the world.
        </p>
      </div>

      <div className="services-grid">
        <div className="main-service">
          <div className="main-service-icon">
            <Image src="/_static/digital-service.png" alt="Digital Products & Engineering" width={100} height={100} />
          </div>
          <h3>Digital Products & Engineering</h3>
          <p>
            Security is a key factor for success. We will help you embrace cyber security and achieve success in this field.
          </p>
        </div>

        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              <Image src={service.icon} alt={service.title} width={50} height={50} />
            </div>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
