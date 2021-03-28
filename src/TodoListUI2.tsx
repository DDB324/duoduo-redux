import React, {ChangeEvent} from 'react';
import {connect} from 'react-redux';
import {State} from './store/reducer';
import {changeInputAction, clickBtnAction, deleteItemAction} from './store/actionCreator';

type Props = {
  inputPlaceHolder?: string
  inputChange?: (e: ChangeEvent<HTMLInputElement>) => void
  clickBtn?: () => void
  inputValue?: string
  list: string[]
  deleteItem?: (index: number) => void
}

export const TodoListUI2: React.FC<Props> = (props) => {
  const {inputPlaceHolder, inputValue, list, inputChange, clickBtn, deleteItem} = props;
  return (
    <div>
      <input type="text"
             placeholder={inputPlaceHolder}
             onChange={inputChange}
             value={inputValue}
      />
      <button onClick={clickBtn}>提交</button>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={index} onClick={()=>deleteItem?.(index)}>{item}</li>
            );
          })
        }
      </ul>
    </div>
  );
};

const stateToProps = (state: State) => {
  return {
    inputPlaceHolder: state.inputPlaceHolder,
    inputValue: state.inputValue,
    list: state.list
  };
};

const dispatchToProps = (dispatch: any) => {
  return {
    inputChange(e: ChangeEvent<HTMLInputElement>) {
      dispatch(changeInputAction(e.target.value));
    },
    clickBtn() {
      dispatch(clickBtnAction());
    },
    deleteItem(index: number) {
      dispatch(deleteItemAction(index));
    }
  };
};

export default connect(stateToProps, dispatchToProps)(TodoListUI2);