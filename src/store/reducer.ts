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

const reducer = (state = defaultState, action: Action): State => {
  //深拷贝state
  let newState: State = JSON.parse(JSON.stringify(state));

  //changeInput
  if (action.type === CHANGE_INPUT && typeof action.value === 'string') {
    newState.inputValue = action.value;
  }

  //addItem
  if (action.type === ADD_ITEM) {
    newState.inputValue && newState.list.push(newState.inputValue);
    newState.inputValue = '';
  }

  //deleteItem
  if (action.type === DELETE_ITEM && typeof action.value === 'number') {
    newState.list.splice(action.value, 1);
  }
  return newState;
};

export {reducer};