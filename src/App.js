import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import { LoginForm } from './Components/Auth/LoginForm';
import { RegistrationForm } from './Components/Auth/RegistrationForm';
import { MainPage } from './Pages/MainPage';


function App() {

  // useEffect(() => {

  // }, [])

  // return (
  //   <>
  //     <BrowserRouter>

  //       <Route exact path='/'>
  //         {localStorage.getItem('currentUser') === "" ? <LoginForm /> : <Redirect push to='/mainPage' />}
  //       </Route>

  //       <Route exact path='/registration'>
  //         {localStorage.getItem('currentUser') === "" ? <RegistrationForm /> : <Redirect push to='/mainPage' />}
  //       </Route>

  //       <Route exact path='/mainPage'>
  //         {localStorage.getItem('currentUser') !== "" ? <MainPage /> : <Redirect push to='/' />}
  //       </Route>

  //       <Route path={'/mainPage/folder/:id'} render={({ match }) => (
  //         localStorage.getItem('currentUser') !== "" ?
  //           (<MainPage id={match.params.id} />) :
  //           (<Redirect to='/' />)
  //       )} />
  //     </BrowserRouter>
  //   </>
  // )

  return (
    <>

      <BrowserRouter>
        {/* {user === "" ? (<Route exact path={"/"} component={LoginForm} />) : (<Redirect to='/mainPage' />)} */}

        <Route exact path={"/"} render={() =>
          localStorage.getItem('currentUser') === "" ?
            (<LoginForm />) :
            (<Redirect to='/mainPage' />)
        } />

        <Route exact path={"/registration"} render={() =>
          localStorage.getItem('currentUser') === "" ?
            (<RegistrationForm />) :
            (<Redirect to='/mainPage' />)
        } />

        <Route exact path={"/mainPage"} render={() =>
          localStorage.getItem('currentUser') !== "" ?
            (<MainPage />) :
            (<Redirect to='/' />)
        } />

        <Route path={'/mainPage/folder/:id'} render={({ match }) => (
          localStorage.getItem('currentUser') !== "" ?
            (<MainPage id={match.params.id} />) :
            (<Redirect to='/' />)
        )} />
      </BrowserRouter>

      {/* <MainPage /> */}
      {/* <SignPage /> */}
    </>

  );
}

export default App;
