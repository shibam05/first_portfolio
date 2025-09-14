export default function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');
    console.log('Contact submission:', req.body);
    return res.status(200).json({ ok: true });
}