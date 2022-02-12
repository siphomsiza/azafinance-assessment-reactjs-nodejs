import React from 'react';
import { Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';
import { createStructuredSelector } from 'reselect';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Transaction from './pages/transaction/transaction.component';
import PostTransaction from './pages/transaction/post_transaction.component';

class App extends React.Component {
  render() {
    return (
      <div style={{width: '100%' }}>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/transaction' component={Transaction}></Route>
          <Route path='/transactions/new' component={PostTransaction}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // artistsList: setArtistsList
})

const mapDispatchToProps = dispatch => ({
  // setArtistsList: Artists => dispatch(setArtistsList(Artists))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
