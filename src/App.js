import logo from './logo.svg';
import { BrowserRouter as Router ,Route ,Switch } from 'react-router-dom';
import './App.css';
import Posts from './components/Posts';
import Catagories from './components/usables/Catagories';
import Params from './components/usables/test/Params';


function App() {
  const All_Catagory = [{title:"Business",url:"https://assets.entrepreneur.com/content/3x2/2000/20191127190639-shutterstock-431848417-crop.jpeg?width=700&crop=2:1"},
                        {title:"Cars",url:"https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg"},
                        {title:"Entertainment",url:"https://ca-times.brightspotcdn.com/dims4/default/21466b6/2147483647/strip/true/crop/2000x1125+0+0/resize/1486x836!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F11%2F0d%2F20049bb241498f328c858cf5c4b8%2Fyear-end-collage-2.jpg"},
                        {title:"Family",url:"https://upload.wikimedia.org/wikipedia/commons/d/df/Family_Portrait.jpg"},
                        {title:"Health",url:"https://somedaystartsnow.com/wp-content/uploads/2020/01/iStock-639896942.jpg"},
                        // {title:"Politics",url:""},
                        // {title:"Religion",url:""},
                        // {title:"Science",url:""},
                        // {title:"Sports",url:""},
                        // {title:"Technology",url:""},
                        // {title:"Travel",url:""},
                        // {title:"Video",url:""},
                        // {title:"World",url:""},
                        ]
                         return (
    <Router>
    <div className="App">
     <Switch>
        <Route exact path='/cata'>
          <Catagories data={All_Catagory}></Catagories>
        </Route>
        <Route path='/post/:id' component={Posts} /> 
        <Route path='/param/:post' component={Params} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
