import {Input, Button, List} from 'antd';
import React, {ChangeEvent} from 'react';
import {State} from './store/reducer';

type Props = {
  state: State
  changeInputValue: (e: ChangeEvent<HTMLInputElement>) => void
  clickBtn: () => void
  deleteItem: (index: number) => void
}

const TodoListUI: React.FC<Props> = (props) => {
  const {state, changeInputValue, clickBtn, deleteItem} = props;
  return (<div style={{margin: '10px'}}>
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
        renderItem={
          (item, index) => (
            <List.Item
              onClick={() => deleteItem(index)}>
              {item}
            </List.Item>
          )
        }
      />
    </div>
  </div>);
};

export {TodoListUI};