import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchDogs } from '../actions';
import Blurb from '../components/blurb';

class DogsIndex extends React.Component{
  UNSAFE_componentWillMount(){
    this.fetchDogs();
  }

  fetchDogs = () => {
    this.props.fetchDogs(this.props.kennel)
  }

  renderDogs(){
    return this.props.dogs.map((dog) => {
      return (
        <Link to={`/dogs/${dog.id}`} key={dog.id}>
          <div className="dog-post">
            <div className="dog-icon">
              <img src="/assets/images/icon.jpg" alt="dog icon"/>
            </div>
            <div className="post-item">
              <h3>{ dog.brand } - { dog.model }</h3>
              <p>{ dog.plate }</p>
              <p>{ dog.owner }</p>
            </div>
          </div>
        </Link>
      );
    });
  }

  render(){
    return(
      <div className="dogs-index">
        <div className="kennel-intro">
         <Blurb kennel={this.props.kennel} />
        </div>
        <div className="dog-list">
          { this.renderDogs() }
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDogs }, dispatch);
}

function mapStateToProps(state) {
  return {
    dogs: state.dogs,
    kennel: state.kennel };
}

export default connect(mapStateToProps, mapDispatchToProps)(DogsIndex);
