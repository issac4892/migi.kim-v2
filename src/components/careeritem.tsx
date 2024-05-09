import styled from 'styled-components';

export default function CareerItem({
  title,
  date,
  position,
  location,
  description
}: {
  title: string;
  date: string;
  position: string;
  location: string;
  description: string;
}) {
  return (
    <Container>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Title>{title}</Title>
        <Date>{position} @ {location} | {date}</Date>
      </div>
      <Description>{description}</Description>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: var(--font-medium);
`;

const Date = styled.p`
  font-size: var(--font-body);
  font-feature-settings: 'case';
`;

const Description = styled.p`
  font-size: var(--font-description);
`;
