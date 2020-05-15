import React from 'react';
import styled from 'styled-components';
import Hero from '../Hero'
import ThreeSteps from '../ThreeSteps';
import StartDesign from '../StartDesign';
import Testimonials from '../Testimonials';





export default function Homepage() {
  return (
    <>
    <Hero />
    <ThreeSteps />
      <StartDesign />
      <Testimonials />
      </>
  );
}