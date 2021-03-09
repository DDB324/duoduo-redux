import React from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import {store} from './store'

function App() {
  const state = store.getState()
  return (
    <div style={{margin:'10px'}}>
    <Input placeholder={state.inputValue}
           style={{width:'250px',marginRight:'10px'}} />
    <Button type='primary'>增加</Button>
      <div style={{margin:'10px',width:'300px'}}>
        <List
        bordered
        dataSource={state.list}
        renderItem={item=><List.Item>{item}</List.Item>}
        />
      </div>
    </div>
  );
}

export default App;
