var list = document.getElementById('event');

const addEvent = () => {
   if (list.value!=='') {
    const childList = document.createElement('div');
    childList.className = 'list-child flex flex-row justify-between pr-3'; 
    const item = document.createElement('div');
    item.className = 'items flex wrap-text max-w-[50%]';
    item.style.padding = '10px';

    childList.style.borderBottom = '2px solid lightslategray';
    var text = document.createTextNode(list.value);

    document.getElementById("list").appendChild(childList);
    childList.appendChild(item)



    const icons = document.createElement('div');
    icons.className = 'icons';
    childList.appendChild(icons);

    item.appendChild(text);
    
    const del = document.createElement('button');
    del.className = 'btn';
    icons.appendChild(del);
    const icon1 = document.createElement('i');
    icon1.className = "fa fa-trash text-white";
    
    
    del.addEventListener('click', () => {
        const child = icons.parentElement;
        child.remove();
      });
      del.appendChild(icon1);
      
      
      const edit = document.createElement('button');
      edit.className = 'btn';
      icons.appendChild(edit);
      const icon2 = document.createElement('i');
      icon2.className = "fas fa-pencil text-white";
      
      edit.addEventListener('click', () => {
        const ed = document.createElement('input')
        ed.className = "edit text-white"
        ed.style.backgroundColor = 'lightslategray';
        ed.style.height = "30px"
        ed.value = text.textContent;
        // console.log((text), text.textContent);
        
        item.replaceWith(ed);
        
        del.remove();
        edit.remove();
        done.remove();


      });

      edit.appendChild(icon2);
      
      const done = document.createElement('button');
      done.className = 'btn';
      icons.appendChild(done);
      const icon3 = document.createElement('i');
      icon3.className = "far fa-square-check text-white";

      done.addEventListener('click', () => {
        const children = childList.querySelectorAll('.child');
        childList.style.textDecoration = "line-through"
        

        childList.style.color = "green"
      });
      
      done.appendChild(icon3);


    const itemView  = document.getElementsByClassName('items');
     for (const i of Array.from(itemView)) {
        console.log(i.target);

        i.addEventListener("click", (e) => {
            
          });
     }
   }
    list.value = '';

    // const buttons = document.querySelectorAll('.list .list-child .btn');
    // buttons.forEach((del) => {
      
    // });
}





/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */

{/* <button class="btn"><i class="fa fa-trash"></i></button> */}


{/* <i class="fas fa-pen"></i> */}

{/* <i class="fab fa-mdb"></i> */}


{/* <i class="far fa-pen-to-square"></i> */}


{/* <i class="fas fa-pencil"></i> */}

{/* <i class="far fa-square-check"></i> */}

// done

{/* <i class="fa-duotone fa-check"></i> */}

{/* <i class="fas fa-check"></i> */}

{/* <i class="far fa-circle-check"></i> */}

{/* <i class="fa-solid fa-square-check"></i> */}