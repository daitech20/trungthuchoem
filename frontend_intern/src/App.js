import './App.css';
import { Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import home from './rotationLuck/home'
function App() {
  return (
    <div>
      <Switch >
        <Route path="/" component={home}></Route>
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
