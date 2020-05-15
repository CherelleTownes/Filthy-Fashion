import React from 'react';
import styled from 'styled-components';
import Testimonialimage from '../../assets/images/Testimonialimage.jpg';

const StyledTestimonials = styled.section`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-column-gap: 25px;
  padding: 30px 0;
`;

const Label = styled.h1`
  font-size: 32px;
  text-align: center;
  padding-top: 100px;
  font-weight: 300;
  color: #8C1B1B;
`;
const TestimonialsText = styled.h3`
  font-size: 28px;
  font-style: italic;
  font-weight: 200;
  text-align: center;
  padding-top: 75px;
  padding-left: 20px;
  color: #8C1B1B;
`;

const TestimonialsImg = styled.img`
  height: 700px;
  border-radius: 20px;
`;



export default function Testimonials() {
  return (
    <StyledTestimonials>
      <div>
      <Label>Testimonials!</Label>
      <TestimonialsText>"The process was so simple! Sometimes I want something so simple and can't find it anywhere. It's nice to have someone create exactly what I want and send it right to my doorstep!"</TestimonialsText>
      </div>
      <TestimonialsImg src={Testimonialimage} />
    </StyledTestimonials>

  )

}