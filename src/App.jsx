import { Provider } from "react-redux";
import "./App.css";
import Router from "./components/Router";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
