// components/Loader/loader.tsx
import React from 'react';


const Loader: React.FC = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Loader;
