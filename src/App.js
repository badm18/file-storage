import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { LoginForm } from './Components/Auth/LoginForm';
import { RegistrationForm } from './Components/Auth/RegistrationForm';
import { MainPage } from './Pages/MainPage';



function App() {


  const PrivateRoute = ({ component: Component, auth, shouldLogin, ...rest }) => (
    <Route
      {...rest}
      render={({ match }) => {
        if (!shouldLogin) {
          if (auth) {
            return <Component id={match.params.id} />
          } else {
            return <Redirect to='/' />
          }
        } else {
          if (!auth) {
            return <Component />
          } else {
            return <Redirect to='/mainPage' />
          }
        }
      }
      }

    />
  )




  return (
    <>

      <BrowserRouter>
        <PrivateRoute exact auth={false} shouldLogin={true} path="/" component={LoginForm} />
        <PrivateRoute exact auth={false} shouldLogin={true} path="/registration" component={RegistrationForm} />
        <PrivateRoute exact auth={false} shouldLogin={false} path="/mainPage" component={MainPage} />
        <PrivateRoute auth={false} shouldLogin={false} path={'/mainPage/folder/:id'} component={MainPage} />
      </BrowserRouter>

      {/* <MainPage /> */}
      {/* <SignPage /> */}
    </>

  );
}

export default App;
