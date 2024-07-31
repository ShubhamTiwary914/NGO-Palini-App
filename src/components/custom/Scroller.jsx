"use client"
import React from 'react';

const Scroller = () => {
  return (
    <style jsx global>{`
      /* Width */
        ::-webkit-scrollbar {
          width: 4px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #e5e7eb; /* bg-gray-200 */
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #433c7f; /* rys-purple-600 */
        border-radius: 5px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #37326b; /* Slightly darker shade for hover effect */
      }

      /* For Firefox */
      * {
        scrollbar-width: thin;
        scrollbar-color: #433c7f #e5e7eb;
      }
    `}</style>
  );
};

export default Scroller;