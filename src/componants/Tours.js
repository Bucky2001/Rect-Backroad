import React from 'react';
import { ourTours } from '../data';
import Title from './Title';
import Tour from './Tour';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="our" subTitle="tours" />

      <div className="section-center featured-center">
        {ourTours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
