import {ADD_ITEM, CHANGE_INPUT, DELETE_ITEM, GET_LIST} from './actionType';
import axios from 'axios';
import {Action} from './reducer';

const changeInputAction = (value: string) => ({
  type: CHANGE_INPUT,
  value
});

const clickBtnAction = () => ({type: ADD_ITEM});

const deleteItemAction = (index: number) => ({
  type: DELETE_ITEM,
  value: index
});

const getListAction = (data: string[]) => ({
  type: GET_LIST,
  value: data
});

const getTodoList = () => {
  return (dispatch: (action:Action)=>void) => {
    axios.get('http://mock.51y.cc:81/mock/6050b74d32adfa0499d3bc1a/example/getList')
      .then((res) => {
        const data: string[] = res.data.data.list;
        dispatch(getListAction(data));
      });
  };
};

export {
  changeInputAction,
  clickBtnAction,
  deleteItemAction,
  getListAction,
  getTodoList
};