import React from 'react';

export default function Hero() {
    const ascii = [
        "  ____   _    ____  ____  ",
        " / ___| / \\  |  _ \\|  _ \\ ",
        "| |    / _ \\ | |_) | |_) |",
        "| |___/ ___ \\|  __/|  __/ ",
        " \\____/_/   \\_\\_|   |_|    "
    ].join('\n');

    return (
        <section style={{ marginBottom: '2rem' }}>
            <pre style={{ userSelect: 'none', fontSize: '1.25rem', lineHeight: '1.05' }}>{ascii}</pre>
            <h1 style={{ fontSize: '1.75rem', marginTop: '0.75rem' }}>Hello — I'm S Biswas</h1>
            <p style={{ marginTop: '0.5rem', color: 'var(--dim)' }}>I build web apps with a retro aesthetic — ASCII, terminals & minimalism.</p>
        </section>
    );
}