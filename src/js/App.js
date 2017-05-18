/* Dependencies */
import React from 'react';

/* Components */
import GrommetApp from 'grommet/components/App';

/* Styles */
import '../scss/index.scss';

class App extends React.Component {
  render() {
    return (
      <GrommetApp centered={false}>
        {this.props.children}
      </GrommetApp>
    );
  }
}

export default App;
