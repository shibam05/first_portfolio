import React, { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('sending');

        try {
            // Replace YOUR_FORM_ID with your actual Formspree form ID
            const res = await fetch('https://formspree.io/f/mnnbkenj', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                })
            });

            if (res.ok) {
                setStatus('sent');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                throw new Error('Form submission failed');
            }
        } catch (err) {
            setStatus('error');
            console.error(err);
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 640 }}>
            <div style={{ marginBottom: '0.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} required style={{ width: '100%', padding: '0.5rem', borderRadius: 4, color: 'green' }} />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '0.5rem', borderRadius: 4, color: 'green' }} />
            </div>
            <div style={{ marginBottom: '0.75rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} style={{ width: '100%', padding: '0.5rem', borderRadius: 4, color: 'green' }} />
            </div>
            <div>
                <button type="submit" style={{ padding: '0.5rem 0.75rem', borderRadius: 4 }}>Send</button>
                {status === 'sending' && <span style={{ marginLeft: '0.75rem' }}>Sending...</span>}
                {status === 'sent' && <span style={{ marginLeft: '0.75rem', color: 'var(--accent)' }}>Sent!</span>}
                {status === 'error' && <span style={{ marginLeft: '0.75rem', color: 'red' }}>Error</span>}
            </div>
        </form>
    );
}

/**
 import React, { useState } from 'react';

export default function ContactForm() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [status, setStatus] = useState(null);

async function handleSubmit(e) {
e.preventDefault();
setStatus('sending');

try {
    const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) throw new Error('Network response was not ok');

    setStatus('sent');
    setName('');
    setEmail('');
    setMessage('');
} catch (err) {
    setStatus('error');
    console.error(err);
}
}

return (
<form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
    <div>
    <label className="block text-sm mb-1">Name</label>
    <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
    />
    </div>
    <div>
    <label className="block text-sm mb-1">Email</label>
    <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
    />
    </div>
    <div>
    <label className="block text-sm mb-1">Message</label>
    <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={5}
        className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
    />
    </div>
    <div className="flex items-center gap-3">
    <button
        type="submit"
        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
    >
        Send
    </button>
    {status === 'sending' && <span>Sending...</span>}
    {status === 'sent' && <span className="text-green-400">Sent!</span>}
    {status === 'error' && <span className="text-red-500">Error</span>}
    </div>
</form>
);
}

 */