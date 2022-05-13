const sideMenu = document.querySelector('.sideBarMenu');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector("#close-btn");


menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';

})
 closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';

}) 
  