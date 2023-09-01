//HTML COLLECTION
//1) LIVE COLLECTION:An HTML collection is a live collection, Which means that it is automatically Updated when the  DOM is modified.
//2) INDEXED ACCESS:Accessed using numeric indicies {eg: "collection[0]"}
//3)LIMITED METHODS:It supports fewer manipulation methods 


//NODE LISTS
//1)STATIC COLLECTION:doesn't automatically update with DOM changes 
//2)INDEXED ACCCESS:Accessed using numeric indicies {eg: "collection[0]"}
//RICHER METHODS: Support many Array methods


//Biggest diffrence between HTML COLLECTION and NODELIST is that html collection can only hold "node elements" while node list can hold many other thing such as; text e.t.c;


// const collectionItems = document.getElementsByClassName("item");
// const nodeItems = document.querySelectorAll("#todo-list");
// console.log(collectionItems,nodeItems);
// nodeItems.forEach(item => {
//   console.log(item.childNodes);
// });

//OR THIS WAY

// const collectionItem = document.getElementsByClassName("item");
// const nodeItem = document.querySelector("#todo-list");
// console.log(nodeItem.childNodes);

//Even using querySelector i can access Element Nodes 
// console.log(nodeItem.children);


// LOOPING

const collec = document.getElementsByClassName("item");
const node = document.querySelectorAll(".item");
for(item of node){
    console.log(node);
}
