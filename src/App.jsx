import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
};
export default App;
