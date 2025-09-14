// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//     const dataPath = path.join(process.cwd(), 'data', 'projects.json');
//     if (req.method === 'GET') {
//         const raw = fs.readFileSync(dataPath, 'utf8');
//         return res.status(200).json(JSON.parse(raw));
//     }

//     if (req.method === 'POST') {
//         try {
//             const raw = fs.readFileSync(dataPath, 'utf8');
//             const items = JSON.parse(raw);
//             const newItem = { id: req.body.id || `p${Date.now()}`, ...req.body };
//             items.push(newItem);
//             fs.writeFileSync(dataPath, JSON.stringify(items, null, 2), 'utf8');
//             return res.status(201).json(newItem);
//         } catch (err) {
//             return res.status(500).json({ error: err.message });
//         }
//     }

//     res.setHeader('Allow', 'GET, POST');
//     res.status(405).end('Method Not Allowed');
// }

import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
    const dataPath = path.join(process.cwd(), 'data', 'projects.json');

    if (req.method === 'GET') {
        const raw = fs.readFileSync(dataPath, 'utf8');
        return res.status(200).json(JSON.parse(raw));
    }

    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
}
