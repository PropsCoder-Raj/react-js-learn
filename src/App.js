import './App.css';
import './appStyle.css';
import { useState, useTransition } from 'react';
import NAMES from './components/data.json'
// import { PostFrom } from './components/PostForm';
// import { PostList } from './components/PostList';
// import { Form } from './components/Form';
// import styles from './appStyle.module.css'
// import { InlineStyle } from './components/InlineStyle';
// import { StyleSheet } from './components/StyleSheet';
// import { ListComponent } from './components/ListComponent';
// import { UserGreeting } from './components/UserGreeting';
// import { ParentComponent } from './components/ParentComponent';
// import { ClickHandler } from './components/ClickHandler';
// import { Greet } from "./components/Greet";
// import { Message } from "./components/Message";

function App() {
  const [query, setQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isPending, startTransition] = useTransition()

  const changeHandler = (event) => {
    setInputValue(event.target.value)
    startTransition(() => setQuery(event.target.value))
  }
  const filterData = NAMES.filter(item => {
    return item.title.includes(query);
  })
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      <div>
        <input type="text" value={query} onChange={changeHandler}/>
      </div>
      {isPending && <p>update list...</p>}
      {filterData.map((element) => (
        <p key={element.id}>
          {element.title}
        </p>
      ))}
    </div>
  );
}

export default App;
