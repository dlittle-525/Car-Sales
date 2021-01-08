import { ADD_FEATURE, REMOVE_FEATURE } from '../reducers/carReducer';

export const addFeature = feature => {
    return {type: ADD_FEATURE, payload: feature}
};

export const removeFeature = feature => {
    return {type: REMOVE_FEATURE, payload: feature}
};