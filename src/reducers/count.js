import { INCREMENT, DECREMENT } from '../action';

const initialValue = { value: 0 };

export default (state = initialValue, action) => {
  switch(action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state;
  }
}