import React from 'react';
import {connect} from 'react-redux'
import {State} from './store/reducer';

type Props = {
  inputPlaceHolder?:string
}

export const TodoListUI2:React.FC<Props> = (props)=>{
  const {inputPlaceHolder} = props
  return (
    <div>
      <button>{inputPlaceHolder}</button>
    </div>
  )
}

const stateToProps = (state:State)=>{
  return {
    inputPlaceHolder: state.inputPlaceHolder
  }
}


export default connect(stateToProps,null)(TodoListUI2)