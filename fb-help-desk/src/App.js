import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import IntegrationComponent from './components/IntegrationComponent'
class App extends React.Component {
  state = {
    isLogin: true
  };

  handleScreenChange = () => {
    this.setState({ isLogin: !this.state.isLogin });
  };

  render() {
    return (
      <div className="App">
        <IntegrationComponent />
      </div>
    );
  }
}

export default App;
