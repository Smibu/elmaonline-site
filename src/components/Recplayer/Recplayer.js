import React from 'react';
import PropTypes from 'prop-types';

const RecPlayer =
  typeof document !== 'undefined' && require('recplayer-react').default; // eslint-disable-line global-require

class Recplayer extends React.Component {
  static propTypes = {
    rec: PropTypes.string.isRequired,
    lev: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    zoom: PropTypes.number,
    controls: PropTypes.bool,
    imageUrl: PropTypes.string,
  };

  static defaultProps = {
    width: 'auto',
    height: 'auto',
    zoom: 0.7,
    controls: true,
    imageUrl: 'https://elma.online/recplayer',
  };

  render() {
    const { rec, lev, width, height, zoom, controls, imageUrl } = this.props;
    return (
      <React.Fragment>
        {RecPlayer && lev ? (
          <RecPlayer
            recUrl={rec || ''}
            levUrl={lev}
            width={width}
            height={height}
            zoom={zoom}
            controls={controls}
            imageUrl={imageUrl}
          />
        ) : (
          <span>Loading..</span>
        )}
      </React.Fragment>
    );
  }
}

export default Recplayer;
