import { Button, TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Card from './components/Card/Card';
import BtnFile from './components/UI/BtnFile/BtnFile';
import { getMessages, Message, postMessages } from './store/message';

function App() {
  const MessageArray = useAppSelector(Message);
  const dispatch = useAppDispatch()
  const [message, setMessage] = useState({
    message: '',
    author: '',
    image: null,
  });

  const getNewMesage = useCallback(async () => {
    await dispatch(getMessages());
  }, [dispatch])

  useEffect(() => {
    getNewMesage().catch(console.error)
  }, [getNewMesage])

  const createCards = MessageArray.map((element) => {
    return <Card message={element.message} key={element.id} author={element.author} image={element.image}></Card>
  });

  const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;

    if (files && files[0]) {
      setMessage(prevState => ({
        ...prevState, [name]: files[0]
      }));
    } else {
      setMessage(prev => ({
        ...prev, [name]: null,
      }))
    }
  };

  const onCardChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setMessage(prev => ({ ...prev, [name]: value }));
  };

  let onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await dispatch(postMessages(message));
    await dispatch(getMessages());
    setMessage({ message: '', author: '' , image: null})
  };

  return (
    <div className="App">
      <form onSubmit={onFormSubmit}>
        <BtnFile onChange={fileInputChangeHandler} name='image' label='Image'></BtnFile>
        <div>
          <TextField id="outlined-basic" sx={{ my: 2 }} label="Enter message" required variant="outlined" name='message' value={message.message}
            onChange={onCardChange}
          />
        </div>

        <div>
          <TextField id="outlined-basic" label="Enter your name" variant="outlined" name='author' value={message.author}
            onChange={onCardChange}
          />
        </div>

        <Button variant="contained" type='submit'>Sande</Button>
      </form>
      {createCards}
    </div>
  );
}

export default App;
