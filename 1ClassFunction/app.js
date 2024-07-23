// Class Component
class Welcome extends React.Component {
    render() {
      return <h1 className="welcome">This is My Class Component! {this.props.name}</h1>;
    }
  }
  
  // Function Component
  function Greeting(props) {
    return <h1 className="greeting">This is my Function Component! {props.name}</h1>;
  }
  
  // Main App Component
  function App() {
    return (
      <div>
        <Welcome name="Welcome" />
        <Greeting name="😎" />
      </div>
    );
  }
  
  // Rendering the App component
  ReactDOM.render(<App />, document.getElementById('root'));
  