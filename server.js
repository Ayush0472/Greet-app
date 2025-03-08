// Backend (Node.js & Express)
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/greet', (req, res) => {
    const name = req.query.name;
    if (!name) {
        return res.status(400).json({ error: "Name is required." });
    }
    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
