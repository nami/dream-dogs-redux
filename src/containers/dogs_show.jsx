import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Blurb from '../components/blurb';
import { removeDog, fetchPost } from '../actions';

class DogsShow extends React.Component{
  UNSAFE_componentWillMount() {
     // able to refresh
     if (!this.props.dog) {
       this.props.fetchPost(this.props.match.params.id);
     }
   }
  
  handleClick = () => {
  	this.props.removeDog(this.props.back, this.props.dog);
  }

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
		    <button className="delete float-right" onClick={this.handleClick}>
		      <i className="fa fa-trash-o" aria-hidden="true"></i>
		    </button>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeDog, fetchPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DogsShow);
