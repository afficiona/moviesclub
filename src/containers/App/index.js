/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './styles.scss';
import moviesActions from './../../actions/movies';

import Header from './../Header';
import Loader from './../../components/Loader';
import MoviesList from './../../components/MoviesList';
import MessageBox from './../../components/MessageBox';

export class App extends React.Component {
  componentWillMount() {
    this.props.actions.getMoviesList();
    this.props.actions.getLanguagesList();
    this.props.actions.getGenresList();
  }

  componentWillReceiveProps(nextProps) {
    
  }

  render() {
    return (
      <div className="app">
        <Header />
        
        <div className="app__content">
          {(() => {
            if (this.props.IsLoading) {
              return <Loader />
            }

            if (this.props.IsError) {
              return <MessageBox text="Something went wrong!" />
            }

            if (!this.props.MoviesList.length) {
              return <MessageBox text="No movies list found. Search again!" />
            }

            return (
              <MoviesList data={this.props.MoviesList} filters={this.props.AppliedFilters} />
            )
          })()}
        </div>

      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps({ Movies }) {
  const AppliedFilters = [Movies.getIn(['filters', 'selected', 'language']), Movies.getIn(['filters', 'selected', 'genre'])];
  return {
    IsLoading: Movies.getIn(['list', 'isFetching']),
    IsError: Movies.getIn(['list', 'error']),
    MoviesList: Movies.getIn(['list', 'data']),
    AppliedFilters,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    ...moviesActions,
  };
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
