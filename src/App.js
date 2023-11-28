import DataEntryField from './Components/DataEntryField';
import './App.css';

function App() {
  return (
    <><div className='App orange-border left-align'>
      <p>Eddy</p>
      <p>Says hello</p>
      {/* <p>{DataEntryField(`noob`)}</p> */}
      <DataEntryField/>
      <DataEntryField/>
    </div></>
  );
}

export default App;
