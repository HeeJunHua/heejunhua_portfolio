import React from 'react';
import styled from 'styled-components';

const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <div className="loader">
        <div className="circle">
          <img src="/img/my_profile.jpg" alt="My Profile" className="profile-image" />
        </div>
      </div>
    </LoaderWrapper>
  );
};

export default Loader;
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;

  .loader {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    /* Default for mobile view */
    width: 120px;
    height: 120px;
  }

  .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1.5);
      opacity: 1;
    }
    50% {
      transform: scale(2); /* Slightly larger */
      opacity: 0.8; /* Slightly fade */
    }
  }

  /* Tablet view adjustments */
  @media (min-width: 768px) and (max-width: 1024px) {
    .loader {
      width: 180px;
      height: 180px;
    }

    .profile-image {
      width: 150px;
      height: 150px;
    }
  }

  /* Desktop view adjustments */
  @media (min-width: 1025px) {
    .loader {
      width: 240px;
      height: 240px;
    }

    .profile-image {
      width: 200px;
      height: 200px;
    }
  }
`;

