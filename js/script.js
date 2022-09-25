$(document).ready(function(){

// ================================== js ======================================
// let para = document.querySelector('p');
// console.log(para);
// para.style.color="red"


// para.addEventListener('click',()=>{
//     alert("clicked")
// })

// let para = document.querySelectorAll('p');
// console.log(para);

// for(let i of para){
//     i.style.color = "red"

// }
// =================================== 2 ========================================
// let inp = document.querySelector('input')
// console.log(inp.getAttribute('type'));
// console.log(inp.setAttribute('type','password'));

// let para = document.querySelector('p')

// inp.addEventListener('keyup',()=>{
//     para.textContent=inp.value;
//     para.innerHTML=`<h1> ${inp.value} </h1>`
// })

// document.write('<h1> js append header </h1>')
// =================================== 4 ========================================
// let btn = document.querySelector('button')
// let diva = document.querySelector('div')

// btn.addEventListener('click',()=>{
// diva.style.display="block"
// })

// ================================== JQuery ======================================

// let para2 = $('p');
// console.log(para2);
// // para2.css('color','red')

// para2.css({
//     color: 'red',
//     backgroundColor : "aqua",
//     width : '50%',
//     fontSize : ' 50px'
// })

// // para2.on('click',()=>{
// //     alert('jquery')
// // })
// $('p:first-of-type').on('click',()=>{
//     alert('jquery')
// })



// =================================== 2 ========================================

// let inp = $('input')
// let para = $('p')

// inp.on('keyup',()=>{
//     // console.log("done");
//     // console.log(inp.val());
//     para.text(inp.val())
//     para.html(`<h1> ${inp.val()} </h1>`)
// })

// let test =para.attr('title');
// para.attr('title','hello')
// let tes2 = para.attr('title')
// console.log(tes2);


// =================================== 3 ========================================


// $('div').append('<h1> append JQuery </h1>')
// $('div').prepend('<h1> prepend JQuery </h1>','<input type="text">')
// $('div p:first-of-type').before('<input type="text">')
// $('div h1').after('<input type="text">')

// =================================== 4 ========================================
// let btn =$('button')
// let diva = $('div')

// btn.on('click',()=>{
// diva.css('display','block')
// diva.show(); 
// diva.show(1000);  // ms  1s =======> 1000 ms
// diva.hide(1000)
// diva.toggle(1000)
// diva.slideDown();
// diva.slideUP();
// diva.slideToggle(500);
// diva.fadeIn(500)
// diva.fadeOut(500)
// diva.fadeToggle(1000)
// diva.animate({
//     width : "20%",
//     opacity: "50%",
//     left : '1000px'
// },1000)

})





})