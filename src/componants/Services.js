import React from 'react';
import { ourServices } from '../data';
import Title from './Title';
import Service from './Service';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {ourServices.map((serv) => {
          return <Service key={serv.id} {...serv} />;
        })}
      </div>
    </section>
  );
};
export default Services;
