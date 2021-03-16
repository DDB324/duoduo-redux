import {ADD_ITEM, CHANGE_INPUT, DELETE_ITEM, GET_LIST} from './actionType';

const changeInputAction = (value: string) => ({
  type: CHANGE_INPUT,
  value
});

const clickBtnAction = () => ({type: ADD_ITEM});

const deleteItemAction = (index: number) => ({
  type: DELETE_ITEM,
  value: index
});

const getListAction = (data:string[]) => ({
  type: GET_LIST,
  value: data
});

export {changeInputAction, clickBtnAction, deleteItemAction,getListAction};