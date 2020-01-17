import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Blurb from '../components/blurb';

class DogsShow extends React.Component{
  render(){
  	if (!this.props.dog) {
  	  <div className="dogs-index">
	  	<div className="kennel-intro">
	  	 <Blurb kennel={this.props.kennel} />
	  	</div>
		<div className="dog-list">
		  <button className="btn btn-success index-btn"><Link to="/">BACK</Link></button>
		</div>
	  </div>
  	}

  	return(
	  <div className="dogs-index">
	  	<div className="kennel-intro">
	  	 <Blurb kennel={this.props.kennel} />
	  	</div>
		<div className="dog-list">
		  <div className="dog-post">
		    <div className="dog-icon">
		      <img src="/assets/images/icon.jpg" alt="dog icon"/>
		    </div>
		    <div className="post-item">
		      <h3>{ this.props.dog.brand } - { this.props.dog.model }</h3>
		      <p>{ this.props.dog.plate }</p>
		      <p>{ this.props.dog.owner }</p>
		    </div>
		  </div>
		  <button className="btn btn-success index-btn"><Link to="/">BACK</Link></button>
		</div>
	  </div>
  	)
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id);
  return {
  	dog: state.dogs.find((dog) => dog.id === id),
  	kennel: state.kennel
  };
}

export default connect(mapStateToProps)(DogsShow);
