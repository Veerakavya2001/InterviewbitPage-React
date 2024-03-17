import Header from './components/Header/Header';
import './App.scss';
import MainContent from './components/MainContent/MainContent';
import Companies from './components/Companies/Companies';
import Learners from './components/learners/learners';
import Tabs from './components/tabs/tabs';
import PraticeProblems from './components/praticeproblems/praticeproblems'

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/>
      <Companies/>
      <Learners/>
      <Tabs/>
      <PraticeProblems/>
    </div>
  );
}

export default App;
