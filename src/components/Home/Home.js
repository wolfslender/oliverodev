// Home.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Home.css';

const Home = () => {
  const containerSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div className="home" style={containerSpring}>
      <div className="background-container"></div>
      <div className="overlay"></div>
      <div className="content">
        <h1>Bienvenidos a Mi Portfolio</h1>
        <p>Soy un apasionado desarrollador web con más de 6 años de experiencia, especializado en crear soluciones web innovadoras y atractivas.</p>
      </div>
    </animated.div>
  );
}

export default Home;
