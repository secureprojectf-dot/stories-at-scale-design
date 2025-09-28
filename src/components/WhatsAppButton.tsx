// WhatsAppButton.js

import React from 'react';

// The SVG icon is now a small component defined inside the same file.
const WhatsAppIcon = () => {
  return (
    <svg
      height="28" // Optimized size for the button
      width="28"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor" // Inherits the text color (white) from the button
    >
      <path
        d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.77.46 3.45 1.28 4.95L2 22l5.17-1.4c1.45.75 3.08 1.15 4.83 1.15 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zM12.04 20.1c-1.63 0-3.18-.43-4.51-1.2L7.3 18.78l-3.32.9.92-3.23-.23-.26c-.84-1.38-1.3-3.02-1.3-4.75 0-4.5 3.63-8.13 8.13-8.13 4.5 0 8.13 3.63 8.13 8.13 0 4.5-3.64 8.13-8.13 8.13zm4.43-5.93c-.24-.12-1.44-.71-1.66-.79-.23-.08-.39-.12-.56.12-.17.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2s-1.4-1.74-1.58-2.03c-.18-.29-.01-.45.11-.56.1-.1.24-.28.35-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.56-1.34-.76-1.84c-.2-.48-.4-.42-.55-.42h-.48c-.16 0-.42.06-.63.3s-.7.68-.7 1.68c0 1 .73 1.95.83 2.09.1.14 1.44 2.2 3.49 3.08.49.21.87.33 1.18.42.5.14.94.12 1.3.08.39-.04 1.2-.49 1.37-1.18.17-.68.17-1.26.12-1.38-.05-.12-.19-.18-.42-.3z"
      />
    </svg>
  );
};

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // --- IMPORTANT ---
    // Replace this with your actual WhatsApp number, including the country code without the '+'
    const phoneNumber = "1234567890"; 
    
    const message = encodeURIComponent("Hi! I'm interested in your services.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#1DAE58] hover:shadow-xl"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsAppIcon />
        <div className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Chat with us
        </div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
