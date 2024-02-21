// Home.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Home.css';

const Home = () => {
  const containerSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const titleSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const textSpring = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -20 },
  });

  return (
    <animated.div className="home" style={containerSpring}>
      <div className="background-container">
        {/* Puedes agregar estilos específicos para el fondo aquí */}
      </div>
      <div className="overlay"></div>
      <div className="content">
        <animated.h2 style={titleSpring}>Bienvenido a mi sitio web</animated.h2>
        <animated.p style={textSpring}>
          Soy un desarrollador web con más de 6 años de experiencia, especializado en crear soluciones web innovadoras y atractivas.
        </animated.p>
      </div>
    </animated.div>
  );
}

export default Home;
