import { Divider, Text } from '@olegpolyakov/ui';

import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { profile } from '@/data/profile';
import projects from '@/data/projects';

import styles from './App.module.scss';

export default function App() {
    return (
        <>
            <Header />

            <main className={styles.main}>
                <Hero />
                <Divider />
                <Projects projects={projects} />
                <Divider />
                <Skills />
                <Divider />
                <Experience />
                <Contact />
            </main>

            <footer className={styles.footer}>
                <Text
                    content={`© ${new Date().getFullYear()} ${profile.name}. Built with React and my own UI library.`}
                    color="tertiary"
                    size="s"
                    align="center"
                />
            </footer>
        </>
    );
}
