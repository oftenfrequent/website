import { Map, fromJS } from 'immutable';
import info from './data/resumeInfo'

const initialState = fromJS(info);

const initalState = {
	main: initialState
}

export default initalState