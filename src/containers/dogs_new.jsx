import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions';
import Blurb from '../components/blurb';

class DogsNew extends React.Component{
  onSubmit = (values) => {
    this.props.createPost(this.props.kennel, values, () => {
      this.props.history.push('/'); // Navigate after submit
    });
  }

  render(){
    return(
      <div className="dogs-index">
        <div className="kennel-intro">
         <Blurb kennel={this.props.kennel} />
        </div>
        <div className="dog-list" style={{ backgroundImage: "url('/assets/images/form.jpg')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <div className="form-group">
              <label htmlFor="InputBrand">Name</label>
              <Field name="brand" type="text" placeholder="Fido" component="input" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="InputBrand">Breed</label>
              <Field name="model" type="text" placeholder="German Shephard" component="input" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="InputBrand">Likes</label>
              <Field name="plate" type="input" placeholder="Running, eating" component="input" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="InputBrand">Description</label>
              <Field name="owner" type="text" placeholder="Friendly and funny, likes to play dead" component="textarea" className="form-control" rows="4" />
            </div>
            <div className="btn-group">
              <button className="btn btn-danger" type="submit" disabled={this.props.pristine ||this.props.submitting}>
                ADD DOG
              </button>
              <button className="btn btn-success index-btn"><Link to="/">BACK</Link></button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    kennel: state.kennel 
  };
}

export default reduxForm({ form: 'newDogForm' })(
  connect(mapStateToProps, { createPost })(DogsNew)
);