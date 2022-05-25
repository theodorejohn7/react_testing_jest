import React from 'react';
 
const lazyLoader = (importComp, fallback) => {
  console.log('inside class');
  return class lazy extends React.Component {
      constructor(){
          super();
          this.state = {
            component: null  
          };
      }
    componentDidMount() {
       
      importComp().then((comp) =>  { console.log("INSIDE COMP",comp.default.name); this.setState({ component: comp.default })});
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : fallback ? fallback : <div>loading</div>;
    }
  };
};
export default lazyLoader;