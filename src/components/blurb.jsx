import React from 'react';
import { Link } from 'react-router-dom';

const Blurb = (props) => {
  return (
    <div className="blurb">
      <img className="header" src="/assets/images/intro-dog.jpg" alt=""/>
      <img className="icon" src="/assets/images/icon.jpg" alt="icon" />
      <h1>{props.kennel}'s Dream Kennel</h1>
      <p>Ever wanted to have loads of dogs but don't have the resources? Make your list of dream dogs here! All types of dogs welcome.</p>
      <button className="btn btn-danger"><Link to="/dogs/new">Add Dog</Link></button>
    </div>
  );
}

export default Blurb;
