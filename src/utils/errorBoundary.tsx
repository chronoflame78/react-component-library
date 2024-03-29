import * as React from "react";

interface IProps {
    children?: any;
}

interface IState {
    hasError?: any
}

export class ErrorBoundary extends React.Component<IProps, IState> {
    constructor(props: IProps) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }


  //use case

//   <ErrorBoundary>
//   <MyWidget />
// </ErrorBoundary>