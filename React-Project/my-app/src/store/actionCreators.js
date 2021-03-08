import {CHANGEINPUT,ADDITEM,DELETEITEM,INIT_LIST_ACTION} from './actionTypes'
export const getInputChangeAction = (value) => ({
    type:CHANGEINPUT,
    value
})

export const clickButton = () => ({
    type:ADDITEM
})

export const getDeleteItem = (index) => ({
    type:DELETEITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

