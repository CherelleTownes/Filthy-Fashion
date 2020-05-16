import React from 'react';
import styled from 'styled-components';
import ThreeStepsImage_1 from '../../assets/images/Three-Step-One.jpg';
import ThreeStepsImage_2 from '../../assets/images/Three-Step-Two.jpg';
import ThreeStepsImage_3 from '../../assets/images/Three-Step-Three.jpg';


const StyledThreeSteps = styled.section`
  height: 650px;
  width: 100%;
`;

const Label = styled.h1`
    font-size: 36px;
    text-align: center;
    padding-top: 77px;
    color: #8C1B1B;  
    font-weight: 300;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 60px;
  padding: 77px 29px 100px 29px;
  @media (max-width: 425px) {
    display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  padding: 77px 0 100px 0;
  }
`;

const ThreeStepsImages = styled.img`
  width: 100%;
`;

const TopText = styled.h2`
  font-size: 32px;
  font-weight: 300;
  text-align: center;
  padding-top: 25px;
  color: #8C1B1B; 
`;

const Vector = styled.hr`
  width: 400px;
  border: solid 1px #F2A2A2; 
`;

const BottomText = styled.p`
  font-size: 22px;
  font-weight: 300;
  text-align: center;
  color: #8C1B1B;
  padding-top: 10px;
`;

export default function ThreeSteps() {
  return (
    <StyledThreeSteps>
      <Label>Design Your Items in 3 Simple Steps</Label>
      <Grid>
        <div>
          <ThreeStepsImages src={ThreeStepsImage_1} />
          <TopText>Step 1</TopText>
          <Vector />
          <BottomText>Select the clothing item you would like designed. Select a dress, skirt, top, or bottoms(pants or shorts).</BottomText>
        </div>
        <div>
          <ThreeStepsImages src={ThreeStepsImage_2} />
          <TopText>Step 2</TopText>
          <Vector />
          <BottomText>Enter a detailed description of how you would like your item designed nd select a color. Would you like an ankle length, v-neck dress with long sleeves? Include your size!</BottomText>
          </div>
        <div>
          <ThreeStepsImages src={ThreeStepsImage_3} />
          <TopText>Step 3</TopText>
          <Vector />
          <BottomText>Submit your items! A designer will ship your items in 5 business days!</BottomText>
          </div>
      </Grid>

    </StyledThreeSteps>
  )
}