import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home';
import SignUpPage from './pages/Signup';
import SigninPage from './pages/Signin';
import ProfilePage from './pages/Profile';

const App = () => {
  const [user, setUser] = useState(null);

  const logout = () => setUser(null);

  const login = (user) => setUser(user);

  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <SigninPage login={login} />
        </Route>
        <Route path='/register'>
          <SignUpPage />
        </Route>
        {user && (
          <Route path='/profile'>
            <ProfilePage user={user} logout={logout} />
          </Route>
        )}

        <Route path='*'>
          <HomePage user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
