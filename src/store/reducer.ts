import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './actionType';

type State = {
  inputValue: string | undefined
  inputPlaceHolder: string
  list: string[]
}
type Action = {
  type: string
  value?: string | number
}

const defaultState: State = {
  inputValue: '',
  inputPlaceHolder: '写点什么',
  list: [
    '早上10点面试',
    '下午2点面试'
  ]
};

const reducer = (state = defaultState, action: Action) => {
  if (action.type === CHANGE_INPUT) {
    let newState: State = JSON.parse(JSON.stringify(state));
    if (typeof action.value === 'string') newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_ITEM) {
    let newState: State = JSON.parse(JSON.stringify(state));
    newState.inputValue && newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.value, 1);
    return newState;
  }
  return state;
};

export {reducer};