import Link from 'next/link';
import React from 'react';

export default function ProjectCard({ p }) {
    return (
        <article style={{ border: '1px solid rgba(141,165,140,0.12)', padding: '1rem', borderRadius: 6, marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.125rem' }}>{p.title}</h3>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--dim)' }}>{p.summary}</p>
            <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {p.tags.map((t) => (
                    <span key={t} style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', borderRadius: 4, background: 'rgba(141,165,140,0.06)' }}>{t}</span>
                ))}
            </div>
            <div style={{ marginTop: '0.75rem' }}>
                <Link
                    href={`/projects/${p.id}`}
                    style={{ textDecoration: 'underline' }}
                >
                    View
                </Link>
            </div>
        </article>
    );
}