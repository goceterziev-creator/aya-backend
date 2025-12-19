const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', service: 'AYA API', port: PORT });
});

app.post('/api/lead', (req, res) => {
  console.log('📥 NEW LEAD:', req.body);
  res.json({ success: true, leadId: Date.now() });
});

app.listen(PORT, () => {
  console.log(`🚀 AYA API running on http://localhost:${PORT}`);
});
