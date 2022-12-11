let keys=document.querySelectorAll("#keyboard > div");
let bag="";
keys.forEach(function(el){
    el.addEventListener("click",myCal);
})

function myCal(event){
    let res=event.target.innerText;
    // bag+=res
    if(res==="C"){
        bag=""
        document.querySelector("#plus").value="";
    }else if(res==="="){
            if(document.getElementById("plus").value==="undefined"){
                document.getElementById("plus").value="Please fill Some numbers"
            }else{
            document.querySelector("#plus").value=eval(bag);
            }
    }else{
        bag+=res;
        document.querySelector("#plus").value=bag;
    }
    


}




// let keys=document.querySelectorAll("#keyboard>div");

// keys.forEach(function(el){
//     el.addEventListener("click",myCal)
// });
// let bag="";
// function myCal(event){
    
//     let rest=(event.target.innerText);
    
//     if (rest==="C"){
//         bag=""
//         document.querySelector("#plus").value=""
//     }else if(rest==="="){
//         document.querySelector("#plus").value=eval(bag)
//     }
//     else{
//         bag+=rest
//         document.querySelector("#plus").value=bag
//     }
// }




















