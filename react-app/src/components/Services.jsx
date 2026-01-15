const services = [
  {
    id: 1,
    icon: "🌐",
    title: "Web Development",
    description: "Modern, responsive websites built with the latest technologies",
  },
  {
    id: 2,
    icon: "📱",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
  },
  {
    id: 3,
    icon: "🎨",
    title: "UI/UX Design",
    description: "Beautiful, user-friendly interfaces that convert",
  },
  {
    id: 4,
    icon: "💡",
    title: "Consulting",
    description: "Strategic technology consulting for your business",
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <p className="services-desc">
        We offer a comprehensive range of services to help your business
        succeed in the digital world.
      </p>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
