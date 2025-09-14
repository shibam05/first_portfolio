import fs from 'fs';
import path from 'path';
import React from 'react';

export default function ProjectPage({ project }) {
    if (!project) return <div>Not found</div>;
    return (
        <div>
            <h1 style={{ fontSize: '1.75rem' }}>{project.title}</h1>
            <p style={{ color: 'var(--dim)', marginTop: '0.5rem' }}>{project.summary}</p>
            <pre style={{ marginTop: '1rem', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: 6, whiteSpace: 'pre-wrap' }}>{project.content}</pre>
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const dataPath = path.join(process.cwd(), 'data', 'projects.json');
    const raw = fs.readFileSync(dataPath, 'utf8');
    const items = JSON.parse(raw);
    const project = items.find((p) => p.id === params.id) || null;
    return { props: { project } };
}