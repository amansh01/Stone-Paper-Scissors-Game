
let cnt_you=0
let cnt_comp=0


const choices = document.querySelectorAll(".same");//isse saare images ke option aa jaayenge
choices.forEach((choice)=>{ // ye never ending loop hai jisse hum baar baar images pe click kar paayenge
  //ab choice me click event daal denge jisse patah lag jaayega kiss image pe click kiya hai
choice.addEventListener("click",()=>{
 let img_id=choice.getAttribute("id") //this will get id of image which was clicked 
  console.log("image was clicked with id ",img_id)
  // 1 ---> stone
// 2----> paper
// 3----> scissors
  let randomNumber = Math.floor(Math.random() * 3) + 1;//this is a way to generate random between 1 ,2 ,3
  let your_num
if(img_id==="stone")
{
your_num=1
}
else if(img_id==="paper")
{
  your_num=2
}
else 
your_num=3

if((your_num===1 && randomNumber===3) ||(your_num===2 && randomNumber===1) ||(your_num===3 && randomNumber===2) )
{
  cnt_you++
console.log("you won")
let content = document.getElementById("your_score");//ab isse paragraph ki value change hogi
content.textContent=cnt_you
let message=document.getElementById("your_message");
message.textContent="You won"
message.style.backgroundColor="green"
}
else if((your_num===3 && randomNumber===1) ||(your_num===1 && randomNumber===2) ||(your_num===2 && randomNumber===3) )
{
  cnt_comp++
console.log("computer won")
let content = document.getElementById("Comp_score");
content.textContent=cnt_comp
let message=document.getElementById("your_message");
message.textContent="Comp won"
message.style.backgroundColor="red"
}
else {
  console.log("draw")
  let message=document.getElementById("your_message");
message.textContent="draw"
}

})
})

