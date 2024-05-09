import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import EducationItem from '../components/educationitem';
import ContactItem from '../components/contactitem';
import { BriefcaseBusiness, Mail } from 'lucide-react';
import {
  SiDiscord,
  SiGithub,
  SiLinkedin
} from '@icons-pack/react-simple-icons';
import CareerItem from '../components/careeritem';
import ProjectItem from '../components/projectitem';
import { useEffect } from 'react';
import AwardItem from '../components/awarditem';

export const Route = createFileRoute('/')({
  component: MigiMigi
});

function MigiMigi() {

  return (
    <>
      <Index />
      <Career />
      <Projects />
      <Awards />
      <Stack />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

function Index() {
  return (
    <Container id='index'>
      <Description>안녕하세요, 개발자</Description>
      <Title>김민건</Title>
      <Description>입니다.</Description>
      <Description className='plex light'>Fullstack Engineer</Description>
    </Container>
  );
}

function Education() {
  return (
    <Container id='education'>
      <Title className='plex bold'>EDUCATION</Title>
      <EducationItem
        title='부흥고등학교'
        date='2023 ~ Present'
        description='과학중점학교에 고등학교 2학년으로 재학 중입니다.'
      />
    </Container>
  );
}

function Awards() {
  return (
    <Container id='awards'>
      <Title className='plex bold'>AWARDS</Title>
      <AwardItem
        title='SOFTWARE FUTURE&DREAM CHALLENGE 2023'
        date='2023.11'
        type='은상'
        team='Team Algorix (권동한, 권오윤, 김민건, 김예준)'
      />
    </Container>
  );
}

function Career() {
  return (
    <Container id='career'>
      <Title className='plex bold'>CAREER</Title>
      <CareerItem
        title='Algorix LLC'
        position='Junior Fullstack Engineer'
        location='New York, NY'
        date='2022.11 ~ Present'
        description='에듀테크 기업 Algorix LLC에서 풀스택 엔지니어로 활동하는 중입니다. FastAPI, React, Next.js를 사용해 여러 웹사이트를 제작했습니다.'
      />
    </Container>
  );
}

function Projects() {
  return (
    <Container id='projects'>
      <Title className='plex bold'>PROJECTS</Title>
      <ProjectItem
        title='Algorix'
        location='Algorix Corporation'
        role='Frontend Developer'
        date='2024.05 ~ In Progress'
        description='미국 학교를 타겟으로 하는 CS 수업용 사이트입니다. React, FastAPI를 이용해 제작될 예정입니다.'
      />
      <ProjectItem
        title='MyED'
        location='Algorix Corporation'
        role='Fullstack Developer'
        date='2024.01 ~ 2024.05'
        link='https://myextraduty.com'
        description='미국 학교 선생님들의 Extra Duty들을 관리하는 웹사이트를 제작했습니다. Next.js 14를 이용해 App Router, Server Action과 같은 신기능을 이용해 제작했습니다.'
      />
      <ProjectItem
        title='모다'
        location='Team Algorix (권동한, 권오윤, 김민건, 김예준)'
        role='Fullstack Developer'
        date='2023.07 ~ 2023.10'
        description='수요응답형 버스인 DRT를 예약하는 앱을 PWA 기술을 이용해 제작하였습니다. React, FastAPI를 사용했으며, PWA 기능 구현에는 vite-pwa가 이용되었습니다. 해당 프로젝트로 SOFTWARE FUTURE&DREAM CHALLENGE 2023에서 은상을 수상하였습니다.'
      />
      <ProjectItem
        title='Komworld Ticket Bot'
        location='Komworld'
        role='Bot Developer'
        date='2022.07'
        description='코마월드의 티켓 봇을 제작했습니다. Discord.js를 사용해 제작했으며, 버그 제보, 의견 건의 등의 기능을 탑재했습니다.'
      />
      <ProjectItem
        title='Ask'
        location='Mingeon Kim & Yejoon Kim'
        role='Backend Developer'
        date='2021.12 ~ 2022.02'
        description='익명질문사이트 Ask의 백엔드를 Express.js를 이용해 제작했습니다.'
      />
    </Container>
  );
}

function Stack() {
  return (
    <Container id='stack'>
      <Title className='plex bold'>STACK</Title>
      <Description>준비 중입니다.</Description>
    </Container>
  );
}

function Contact() {
  return (
    <Container id='contact'>
      <Title className='plex bold'>CONTACT</Title>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <ContactItem
          platform='GitHub'
          target='@issac4892'
          link='https://github.com/issac4892'
          platformPic={<SiGithub />}
        />
        <ContactItem
          platform='Email'
          target='issac4892@gmail.com'
          link='mailto:issac4892@gmail.com'
          platformPic={<Mail />}
        />
        <ContactItem
          platform='Work Email'
          target='mingeon.kim@algorix.io'
          link='mailto:mingeon.kim@algorix.io'
          platformPic={<BriefcaseBusiness />}
        />
        <ContactItem
          platform='LinkedIn'
          target='@mingeonkim'
          link='https://www.linkedin.com/in/mingeonkim'
          platformPic={<SiLinkedin />}
        />
        <ContactItem
          platform='Discord'
          target='@migi'
          platformPic={<SiDiscord />}
        />
      </div>
      <Description>에서 저를 만나실 수 있습니다.</Description>
    </Container>
  );
}

function Footer() {
  return (
    <Container
      style={{
        background: '#0E1114',
        alignItems: 'center',
        height: '150px',
        padding: '40px 0',
        minHeight: 'unset'
      }}
    >
      <Description className='plex light' style={{ color: '#ffffff' }}>
        Mingeon Kim @ 2024
      </Description>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  padding: 20px 40px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

const Title = styled.h1`
  font-size: var(--font-large);
  margin: 0;
`;

const Description = styled.p`
  font-size: var(--font-description);
  margin: 0;
`;
