import React, { Component, ErrorInfo, } from 'react';
import { Props } from 'interfaces';
import { State } from 'interfaces';

/**
 * A component that catches JavaScript errors anywhere in its child component tree,
 * logs those errors to an error reporting service, and displays a fallback UI.
 */
class ErrorBoundary extends Component<Props, State> {
    /**
     * The initial state of the error boundary.
     * `hasError` is set to false, and `error` is set to null.
     */
    public state: State = {
      hasError: false,
      error: null
    };
  
    /**
     * Updates the state of the error boundary if the component catches an error.
     * @param error The error that was caught.
     * @returns The updated state of the error boundary.
     */
    public static getDerivedStateFromError(error: Error): State {
      return { hasError: true, error };
    }
  
    /**
     * Logs the error to the console if it is caught.
     * @param error The error that was caught.
     * @param errorInfo Information about the error.
     */
    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.error('Uncaught error:', error, errorInfo);
    }
  
    /**
     * Renders either the children of the error boundary or a fallback UI.
     */
    public render() {
      // If the error boundary has caught an error, render the fallback UI.
      if (this.state.hasError) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
              <p className="text-gray-600 mb-4">
                {this.state.error?.message || 'An unexpected error occurred'}
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => this.setState({ hasError: false, error: null })}
              >
                Try again
              </button>
            </div>
          </div>
        );
      }
  
      // If the error boundary has not caught an error, render the children.
      return this.props.children;
    }
  }

  export default ErrorBoundary;
