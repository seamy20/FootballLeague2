import React, { lazy, Suspense } from "react";
import { Switch, Route } from 'react-router-dom';


// Main Content (Top Nav Links)
import ForHome from '../pages/ForHome.js'
import ForBusiness from '../pages/ForBusiness.js'
import About from '../pages/About.js'
import Help from '../pages/Help.js'
import MyAccount from '../pages/MyAccount.js'


const Post = lazy(() => import("../components/post"));

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={ForHome} />        
        <Route path="/about" exact component={About} />
        <Route path="/help" exact component={Help} />
        <Route path="/careers" exact component={ForBusiness} />
        <Route path="/ordernow" exact component={MyAccount} />
        <Route path="/:id" component={WaitingComponent(Post)} />
      </Switch>
    );
  }
}

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}
export default Routes;
