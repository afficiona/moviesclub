import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

class Header extends React.PureComponent {
  render() {
    return (
      <div className="app__loader">
        Fetching movies list...
      </div>
    );
  }
}

Header.propTypes = {
  
};

export default Header;
