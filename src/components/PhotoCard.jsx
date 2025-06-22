import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 16px;
`;

const Title = styled.h5`
  margin: 0 0 8px;
  font-size: 16px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

const Button = styled.button`
  padding: 6px 12px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
`;

const Time = styled.p`
  margin-top: 12px;
  font-size: 12px;
  color: #999;
`;

function PhotoCard({ image, title, text }) {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardBody>
        <Title>{title}</Title>
        <Description>{text}</Description>
        <ButtonGroup>
          <Button>View</Button>
          <Button>Edit</Button>
        </ButtonGroup>
        <Time>9 mins</Time>
      </CardBody>
    </Card>
  );
}

export default PhotoCard;
