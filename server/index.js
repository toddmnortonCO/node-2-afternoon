const express = require('express');
const mc = require('./controllers/messages_controller');

const app = express();

const messageBaseURL = '/api/messages';

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.post(messageBaseURL ,mc.create);
app.get(messageBaseURL, mc.read);
app.put(`${messageBaseURL}/:id`, mc.update); //helpful trick making the base URL a variable
app.delete(`${messageBaseURL}/:id`, mc.delete);

const port = 3001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});