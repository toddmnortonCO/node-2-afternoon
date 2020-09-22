import Controller from './Controllers/messages_controller'

const express = require('./express');
const mc = require('./controllers/messages_controller');
const app = express();
const messageBaseURL = '/api/messages';

app.use(express.json());
app.post(messageBaseURL ,mc.create);
app.get(messageBaseURL, mc.read);
app.put(`${messageBaseURL}/:id`, mc.update); //helpful trick making the base URL a variable
app.delete(`${messageBaseURL}/:id`, mc.delete);

const port = 3001;
app.listen(post, () => {
    console.log(`Server listening on port ${port}`);
});

