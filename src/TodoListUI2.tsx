import React, {ChangeEvent} from 'react';
import {connect} from 'react-redux';
import {State} from './store/reducer';
import {changeInputAction} from './store/actionCreator';

type Props = {
  inputPlaceHolder?: string
  inputChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const TodoListUI2: React.FC<Props> = (props) => {
  const {inputPlaceHolder, inputChange} = props;
  return (
    <div>
      <input type="text"
             placeholder={inputPlaceHolder}
             onChange={inputChange}
      />
      <button>提交</button>
    </div>
  );
};

const stateToProps = (state: State) => {
  return {
    inputPlaceHolder: state.inputPlaceHolder
  };
};

const dispatchToProps = (dispatch: any) => {
  return {
    inputChange(e: ChangeEvent<HTMLInputElement>) {
      dispatch(changeInputAction(e.target.value));
    }
  };
};

export default connect(stateToProps, dispatchToProps)(TodoListUI2);