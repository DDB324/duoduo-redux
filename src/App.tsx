import React, {ChangeEvent, useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {store} from './store';
import {changeInputAction, clickBtnAction, deleteItemAction, getTodoList} from './store/actionCreator';
import {TodoListUI} from './TodoListUI';


const App: React.FC = () => {
  const [state, setState] = useState(store.getState());

  //订阅store,更新的时候调用setState来更新UI
  store.subscribe(() => setState(store.getState()));

  //用dispatch来传入操作,可以是对象也可以是函数
  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    store.dispatch(changeInputAction(e.target.value));
  };

  const clickBtn = () => {
    store.dispatch(clickBtnAction());
  };

  const deleteItem = (index: number) => {
    store.dispatch(deleteItemAction(index));
  };

  //受控input组件,value和onChange事件
  useEffect(() => {
    store.dispatch(getTodoList());
  }, []);
  return (
    <TodoListUI
      state={state}
      changeInputValue={changeInputValue}
      clickBtn={clickBtn}
      deleteItem={deleteItem}/>
  );
};

export default App;
