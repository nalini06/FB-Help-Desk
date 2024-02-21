import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Chat from './components/Chat'
import IntegrationComponent from './components/IntegrationComponent'
class App extends React.Component {
  

  render() {
    return (
      <div className="App">
        <Chat />
      </div>
    );
  }
}

export default App;
