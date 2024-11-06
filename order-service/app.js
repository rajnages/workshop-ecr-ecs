const express = require('express');
const app = express();
app.use(express.json());

const orders = [];

app.get('/orders', (req, res) => {
    res.json(orders);
});

app.post('/orders', (req, res) => {
    const order = req.body;
    orders.push(order);
    res.json(order);
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Order service listening on port ${PORT}`);
});