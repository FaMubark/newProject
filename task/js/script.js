$(document).ready(function(){
let imgs = $('img');
let imgDetials = $('imgDetials');
// console.log(imgs);
// imgs.on('mouseenter', createElement)
// imgs.on('mouseleave', removeElement)
imgs.hover(createElement, removeElement)
imgs.on('mousemove', moveElement)
imgs.on('click', showDetails)

const myModal = document.getElementById('myModal')

function createElement(){
//  console.log(this.src);
 //$('body').append(`<img src=${this.src} alt="" id="newImage">`)
      
}
function showDetails(){
    // console.log("leave");
    $('#imgDetials').remove();
    myModal.show();
    var img = $('<img />', {
        src     : this.src,
        'class' : 'fullImage'
    });

$('.imgDetials').html(img).show();
  
    }
function removeElement(){
// console.log("leave");
 
 
$('#newImage').remove();
}

function moveElement(e){
    // console.log("hi");
 
    $('#newImage').css({
        top: e.clientY,
        left: e.clientX + 35
    })
}



})