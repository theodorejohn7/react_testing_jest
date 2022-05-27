import React from 'react';
/* eslint-disable */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: '', info: '' };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('inside did catch');

    this.setState({ hasError: true });
    this.setState({ error: error });
    this.setState({ info: info });
    return 
  }
  /* eslint-disable */
  render() {
    if (this.state.hasError) {
      return (
<>


<h1 style={{ color: 'red' }}>
           <br /> Something went wrong! due to <br /></h1>

<h1 style={{ color: 'blue' }}>

          {this.state.error && this.state.error.toString()} </h1>

<h1 style={{ color: 'brown' }}>

       Please refresh the page and try again 
          </h1>

         <h5>
         {this.state.info.componentStack}
             </h5> 

</>

      );
    }
    return this.props.children;
  }
}
