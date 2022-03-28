import React from "react";
import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStsteFromError(error) {
    return {
      hasError: true,
    };
  }
  // componentDidCatch(error, info) {
  //   // Example "componentStack":
  //   //   in ComponentThatThrows (created by App)
  //   //   in ErrorBoundary (created by App)
  //   //   in div (created by App)
  //   //   in App
  //   logComponentStackToMyService(info.componentStack);
  // }

  componentDidCatch(error, errorInfo) {
    ineum("reportError", error, {
      componentStack: errorInfo.componentStack,
    });

    logComponentStackToMyService(errorInfo.componentStack);

    console.log("Logging", error, errorInfo);
    <h1>An error occurred: {error.message}</h1>;
  }
  render() {
    if (this.state.hasError) return <h1>Something went Wrong</h1>;

    return this.props.children;
  }
}
