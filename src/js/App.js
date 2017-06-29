// Dependencies
import React from 'react';

// Components
import GrommetApp from 'grommet/components/App';

// Styles
import '../scss/index.scss';

export default class App extends React.Component {
  render() {
    return (
      <GrommetApp centered={false}>
        {this.props.children}
      </GrommetApp>
    );
  }
}

