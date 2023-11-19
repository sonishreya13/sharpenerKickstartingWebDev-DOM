//USE OF GETELEMENTBYID

// let headerTitle= document.getElementById('header-title')
// let header= document.getElementById('main-header')
// header.style.borderBottom= 'black 3px solid';

//USE OF GETELEMENTBYCLASSNAME


// let addItem= document.getElementsByClassName('title')
// // console.log(addItem);
// addItem[0].style.color= "green";
// addItem[0].style.fontWeight= "bold";
// let groupList= document.getElementsByClassName('list-group-item')
// groupList[2].style.backgroundColor="green"
// for (let i = 0; i < groupList.length; i++) {
//     groupList[i].style.fontWeight = 'bold'; // Apply the style change to each element
//   }

//Use of GETELEMENTBYTAGNAME


//   let li= document.getElementsByTagName('li')
// for (let i = 0; i < li.length; i++) {
//     li[i].style.fontWeight = 'bold'; // Apply the style change to each element
//   }

// Use of QUERYSELECTOR 

  // let secondItem= document.querySelector('#items :nth-child(2)');
  // secondItem.style.backgroundColor= "green"
  // let thirdItem= document.querySelector('#items :nth-child(3)');
  // thirdItem.style.display= "none"

  //Use of QUERYSELECTORALL

var itemList= document.querySelectorAll('.list-group-item')
itemList[2].style.color= "green"
var odd= document.querySelectorAll('.list-group-item:nth-child(odd)')
for(let i=0;i<odd.length; i++){
odd[i].style.backgroundColor="green"
}