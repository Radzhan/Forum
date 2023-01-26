import express from 'express';
import fileDb from '../fileDb';
import { Api } from '../types';

const messageRouter = express.Router();

messageRouter.post('/', async (req , res) => {
    if (!req.body.message){
        return res.status(400).send({error: 'message must be present in the request'});
    }
    let messageData: Api  =  {
        message: req.body.message,
        author: req.body.author,
    };
    if (!req.body.author) {
        messageData.author = 'Anonymus';
    }

    const savedMessage = await fileDb.addItem(messageData);
    res.send(savedMessage);
});

messageRouter.get('/', async (req, res) => {
    const messages = await fileDb.getItems();
    return res.send(messages);
})

export default messageRouter;