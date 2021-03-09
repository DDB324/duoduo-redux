import React from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'

const data = [
  '早上10点面试',
  '下午2点面试'
]

function App() {
  return (
    <div style={{margin:'10px'}}>
    <Input placeholder='写点什么' style={{width:'250px',marginRight:'10px'}} />
    <Button type='primary'>增加</Button>
      <div style={{margin:'10px',width:'300px'}}>
        <List
        bordered
        dataSource={data}
        renderItem={item=><List.Item>{item}</List.Item>}
        />
      </div>
    </div>
  );
}

export default App;
