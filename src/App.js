import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import { LoginForm } from './Components/Auth/LoginForm';
import { RegistrationForm } from './Components/Auth/RegistrationForm';
import { MainPage } from './Pages/MainPage';


function App() {
  return (
    <>

      <BrowserRouter>
        <Route exact path={"/"} component={LoginForm} />
        <Route exact path={"/registration"} component={RegistrationForm} />
        <Route exact path={"/mainPage"} component={MainPage} />
        <Route path={'/mainPage/folder/:id'} render={({ match }) => (
          <MainPage id={match.params.id} />
        )} />
      </BrowserRouter>

      {/* <MainPage /> */}
      {/* <SignPage /> */}
    </>

  );
}

export default App;
