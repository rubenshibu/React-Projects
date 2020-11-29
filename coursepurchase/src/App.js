import './App.css';
import Coursesales from './components/Coursesales'

function App() {

  // eslint-disable-next-line no-unused-vars
  var courses=[
    {name:"ios dev",price:"300"},
    {name:"android dev",price:"299"},
    {name:"frnd dev dev",price:"190"},
    {name:"back-end dev",price:"180"}
  ];

  return (
    <div className="App">
        <Coursesales items={courses}/>
    </div>
  );
}

export default App;
