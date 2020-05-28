import React from 'react'
import NavBar from './components/NavBar'
import Post from './components/Post'
import Posts from './components/Posts'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <Redirect
        from="/"
        to="/posts" />
      <Switch>
        <Route
          path="/posts"
          component={Posts} />
           <Route
          path="/post/:id"
          component={Post} />
      </Switch>
    </div>
  </BrowserRouter>
  )
}
