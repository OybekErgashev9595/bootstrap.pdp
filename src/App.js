import './App.css';
import logo from './Bootstrap.png';
// import logo from './logo.svg';

function App() {
  return (
    <div className='container'>
      <div className='title-text'>
      <h1 className='mt-5'>Pricing</h1>
      <p className='w-75 mt-2'>Quickly build an effective pricing table for your potential 
        customers with this Bootstrap example. It's built with default 
        Bootstrap components and utilities with little customization.</p>
      </div>
        <div className="row sena mt-3 ">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-header">
                <h2>Free</h2>
              </div>
              <div className="card-body">
                <div><b>$0</b><span> / mo</span></div>
                <p>10 users included</p>
                <p>2 GB of storage</p>
                <p>Email support</p>
                <p>Help center access</p>
                <button type="button" class="btn btn-outline-primary btn-lg w-100">Sign up for free</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-header">
                <h2>Pro</h2>
              </div>
              <div className="card-body">
                <div><b>$15</b><span> / mo</span></div>
                <p>20 users included</p>
                <p>10 GB of storage</p>
                <p>Email support</p>
                <p>Help center access</p>
                <button type="button" class="btn btn-primary btn-lg w-100">Get started</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-header">
                <h2>Enterprise</h2>
              </div>
              <div className="card-body">
                <div><b>$29</b><span> / mo</span></div>
                <p>30 users included</p>
                <p>15 GB of storage</p>
                <p>Email support</p>
                <p>Help center access</p>
                <button type="button" class="btn btn-primary btn-lg w-100">Contact us</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <footer className='mt-3'>
          <div className="row">
            <div className="col-md-3">
              <img src={logo} alt="" />
              <p>© 2017-2018</p>
            </div>
            <div className="col-md-3">
              <h5>Features</h5>
              <p>Cool stuff</p>
              <p>Random feature</p>
              <p>Team feature</p>
              <p>Stuff for developers</p>
              <p>Another one</p>
              <p>Last time</p>
            </div>
            <div className="col-md-3">
              <h5>Resources</h5>
              <p>Resource</p>
              <p>Resource name</p>
              <p>Another resource</p>
              <p>Final resource</p>
            </div>
            <div className="col-md-3">
              <h5>About</h5>
              <p>Team</p>
              <p>Locations</p>
              <p>Privacy</p>
              <p>Terms</p>
            </div>
          </div>
        </footer>

    </div>
  );
}

export default App;
