import { ChatEngine } from 'react-chat-engine';

import  ChatFeed  from './components/ChatFeed';

import './App.css';
import LoginForm from './components/LoginForm';



const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>


  return (
    <ChatEngine
       height="100vh"
       projectID="
       db6ddd2e-c2ec-443a-b1bf-2af2d8cd1fb5"
       userName={localStorage.getItem('username')}
       userSecret={localStorage.getItem('password')}
       renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}

    />
  )
}

export default App;
