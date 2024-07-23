// Create a functional component
function App() {
    // Get the current date and time using moment
    const currentDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  
    return (
      <div className="container">
        <h1>Current Date and Time</h1>
        <div className="date-time">{currentDateTime}</div>
      </div>
    );
  }
  
  // Render the App component into the root element
  ReactDOM.render(<App />, document.getElementById('root'));
  