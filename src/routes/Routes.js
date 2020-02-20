import React, { lazy, Suspense } from "react";
import { Switch, Route } from 'react-router-dom';


// Main Content (Top Nav Links)
import ForHome from '../pages/ForHome.js'
import MatchReports from '../pages/MatchReports.js'
import Teams from '../pages/Teams.js'
import TeamsPage from '../pages/TeamsPage/TeamPage.js'
import News from '../pages/News.js'
import MyAccount from '../pages/MyAccount.js'


const Post = lazy(() => import("../components/post"));
const TeamPost = lazy(() => import("../components/TeamsPost"));

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={ForHome} />        
        <Route path="/teams" exact component={Teams} />
        <Route path="/teams/teamspage" exact component={TeamsPage} />
        <Route path="/news" exact component={News} />
        <Route path="/reports" exact component={MatchReports} />
        <Route path="/ordernow" exact component={MyAccount} />
        <Route path="/:id" component={WaitingComponent(Post)} />
        <Route path="/teams/teamspage:id2" component={WaitingComponent2(TeamPost)} />
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
function WaitingComponent2(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}
export default Routes;
