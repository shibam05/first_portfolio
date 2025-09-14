import React from 'react';

export default function Layout({ children }) {
    return (
        <div style={{ minHeight: '100vh', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, monospace', background: 'var(--bg)', color: 'var(--text)' }}>
            <header style={{ borderBottom: '1px solid rgba(141,165,140,0.2)', padding: '1rem 1.5rem' }}>
                <div style={{ maxWidth: 1024, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '1.25rem' }}>&lt;S Biswas /&gt;</div>
                    <nav style={{ gap: '1rem', display: 'flex', fontSize: '0.9rem', color: 'var(--dim)' }}>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
            </header>
            <main style={{ maxWidth: 1024, margin: '0 auto', padding: '1.5rem' }}>{children}</main>
            <footer style={{ maxWidth: 1024, margin: '0 auto', padding: '1.5rem', fontSize: '0.9rem', color: 'var(--dim)' }}>
                <div>© {new Date().getFullYear()} — Retro ASCII portfolio</div>
            </footer>
        </div>
    );
}