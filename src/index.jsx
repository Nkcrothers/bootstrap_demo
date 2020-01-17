import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
      super(props);
    }

    render(){
        return(
          <div>
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                    <div className="checkbox">
                        <label>
                        <input type="checkbox"/> Remember me
                        </label>
                    </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">Sign in</button>
                    </div>
                </div>
            </form>
            <br></br>
            <p>
                <button type="button" className="btn btn-primary btn-lg">Large button</button>
                <button type="button" className="btn btn-default btn-lg">Large button</button>
            </p>
            <p>
                <button type="button" className="btn btn-primary">Default button</button>
                <button type="button" className="btn btn-default">Default button</button>
            </p>
            <p>
                <button type="button" className="btn btn-primary btn-sm">Small button</button>
                <button type="button" className="btn btn-default btn-sm">Small button</button>
            </p>
            <p>
                <button type="button" className="btn btn-primary btn-xs">Extra small button</button>
                <button type="button" className="btn btn-default btn-xs">Extra small button</button>
            </p>
            <br></br>
                <p className="bg-primary">Example</p>
                <p className="bg-success">Example</p>
                <p className="bg-info">Example</p>
                <p className="bg-warning">Example</p>
                <p className="bg-danger">Example</p>
            <br></br>
            <input className="form-control input-lg" type="text" placeholder=".input-lg"/>
            <input className="form-control" type="text" placeholder="Default input"/>
            <input className="form-control input-sm" type="text" placeholder=".input-sm"/>
            <br></br>
            <div className="btn-group" role="group" aria-label="...">
                <button type="button" className="btn btn-default">1</button>
                <button type="button" className="btn btn-default">2</button>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                        <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a href="#">Dropdown link</a></li>
                        <li><a href="#">Dropdown link</a></li>
                    </ul>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: 60 + "%"}}>
                    <span className="sr-only">60% Complete</span>
                </div>
            </div>
            <br></br>
            <br></br>
          </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));