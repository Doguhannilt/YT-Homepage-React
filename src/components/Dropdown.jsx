// Dropdown.jsx

import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <div className="profile-picture" onClick={handleToggle}>
        <img src={channelProfile} alt="Channel Profile" />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-item">Item 1</div>
          <div className="dropdown-item">Item 2</div>
          <div className="dropdown-item">Item 3</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
