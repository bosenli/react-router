
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import data from './FakeData.json';
import Home from './screens/Home';
import Posts from './screens/Posts';
import About from './screens/About';
import Post from './screens/Post';
import NoMatch from './screens/NoMatch';

//install router dependency:  npm install --save react-router-dom  
//step 2 : set up index.js
//step 3 step up components and screens
//step 4 : import NavLink
//step 5 : Routes need to route with <Routes> </Routes>
//step 6: import fake json data



// NavLink: a component for setting the URL and 
// providing navigation between components
// in our app
// without triggering a page refresh 

//NavLink: a component for setting the URL and providing 
// navigation between components in our app 
// without triggering a page refresh 
// We can even style in the NavLink itself 


// Route: a component that connects a certain path in the URL
// with the relevant component to render at that location

function App() {
  return (
    <div className="App">
      <div className = "links">
        <nav>
          <NavLink to={ "/" }>Home</NavLink>
          <NavLink to={ "/about" }>About</NavLink>
          <NavLink to={ "/posts" }>Posts</NavLink>
        </nav>
      </div>

      <Routes>
        {/* whenever the url ends with "/", home component must be rendered */}
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path="/posts" element = {<Posts posts= {data}/>} />
        {/* making copy of the data */}
        <Route path="/posts/:post_id" element = {<Post {...data} /> }/> 
        <Route path="*" element= {<NoMatch />} />
      </Routes>

    </div>
  );
}

export default App;
