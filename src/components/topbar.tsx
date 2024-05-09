import { Link } from '@tanstack/react-router';
import styled from 'styled-components';

export default function TopBar() {
  return (
    <Container>
      <ItemContainer>
        <Item to='index'>Mingeon Kim</Item>
      </ItemContainer>
      <ItemContainer>
        <Item to='career'>CAREER</Item>
        <Item to='projects'>PROJECTS</Item>
        <Item to='awards'>AWARDS</Item>
        <Item to='stack'>STACK</Item>
        <Item to='education'>EDUCATION</Item>
        <Item to='contact'>CONTACT</Item>
      </ItemContainer>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 2px;
`;

const _Item = styled.div<{ $active?: boolean }>`
  outline: 2px solid black;
  padding: 5px 10px;
  cursor: pointer;
  text-align: right;
  background-color: ${({ $active }) => ($active ? '#0dff00' : 'white')};
  font-weight: 600;
  // match width children
  width: max-content;
  font-size: 16px;
  letter-spacing: -4%;

  &:hover {
    background-color: #0dff00;
  }
`;

function Item({ children, to }: { children: React.ReactNode; to: string }) {
  return (
    <Link style={{ textDecoration: 'none' }} to={`#${to}`}>
      <_Item className='plex'>{children}</_Item>
    </Link>
  );
}
