type State = {
  inputValue: string | undefined
  inputPlaceHolder: string
  list: string[]
}
type Action = {
  type: string
  value?: string
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
  if (action.type === 'changeInput') {
    let newState: State = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === 'addItem') {
    let newState: State = JSON.parse(JSON.stringify(state));
    newState.inputValue && newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  return state;
};

export {reducer};