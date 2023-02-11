import { List } from "./composition/header/header";
import { Card } from "./composition/portfolios";
import { Blog } from "./composition/main/blog/blog";


function App() {
  return (
    <div className="App">
     <List />
     {/* <Card /> */}
     <Blog />

    </div>
  );
}

export default App;
