import DataEntryField from './Components/DataEntryField';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <><div className='App orange-border left-align'>
      <Header/>
      <p>Eddy pays tax</p>
      {/* <p>{DataEntryField(`noob`)}</p> */}
      <DataEntryField/>
      <DataEntryField/>
    </div></>
  );
}

export default App;
