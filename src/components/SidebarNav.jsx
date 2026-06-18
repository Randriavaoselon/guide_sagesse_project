import { FaHome, FaServicestack, FaInfoCircle, FaEnvelope, FaHandshake } from 'react-icons/fa';
import '../styles/SidebarNav.css';

const SidebarNav = () => {
  const menuItems = [
    { name: 'Accueil', icon: <FaHome /> },
    { name: 'Services', icon: <FaServicestack /> },
    { name: 'Apropos', icon: <FaInfoCircle /> },
    { name: 'Partenaires', icon: <FaHandshake /> },
    { name: 'Contact', icon: <FaEnvelope /> },
];

  return (
    <nav className="sidebar-nav">
      {menuItems.map((item) => (
        <a key={item.name} href={`#${item.name.toLowerCase()}`} className="sidebar-link" title={item.name}>
          <span className="icon">{item.icon}</span>
        </a>
      ))}
    </nav>
  );
};

export default SidebarNav;