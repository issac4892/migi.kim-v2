import styled from 'styled-components';

export default function AwardItem({
  title,
  date,
  type,
  team
}: {
  title: string;
  date: string;
  type: string;
  team: string;
}) {
  return (
    <Container>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </div>
      <Description><span style={{fontWeight: 'bold'}}>{type}</span>, {team}</Description>
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
  font-feature-settings: "case";
`;

const Description = styled.p`
  font-size: var(--font-description);
`;
