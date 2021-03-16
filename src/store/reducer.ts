import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionType';

export type State = {
  inputValue: string | undefined
  inputPlaceHolder: string
  list: string[]
}
type Action = {
  type: string
  value?: string | number | string[]
}

const defaultState: State = {
  inputValue: '',
  inputPlaceHolder: '写点什么',
  list: []
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

  //获取的list数据
  if (action.type === GET_LIST) {
    newState.list = action.value as string[];
  }
  return newState;
};

export {reducer};