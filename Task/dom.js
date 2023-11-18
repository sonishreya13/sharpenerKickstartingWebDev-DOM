let headerTitle= document.getElementById('header-title')
let header= document.getElementById('main-header')
header.style.borderBottom= 'black 3px solid';
let addItem= document.getElementsByClassName('title')
// console.log(addItem);
addItem[0].style.color= "green";
addItem[0].style.fontWeight= "bold";
let groupList= document.getElementsByClassName('list-group-item')
groupList[2].style.backgroundColor="green"
for (let i = 0; i < groupList.length; i++) {
    groupList[i].style.fontWeight = 'bold'; // Apply the style change to each element
  }
  let li= document.getElementsByTagName('li')
for (let i = 0; i < li.length; i++) {
    li[i].style.fontWeight = 'bold'; // Apply the style change to each element
  }