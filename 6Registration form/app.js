// app.js
const { useState } = React;

const EmailRegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, e.g., send data to server
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    alert('Form submitted!');
    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="form">
      <h2>Email Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="name">Name:</label>
          <input
            className="input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">Email:</label>
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">Password:</label>
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="button" type="submit">Subscribe</button>
      </form>
    </div>
  );
};

ReactDOM.render(<EmailRegistrationForm />, document.getElementById('root'));
