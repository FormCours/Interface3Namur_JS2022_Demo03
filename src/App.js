import './App.css';
import PeopleTable from './components/people-table/people-table';
import people from './data/people.json';

// npm i --save prop-types clsx

function App() {

  // Utilisation des données statique "people.json"
  console.log(people);

  return (
    <div className="App">
      <h1>Demo des collections</h1>
      <PeopleTable peopleData={people} />
    </div>
  );
}

export default App;
