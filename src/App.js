import React, {Component} from 'react';
import Viewer from './Viewer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Viewer url="https://sketchfab.com/models/240b95536fd242ff9585de9a27cc5c57/embed"></Viewer>
            </div>
        );
    }
}

export default App;
