var list = document.getElementById('event');

const addEvent = () => {
   if (list.value!=='') {
    const childList = document.createElement('div');
    childList.className = 'list-child flex flex-row justify-between pr-3'; 
    const item = document.createElement('div');
    item.className = 'items ';
    item.style.padding = '10px';
    childList.style.borderBottom = '2px solid lightslategray';
    var text = document.createTextNode(list.value);
    document.getElementById("list").appendChild(childList);
    childList.appendChild(item)
    
    const del = document.createElement('button');
    del.className = 'btn';
    item.appendChild(text);
    childList.appendChild(del);
    const icon1 = document.createElement('i');
    icon1.className = "fa fa-trash";
    del.appendChild(icon1);
    
    const itemView  = document.getElementsByClassName('items');
     for (const i of Array.from(itemView)) {
        console.log(i.target);

        i.addEventListener("click", (e) => {
            
          });
     }
   }
    list.value = '';
}


function deleteItem() {

}

/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */

{/* <button class="btn"><i class="fa fa-trash"></i></button> */}