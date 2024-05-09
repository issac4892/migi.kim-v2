import styled from 'styled-components';

export default function ProjectItem({
  title,
  date,
  location,
  role,
  description,
  link
}: {
  title: string;
  date: string;
  location: string;
  role: string;
  description: string;
  link?: string;
}) {
  return (
    <Container>
      <div style={{ display: 'flex', gap: '8px' }}>
        {link ? (
          <a href={link} target='_blank' rel='noreferrer'>
            <Title>{title}</Title>
          </a>
        ) : (
          <Title>{title}</Title>
        )}
        <Date>
          {location}, {role} | {date}
        </Date>
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
  font-feature-settings: 'case';
`;

const Description = styled.p`
  font-size: var(--font-description);
`;
