import React from 'react';
import AddedFeature from './AddedFeature';
import { useSelector, connect } from 'react-redux';
import { removeFeature } from '../actions/carActions';

const AddedFeatures = props => {
  const features = useSelector( state => state.car.features)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map(item => (
            <AddedFeature removeFeature={props.removeFeature} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  removeFeature
}

export default connect(null, mapDispatchToProps)(AddedFeatures);
