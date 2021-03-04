import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import Band from '../components/Band';

class BandsContainer extends Component {
    
  renderBand = () => this.props.bands.map((band, id) => <Band key={id} name={band.name}/>)

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBand()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { bands: state.bands }
}

const mapDispatchToProps = dispatch => ({
addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
