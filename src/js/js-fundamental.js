const jsFundamental = ()=>{

    console.log('a')
    const button =  document.querySelector('button');
    button ? button.addEventListener('click',hi):console.log('null');

    function hi(){
        console.log('hola')
    }

}

export default jsFundamental;