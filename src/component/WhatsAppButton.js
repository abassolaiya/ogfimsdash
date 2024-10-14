import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const CustomFloatingWhatsApp = ({ phoneNumber, message }) => {
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '120px',
      right: '30px',
      zIndex: 1000
    }}>
      {/* Tooltip that appears on hover */}
      {hover && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          right: '-20px',
          backgroundColor: '#000',
          color: '#fff',
          padding: '5px 10px',
          borderRadius: '5px',
          whiteSpace: 'nowrap',
          fontSize: '12px',
          boxShadow: '2px 2px 3px #999',
        }}>
          Chat with us on WhatsApp
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: '#25D366',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '2px 2px 3px #999',
          position: 'relative'
        }}
      >
        <FaWhatsapp size={30} />
      </button>
    </div>
  );
};

export default CustomFloatingWhatsApp;
