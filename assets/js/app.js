//alert('hello')
let cl=console.log;

//=============dom selection declarations===================
const showmodalBtn=document.getElementById('showmodal');
const backdrop=document.getElementById('backdrop');
const mymodal=document.getElementById('mymodal');
const movieinfo=document.getElementById('movieinfo');
const myclose=Array.from(document.querySelectorAll('.myclose')); 
const movieform=document.getElementById('movieform');
const title=document.getElementById('title');
const imageUrl=document.getElementById('imageUrl');
const rating=document.getElementById('rating');


let moviearr=[];

//==================callback functions==========

const showmodalhandler = function(){
        //cl('clicked');
        backdrop.classList.remove('d-none');
        mymodal.classList.remove('d-none');


}
const hidemodalhandler = function(){
    backdrop.classList.add('d-none');
     mymodal.classList.add('d-none');
        
}


const onmovieaddhandler = function(eve){        
        eve.preventdefault();
        //cl(eve.target);
        let obj={
            title:title.value,
            imageUrl:imageUrl.value,
            rating:rating.value,

        }
        cl(obj);
        moviearr.push(obj);
        templating(moviearr);

       // eve.target.reset();
       this.reset();
       hidemodalhandler();
}




//===============Event Binding======================
showmodalBtn.addEventListener('click', showmodalhandler);
backdrop.addEventListener('click', hidemodalhandler)

myclose.forEach(function(ele){
    ele.addEventListener('click', hidemodalhandler)
})

movieform.addEventListener('submit', onmovieaddhandler);

function templating(arr){
    let result="";
    arr.forEach(function(ele){
        result+=`
        <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <figure>
                            <h3>${ele.title}</h3>
                            <img src="${ele.imageUrl}" alt="">
                            <figcaption>
                                <p>
                                ${ele.rating}
                                    /5
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        `
        movieinfo.innerHTML=result;
    })
}

//==========function declaration===========
