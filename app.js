const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true })); // Agora está no lugar certo
app.use(express.static('public'));

const alunosRoutes = require('./routes/alunos');
const professoresRoutes = require('./routes/professores');
const cursosRoutes = require('./routes/cursos');

app.use('/professores', professoresRoutes);
app.use('/alunos', alunosRoutes);
app.use('/cursos', cursosRoutes);

app.get('/', (req, res) => {
  res.redirect('/alunos');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});