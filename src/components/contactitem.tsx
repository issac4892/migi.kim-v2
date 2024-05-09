import React from 'react';
import styled from 'styled-components';

export default function ContactItem({
  platform,
  platformPic,
  target,
  link
}: {
  platform: string;
  platformPic?: React.ReactNode;
  target: string;
  link?: string;
}) {
  return (
    <Container>
      <Icon>{platformPic}</Icon>
      <span>{platform}</span>
      {link ? (
        <a href={link} target='_blank' rel='noreferrer'>
          <span>{target}</span>
        </a>
      ) : (
        <span>{target}</span>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Icon = styled.div`
  width: var(--font-medium);
  height: var(--font-medium);
  margin-right: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
