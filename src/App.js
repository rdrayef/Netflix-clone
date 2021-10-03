import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout, selectUser } from './userSlice';
import ProfileScreen from './ProfileScreen';


function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log("loggggg>>>>>>", userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
        );
      } else {
        dispatch(logout());
        console.log("logggggout>>>>>>", userAuth);
      }
    });
    return unsubscribe;
  }, [dispatch]);


  return (
    <div className="app">
      <Router>
        {!user ? (<Login />) : (
          <Switch>
            <Route path='/profile'>
              <ProfileScreen />
            </Route>
            <Route path="/">
              {/*Nav */}
              <Nav />
              {/*Bannner */}
              <Banner />
              <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
              <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
              <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
              <Row title="Action Movies" fetchUrl={requests.fetchTopActionMovies} />
              <Row title="Comedy Movies" fetchUrl={requests.fetchTopComedyMovies} />
              <Row title="Horror Movies" fetchUrl={requests.fetchTopHorrorMovies} />
              <Row title="Romance Movies" fetchUrl={requests.fetchTopRomanceMovies} />
              <Row title="Documentaries" fetchUrl={requests.fetchTopDocumentaries} />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
