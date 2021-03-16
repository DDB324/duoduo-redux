import {ADD_ITEM, CHANGE_INPUT, DELETE_ITEM} from './actionType';

const changeInputAction = (value: string) => ({
  type: CHANGE_INPUT,
  value
});

const clickBtnAction = () => ({type: ADD_ITEM});

const deleteItemAction = (index: number) => ({
  type: DELETE_ITEM,
  value: index
});

export {changeInputAction, clickBtnAction, deleteItemAction};