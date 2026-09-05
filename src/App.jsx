import Contact from './components/Contact.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import {
  contact,
  education,
  experience,
  navigation,
  profile,
  projects,
  skills,
} from './data/resume.js';
import { useActiveSection, useScrolledHeader } from './hooks/useResumeNavigation.js';

const navigationSectionIds = navigation.map((item) => item.id);

function App() {
  const scrolled = useScrolledHeader();
  const activeSection = useActiveSection(navigationSectionIds);

  return (
    <>
      <a className="skip-link" href="#main">
        跳转到简历内容
      </a>
      <Header
        activeSection={activeSection}
        navigation={navigation}
        profile={profile}
        scrolled={scrolled}
      />
      <main id="main" className="page">
        <Intro profile={profile} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Education education={education} />
        <Contact contact={contact} />
      </main>
      <Footer name={profile.name} />
    </>
  );
}

export default App;
