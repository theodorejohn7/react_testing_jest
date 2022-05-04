import React, { Component } from 'react';
import { ThemeContext } from './UseContextApp';

export default class ClassContextComponent extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? 'brown' : 'lightBlue',
      color: !dark ? '#333' : '#ccc',
      padding: '2em',
      margin: '2rem',
      borderRadius: '0.5rem',
      height: '2rem',
      width: '15rem',
      textAlign: 'center'
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>Class Component</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
