import React from 'react';


export const task = new Promise((resolve,reject)=>{
    resolve([
        {id:1,price:130,produc:'item 1',description:'descripcion 1', stock:'4'},
        {id:2,price:260,produc:'item 2',description:'descripcion 2', stock:'6'},
        {id:3,price:340,produc:'item 3',description:'descripcion 3', stock:'4'},
        {id:4,price:280,produc:'item 4',description:'descripcion 4', stock:'3'},
        {id:5,price:120,produc:'item 5',description:'descripcion 5', stock:'6'}
    ])
    //reject('ERROR');
});