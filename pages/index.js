import React from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';

export default function Home({ projects }) {
    return (
        <div>
            <Hero />
            <section id="projects">
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Projects</h2>
                {projects.map((p) => (
                    <ProjectCard p={p} key={p.id} />
                ))}
            </section>
            <section id="contact" style={{ marginTop: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contact</h2>
                <ContactForm />
            </section>
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/projects');
    const projects = await res.json();
    return { props: { projects } };
}