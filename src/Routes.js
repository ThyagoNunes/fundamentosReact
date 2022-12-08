import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom'
import {useTransition, animated} from 'react-spring'

import Home from './pages/home';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';
import Post from './pages/Post';

export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {opacity: 0,  transform: 'translateY(50px)', position: 'absolute', borderRadius: '4px', marginTop: '24px', width: '100%'}, // styles, entrando
    enter: {opacity: 1,  transform: 'translateY(0)', position: 'absolute', borderRadius: '4px', marginTop: '24px', width: '100%'}, // styles, em tela
    leave: {opacity: 0,  transform: 'translateY(50px)', position: 'absolute', borderRadius: '4px', marginTop: '24px', width: '100%'}, // styles, saindo de tela
  })

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route exact path="/" component={Home}/>
        <Route exact path="/posts" component={Posts}/>
        <Route path="/posts/:id" component={Post} />
        <Route component={NotFound}/>
      </Switch>
    </animated.div>
  ));
} 