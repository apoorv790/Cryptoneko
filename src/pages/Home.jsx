import React from 'react';
import Hero from '../components/Hero';
import footerImage from '../assets/footer.webp';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="flex justify-center mt-8"> 
        <img src={footerImage} alt="Footer" className="w-full max-w-md" /> 
      </div>
    </div>
  );
};

export default Home;
