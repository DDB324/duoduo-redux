import React, {ChangeEvent, useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {store} from './store';
import {changeInputAction, clickBtnAction, deleteItemAction, getListAction} from './store/actionCreator';
import {TodoListUI} from './TodoListUI';
import axios from 'axios';


const App: React.FC = () => {
  const [state, setState] = useState(store.getState());

  //订阅store,更新的时候调用setState来更新UI
  store.subscribe(() => setState(store.getState()));

  //用dispatch来传入操作和值
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
    axios.get('http://mock.51y.cc:81/mock/6050b74d32adfa0499d3bc1a/example/getList')
      .then((res) => {
        const data: string[] = res.data.data.list;
        store.dispatch(getListAction(data));
      });
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
