import React from 'react';


export const ProductAPI = new Promise((resolve,reject)=>{
    resolve([
        {id:1,price:130,produc:'item 1',description:'descripcion 1', stock:'4'},
        {id:2,price:260,produc:'item 2',description:'descripcion 2', stock:'6'},
        {id:3,price:340,produc:'item 3',description:'descripcion 3', stock:'4'},
        {id:4,price:280,produc:'item 4',description:'descripcion 4', stock:'3'},
        {id:5,price:120,produc:'item 5',description:'descripcion 5', stock:'6'},
        {id:6,price:1450,produc:'item 6',description:'descripcion 6', stock:'23'},
        {id:7,price:2550,produc:'item 7',description:'descripcion 7', stock:'15'},
        {id:8,price:1210,produc:'item 8',description:'descripcion 8', stock:'2'},
        {id:9,price:5610,produc:'item 9',description:'descripcion 9', stock:'1'},
        {id:10,price:4350,produc:'item 10',description:'descripcion 10', stock:'0'},
        {id:11,price:2450,produc:'item 11',description:'descripcion 11', stock:'12'},
        {id:12,price:7150,produc:'item 12',description:'descripcion 12', stock:'11'},
        {id:13,price:5150,produc:'item 13',description:'descripcion 13', stock:'9'},
        {id:14,price:3450,produc:'item 14',description:'descripcion 14', stock:'7'},
        {id:15,price:4350,produc:'item 15',description:'descripcion 15', stock:'6'},
        {id:16,price:5450,produc:'item 16',description:'descripcion 16', stock:'5'}])
    //reject('ERROR');
});