
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  res.json({
    reply: 'Olá! Sou o JARVIS. Meu servidor está funcionando!'
  });
});

app.get('/', (req, res) => {
  res.send('Servidor JARVIS online!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
