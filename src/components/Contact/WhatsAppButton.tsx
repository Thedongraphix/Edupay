"use client";
import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "254797872622";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="white"
        >
          <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.88 11.94L4 21l5.23-1.34A8.1 8.1 0 0 0 12.05 20a7.93 7.93 0 0 0 5.55-13.68ZM12.05 18.53a6.7 6.7 0 0 1-3.38-.92l-.24-.15-2.54.66.67-2.46-.16-.25a6.52 6.52 0 0 1-1.02-3.47 6.46 6.46 0 0 1 6.67-6.43c1.78 0 3.47.7 4.72 1.95a6.49 6.49 0 0 1 1.96 4.72 6.46 6.46 0 0 1-6.68 6.35Zm3.61-4.8c-.2-.1-1.17-.57-1.35-.64-.18-.06-.31-.1-.45.1-.13.2-.5.64-.62.77-.11.13-.23.15-.43.05a5.47 5.47 0 0 1-2.68-2.33c-.21-.33.2-.31.58-1.04.06-.13.03-.25-.02-.34-.05-.1-.45-1.08-.62-1.47-.16-.38-.32-.33-.45-.33-.11 0-.25-.02-.38-.02a.73.73 0 0 0-.53.25c-.18.2-.7.68-.7 1.66s.71 1.93.81 2.06c.1.13 1.4 2.13 3.4 2.99.47.2.84.33 1.13.42.48.15.91.13 1.25.08.38-.06 1.17-.48 1.33-.94.17-.46.17-.85.12-.93-.05-.1-.18-.15-.38-.25Z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton; 