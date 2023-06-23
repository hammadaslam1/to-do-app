var list = document.getElementById('event');

const addEvent = () => {
   if (list.value!=='') {
    const item = document.createElement('div');
    item.className = 'items';
    item.style.padding = '10px';
    item.style.borderBottom = '2px solid lightslategray';
    var text = document.createTextNode(list.value);
    item.appendChild(text);
    document.getElementById("list").appendChild(item);
    const itemView  = document.getElementsByClassName('items');
     for (const i of Array.from(itemView)) {
        console.log(i.target);

        i.addEventListener("click", (e) => {
            console.log(e.target);
            e.target.style.color = 'red'
          });
     }
   }
    list.value = '';
}