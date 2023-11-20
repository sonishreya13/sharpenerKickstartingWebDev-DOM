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

// var itemList= document.querySelectorAll('.list-group-item')
// itemList[2].style.color= "green"
// var odd= document.querySelectorAll('.list-group-item:nth-child(odd)')
// for(let i=0;i<odd.length; i++){
// odd[i].style.backgroundColor="green"
// }



// TRAVERSING DOM

//ParentNode

// var listItems= document.querySelector('#items')
// console.log(listItems)
//console.log(listItems.parentNode)
// console.log(listItems.parentNode.parentNode)

//ParentElement
//console.log(listItems.parentElement)
// console.log(listItems.parentElement.parentElement)

//ChildNodes
// console.log(listItems.childNodes)
// console.log(listItems.children)
// console.log(listItems.children[2])

//FirstChild
// console.log(listItems.firstChild)


//firstElementChild
// console.log(listItems.firstElementChild)

//lastchild
// console.log(listItems.lastChild)

//lastelementchild
// console.log(listItems.lastElementChild)


//nextsibling
// console.log(listItems.nextSibling)

//nextelementsibling
// console.log(listItems.nextElementSibling)

// previoussibling
// console.log(listItems.previousSibling)

//previouselementsibling
// console.log(listItems.previousElementSibling)

//createelement
var newDiv= document.createElement('div')
// console.log(newDiv)
newDiv.className= 'myClass'
newDiv.id= 'myID'
//setAttribute
newDiv.setAttribute('title', 'HelloTitle')

//createtesxtnode
var newDivText = document.createTextNode('Hello')
// console.log(newDivText)

//appendchild
newDiv.appendChild(newDivText)

var container= document.querySelector('header .container')
var h1= document.querySelector('header h1')
// console.log(newDiv)
container.insertBefore(newDiv, h1);

// var container2= document.querySelector('title .container')
// var li= document.querySelector('title li')
// container2.insertBefore(newDiv,li)

