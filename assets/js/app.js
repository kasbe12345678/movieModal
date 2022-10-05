//alert('hello')
let cl=console.log;

//=============dom selection declarations===================
const showmodalBtn=document.getElementById('showmodal');
const backdrop=document.getElementById('backdrop');
const mymodal=document.getElementById('mymodal');
const myclose=Array.from(document.querySelectorAll('.myclose')); 

//==================callback functions==========

const showmodalhandler = function(){
        //cl('clicked');
        backdrop.classList.remove('d-none');
        mymodal.classList.remove('d-none');


}
const hidemodalhandler=function(){
    backdrop.classList.add('d-none');
     mymodal.classList.add('d-none');
        
}






//===============Event Binding======================
showmodalBtn.addEventListener('click', showmodalhandler);
backdrop.addEventListener('click', hidemodalhandler)

myclose.forEach(function(ele){
    ele.addEventListener('click', hidemodalhandler)
})


//==========function declaration===========
