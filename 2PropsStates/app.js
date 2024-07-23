const { useState } = React;

function UserProfile({ name, initialAge }) {
  const [age, setAge] = useState(initialAge);

  const incrementAge = () => {
    setAge(age + 1);
  };

  return (
    <div className="profile">
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <button onClick={incrementAge}>Increase Age</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <UserProfile name="Mounika Kamma" initialAge={20} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
