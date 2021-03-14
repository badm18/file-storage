import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import { LoginForm } from './Components/LoginForm';
import { RegistrationForm } from './Components/RegistrationForm';
import { MainPage } from './Pages/MainPage';
import { SignPage } from './Pages/Sign-in-up';

function App() {
  return (
    <>

      <BrowserRouter>
        <Route exact path={"/" } component={LoginForm} />
        <Route exact path={"/registration"} component={RegistrationForm} />
        <Route exact path={"/mainPage"} component={MainPage} />
      </BrowserRouter>



      {/* <MainPage /> */}
      {/* <SignPage /> */}
    </>

  );
}

export default App;
