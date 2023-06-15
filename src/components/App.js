import "../styles/app.css";
import PostList from "./Postlist";

import placeholderData from "../data/posts.json";

const App = () => {
  return (
    <div className="app">
      <div className="app__background-wrap" />
      <div className="app__foreground-wrap">
        <div className="app__title">Testing in React</div>
        <PostList posts={placeholderData} />
      </div>
    </div>
  );
};

export default App;
