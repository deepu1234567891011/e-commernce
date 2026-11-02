// shopbtn
document.addEventListener("DOMContentLoaded",function(){
    let btn=document.getElementById("shopbtn")
    if(btn){
    btn.addEventListener("click",function(){

        alert("Welcome to Fresh veggiess!!")
})
    }


// +button
let allplus=document.querySelectorAll(".plus");
allplus.forEach(function(plusbtn){
    plusbtn.addEventListener("click",function(){
        let qtyspan=this.parentElement.querySelector(".qty");
        let count=Number(qtyspan.textContent);
        count=count+1;
        qtyspan.textContent=count;
    })
})
// -button
let allminus=document.querySelectorAll(".minus");
allminus.forEach(function(minusbtn){
    minusbtn.addEventListener("click",function(){
        let qtyspan=this.parentElement.querySelector(".qty");
        let count=Number(qtyspan.textContent);
        if(count>0){
            count=count-1;
            qtyspan.textContent=count;

        }
        
    })
})
 })
