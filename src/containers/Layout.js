import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './About';
import AllCollections from './AllCollections';
import ContactUs from './ContactUs';
import Footer from '../components/Footer';
import GlobalSearch from '../components/GlobalSearch';
import Header from '../components/Header/';
import HomePage from './HomePage';
import ItemsContainer from './ItemsContainer';
import ItemDetailContainer from './ItemDetailContainer';
import CollectionContainer from './CollectionContainer';
import Login from './Login';
import Nav from '../components/Nav';
import SearchResultsContainer from './SearchResultsContainer';
import '../Layout.css';
import '../libs/nuwebcomm-scripts.js';

const Layout = () => {
  return (
    <div>
      <Header />
      <Nav />
      <GlobalSearch />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/search-results"
          component={SearchResultsContainer}
        />
        {/* TODO: Set up this component */}
        <Route exact path="/collections/:id" component={CollectionContainer} />

        <Route exact path="/collections" component={AllCollections} />
        <Route path="/items/:id" component={ItemDetailContainer} />
        <Route path="/items/" component={ItemsContainer} />
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default Layout;
