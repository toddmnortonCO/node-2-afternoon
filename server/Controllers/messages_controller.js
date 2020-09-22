let messages =[];
let id = 0; // will increment after every creation

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update: (req, res) => {
        let message = messages.find(element => element.id === +req.params.id);
        message.name = req.body.name;

        res.status(200).send(messages)
    },
    delete: (req, res) => {
        let index = messages.findIndex(element => element.id === +req.messages.id);
        messages.splice(index, 1);
        res.status(200).send(messages)
    }
}