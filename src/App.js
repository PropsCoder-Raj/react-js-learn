import './App.css';
import './appStyle.css';
import styles from './appStyle.module.css'
import { InlineStyle } from './components/InlineStyle';
// import { StyleSheet } from './components/StyleSheet';
// import { ListComponent } from './components/ListComponent';
// import { UserGreeting } from './components/UserGreeting';
// import { ParentComponent } from './components/ParentComponent';
// import { ClickHandler } from './components/ClickHandler';
// import { Greet } from "./components/Greet";
// import { Message } from "./components/Message";

function App() {
  return (
    <div className="App">
      <InlineStyle />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
}

export default App;
