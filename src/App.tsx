import React, {ChangeEvent, useState} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import {store} from './store';
import {changeInputAction, clickBtnAction, deleteItemAction} from './store/actionCreator';


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
