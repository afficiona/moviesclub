import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

class Header extends React.PureComponent {
  render() {
    return (
      <div className="message-box">
        {this.props.text}
      </div>
    );
  }
}

Header.propTypes = {
  
};

export default Header;
