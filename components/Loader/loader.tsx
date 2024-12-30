import React from 'react';
import styled from 'styled-components';

const Loader: React.FC = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <div className="circle">
          <img src="/img/my_profile.jpg" alt="My Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
