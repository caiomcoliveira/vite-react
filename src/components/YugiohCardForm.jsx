import { useState } from "react";

function YugiohCardForm() {

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    alert(email, password);
  }


  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label for="exampleInputEmail1">Card Name</label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default YugiohCardForm;
