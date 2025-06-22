import React from "react";
import styled from "styled-components";
import PhotoCard from "./components/PhotoCard";
import sampleImage from "./assets/sample.png";

const MainSection = styled.main`
  padding: 40px 20px;
  text-align: center;
`;

const Intro = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 12px;
`;

const LeadText = styled.p`
  color: #666;
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;

  &.primary {
    background-color: #007bff;
    color: white;
  }

  &.secondary {
    background-color: #e0e0e0;
    color: black;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

export default function Home() {
  const cards = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    image: sampleImage,
    title: `Photo ${i + 1}`,
    text: "귀여운 강아지",
  }));

  return (
    <MainSection>
      <Intro>
        <Title>Album example</Title>
        <LeadText>
          사진과 간단한 설명
        </LeadText>
        <ButtonGroup>
          <Button className="primary">main call to action</Button>
          <Button className="secondary">secondary action</Button>
        </ButtonGroup>
      </Intro>
      <Grid>
        {cards.map((c) => (
          <PhotoCard key={c.id} image={c.image} title={c.title} text={c.text} />
        ))}
      </Grid>
    </MainSection>
  );
}
