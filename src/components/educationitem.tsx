import styled from 'styled-components';

export default function EducationItem({
  title,
  date,
  description
}: {
  title: string;
  date: string;
  description: string;
}) {
  return (
    <Container>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Title>{title}</Title>
        <Date>{date}</Date>
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
  font-size: var(--font---font-body);
`;

const Description = styled.p`
  font-size: var(--font-description);
`;
