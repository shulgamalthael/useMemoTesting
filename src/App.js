/* react */
import { useCallback, useMemo } from 'react';

/* css */
import './App.css';

function App() {
  const getUser = useCallback((user) => {
    const result = user || { name: "Nikita", age: "22" };
    if(!user) {window.user = result;}
    return result;
  }, []);

  const user = useMemo(() => {
    const _user = getUser();
    _user.name = "OWL";
    return _user;
  }, []);
  
  console.log(user === window.user);

  user.age = "25";

  console.log(user === window.user);

  console.log("Rerendered");

  return (
    <div className="App">
      {user.name} / {user.age}
    </div>
  );
}

export default App;
