import { Provider } from "react-redux";
import Main from "./Main";
import { store } from "./store/store.js";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
