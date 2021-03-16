import React, {ChangeEvent, useState} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import {store} from './store';
import {ADD_ITEM, CHANGE_INPUT, DELETE_ITEM} from './store/actionType';

const App: React.FC = () => {
  const [state, setState] = useState(store.getState());

  //订阅store,更新的时候调用setState来更新UI
  store.subscribe(() => setState(store.getState()));

  //用dispatch来传入操作和值
  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const action = {
      type: CHANGE_INPUT,
      value: e.target.value
    };
    store.dispatch(action);
  };

  const clickBtn = () => {
    const action = {
      type: ADD_ITEM
    };
    store.dispatch(action);
  };

  const deleteItem = (index: number) => {
    const action = {
      type: DELETE_ITEM,
      value: index
    };
    store.dispatch(action);
  };

  //受控input组件,value和onChange事件
  return (
    <div style={{margin: '10px'}}>
      <Input placeholder={state.inputPlaceHolder}
             style={{width: '250px', marginRight: '10px'}}
             onChange={changeInputValue}
             value={state.inputValue}
      />
      <Button type='primary' onClick={clickBtn}>增加</Button>
      <div style={{margin: '10px', width: '300px'}}>
        <List
          bordered
          dataSource={state.list}
          renderItem={(item, index) => <List.Item onClick={() => deleteItem(index)}>{item}</List.Item>}
        />
      </div>
    </div>
  );
};

export default App;
