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

import './styles.scss';

import MessageBox from './../../components/MessageBox';

export class MoviesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTrailer: null,
      trailerBoxEle: null
    }

    this.setRowTrailerActive = e => {
      const trailerBoxEle = e.currentTarget.getElementsByClassName('app__list__trailer-box')[0];
      // Deactivating the current trailer box
      if (this.state.trailerBoxEle && this.state.trailerBoxEle !== trailerBoxEle) {
        this.state.trailerBoxEle.innerHTML = '';
      }
      this.setState({ trailerBoxEle });
      setTimeout(() => {
        trailerBoxEle.innerHTML = `<iframe id="ytplayer" height="360" type="text/html" src="${this.state.selectedTrailer}?autoplay=1" frameborder="0" />;`;
      }, 0);
    }

    this.onSelect = (e, trailerURL) => {
      if (this.state.selectedItemEle) {
        this.state.selectedItemEle.classList.remove('app__list__item--active');
      }
      e.currentTarget.classList.add('app__list__item--active');
      this.setState({
        selectedItemEle: e.currentTarget,
        selectedTrailer: trailerURL
      });
    }
  }

  componentDidMount() {
    const listEleWidth = this.listRefEle.offsetWidth;
    const itemsPerRow = Math.floor(listEleWidth / 240);
    const grouped = this.props.data.reduce((acc, movie, ind) => {
      var index = parseInt(ind / itemsPerRow);
      acc[index] = acc[index] || [];
      acc[index].push((
        <div className="app__list__item" key={ind} onClick={e => this.onSelect(e, movie.TrailerURL)}>
          <div className="app__list__item__media">
            <img src={`https://in.bmscdn.com/events/moviecard/${movie.EventCode}.jpg`} alt={movie.EventName} />
          </div>
          <div className="app__list__item__title">{movie.EventName}</div>
        </div>
      ));
      return acc;
    }, {});

    this.setState({ grouped });
  }

  componentWillReceiveProps(nextProps) {
    
  }

  render() {
    return (
      <div className="app__list" ref={ele => this.listRefEle = ele}>
        <div className="app__list__filters">Applied Filters: {this.props.filters}</div>
        <div className="app__list__wrapper">
          {this.state.grouped && Object.keys(this.state.grouped).map(row => {
              return (
                <div className="app__list__row__wrapper" key={row} onClick={this.setRowTrailerActive}>
                  <div className="app__list__trailer-box"></div>
                  <div className="app__list__row">
                    {
                      this.state.grouped[row]
                    }
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

MoviesList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MoviesList;
