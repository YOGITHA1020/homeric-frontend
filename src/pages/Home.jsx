import React, { useEffect, useState } from "react";
import axios from "axios";
import About from "./About";

const API_BASE = "https://homeric-back.onrender.com"; // Your deployed backend

const services = [
  { name: "Badminton", img: "https://www.shutterstock.com/image-photo/professional-tournament-badminton-court-nobody-600nw-615785603.jpg" },
  { name: "Football", img: "https://t4.ftcdn.net/jpg/14/89/88/47/360_F_1489884735_DoEPw66FWHumSPc9eTek1ECFJweHuVzw.jpg" },
  { name: "Cricket", img: "https://img.lovepik.com/bg/20240425/Experience-the-Beauty-of-a-Cricket-Pitch-and-Stadium-with_7256521_wh1200.jpg" },
  { name: "Club House", img: "https://5.imimg.com/data5/JB/GQ/MY-6826615/club-house-interior-designing-service.png" },
  { name: "Yoga Areas", img: "https://t3.ftcdn.net/jpg/02/95/26/88/360_F_295268830_1Oj2bdy00DneXBkf3CqiCeUYyYxyoIyg.jpg" },
  { name: "Swimming Pool Areas", img: "https://www.datconsultancy.com/_next/image?url=https%3A%2F%2Fapi.datconsultancy.com%2Fuploads%2F1593245692201-garden-swimming-pool-design-home-decorating-excellence-tierra-este_home-elements-and-style-min.jpg&w=3840&q=75" },
  { name: "Volleyball", img: "https://sportcourtoforegon.com/wp-content/uploads/2024/02/Sport-Court-of-Oregon-Outdoor-Volleyball-Court-Portland-Oregon-scaled.jpg" },
  { name: "Basketball", img: "https://offloadmedia.feverup.com/secrethouston.com/wp-content/uploads/2025/04/30042704/FotoJet-2025-04-30T112651.784.jpg" },
  { name: "Children’s Park", img: "https://i.ytimg.com/vi/NsuRrZTDfvE/maxresdefault.jpg" },
];

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showModal, setShowModal] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get(`${API_BASE}/api/projects`)
      .then(res => setProjects(res.data))
      .catch(err => console.error("Failed to fetch projects", err));

    axios.get(`${API_BASE}/api/cli`)
      .then(res => setClients(res.data))
      .catch(err => console.error("Failed to fetch clients", err));
  }, []);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE}/api/msg`, formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Failed to send message", err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-start pt-28 pb-6 px-6 bg-gradient-to-r from-[#a7f3d0] to-[#d9f99d] text-gray-800" id="home">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl text-blue-800 font-medium mb-2">Soul in the Sports</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3 text-gray-900 leading-tight">
            Building World-Class Sports Infrastructure
          </h1>
          <h2 className="text-lg md:text-xl text-gray-700 mb-5">
            For Every Space, Every Sport
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            From traditional courts to modern wellness zones, we create spaces where
            champions are born and communities thrive.
          </p>
          <div className="flex flex-wrap justify-center lg:flex-nowrap gap-4 px-4 py-2">
            <span className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow-md text-sm font-medium">✅ 20+ Years Experience</span>
            <span className="bg-red-500 text-white px-4 py-2 rounded-xl shadow-md text-sm font-medium">🏆 All Sports Coverage</span>
            <span className="bg-blue-400 text-white px-4 py-2 rounded-xl shadow-md text-sm font-medium">🔧 Complete Maintenance</span>
            <span className="bg-rose-500 text-white px-4 py-2 rounded-xl shadow-md text-sm font-medium">✔️ Quality Assured</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#a7f3d0] to-[#d9f99d]" id="services">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src={service.img} alt={service.name} className="w-full h-56 object-cover" />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

{/* Projects Section */}
<section className="py-16 px-6 bg-gradient-to-r from-[#a7f3d0] to-[#d9f99d]" id="projects">
  <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Projects</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {projects.map((project) => {
      const { title, location, type, images } = project;
      return (
        <div key={project._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
          <div className="overflow-x-auto whitespace-nowrap scroll-smooth px-2 pt-2 pb-3">
            {images?.map((img, idx) => {
              const imageUrl = img.startsWith("http")
                ? img
                : `${API_BASE}/uploads/${img}`;
              return (
                <img
                  key={idx}
                  src={imageUrl}
                  alt={`${title} ${idx + 1}`}
                  className="inline-block w-60 h-40 object-cover rounded mr-2 cursor-pointer"
                  onClick={() => {
                    setCurrentImages(images);
                    setCurrentIndex(idx);
                    setShowModal(true);
                  }}
                />
              );
            })}
          </div>
          <div className="p-5 text-center">
            <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
            <p className="text-sm text-gray-500">{location} • {type}</p>
          </div>
        </div>
      );
    })}
  </div>

  {/* Image Modal */}
  {showModal && (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center"
      onClick={() => setShowModal(false)}
    >
      <div
        className="relative max-w-4xl w-full px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={
            currentImages[currentIndex].startsWith("http")
              ? currentImages[currentIndex]
              : `${API_BASE}/uploads/${currentImages[currentIndex]}`
          }
          alt="Preview"
          className="w-full max-h-[80vh] object-contain rounded-lg"
        />
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev > 0 ? prev - 1 : currentImages.length - 1
            )
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl font-bold"
        >
          ‹
        </button>
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev < currentImages.length - 1 ? prev + 1 : 0
            )
          }
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl font-bold"
        >
          ›
        </button>
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-3 text-white text-3xl"
        >
          ×
        </button>
      </div>
    </div>
  )}
</section>
{/* Clients Section */}
{/* Clients Section */}
<section className="py-16 px-6 bg-gradient-to-r from-[#a7f3d0] to-[#d9f99d]" id="clients">
  <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Clients</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {clients.map((client) => (
      <div
        key={client._id}
        className="bg-white rounded-xl shadow-md p-5 text-center flex flex-col items-center hover:scale-105 transition-transform duration-300"
      >
        {client.image && (
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 mb-2">
            <img
              src={client.image}
              alt={client.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h3 className="text-lg font-semibold text-gray-800 mt-2 break-words">
          {client.name}
        </h3>
      </div>
    ))}
  </div>
</section>


      {/* Contact Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#a7f3d0] to-[#d9f99d]" id="contacts">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6 w-full">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="5" placeholder="Your message..." required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">Send Message</button>
          </form>

          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Why Choose Homeric IND?</h3>
            <ul className="space-y-4 text-gray-700 text-base">
              <li className="flex items-start gap-3"><span className="text-green-500 text-xl">✔️</span> 20+ Years of Sports Field Expertise</li>
              <li className="flex items-start gap-3"><span className="text-green-500 text-xl">✔️</span> Specialized in Badminton, Tennis, Yoga Areas, and More</li>
              <li className="flex items-start gap-3"><span className="text-green-500 text-xl">✔️</span> End-to-End Maintenance & Modern Designs</li>
              <li className="flex items-start gap-3"><span className="text-green-500 text-xl">✔️</span> Trusted by Schools, Townships & Clubs</li>
              <li className="flex items-start gap-3"><span className="text-green-500 text-xl">✔️</span> Quality Work. On-Time Delivery. Client Satisfaction.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">Homeric IND Sports Management</h3>
            <p>Email: <a href="mailto:homericindsm@gmail.com" className="text-blue-300 hover:underline">homericindsm@gmail.com</a></p>
            <p>Contact: <a href="tel:+919876543210" className="text-blue-300 hover:underline">+91 98765 43210</a></p>
            <p className="text-green-300 mt-2 italic">We also provide expert coaches on request.</p>
          </div>
          <div>
            <p>Follow us on:</p>
            <a href="https://instagram.com/homericind_sports" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">@homericind_sports</a>
          </div>
        </div>
        <p className="mt-6 text-sm text-gray-400 text-center">© {new Date().getFullYear()} Homeric IND. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
