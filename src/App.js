import './App.css';
// using ES6 modules
import { BrowserRouter as Router, Route } from "react-router-dom";
import homeComponent from './components/Home.component';
import homeEditeComponet from './components/homeEdite.component';

function App() {
  return (
    <Router>
        <div className="App">
            <Route path="/" exact component={homeComponent} />
            <Route path="/blog/edit/:id"  component={homeEditeComponet} />
        </div>
    </Router>
  );
}

export default App;
