import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import { addFeature }from "../actions/carActions";

const AdditionalFeatures = props => {
  console.log("props: ", props);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AdditionalFeature addFeature={props.addFeature} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("state: ", state);
  return{
    features: state.additionalFeatures
  }
};

const mapDispatchToProps = {
  addFeature
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeatures);
