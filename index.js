let inputBx = document.querySelector ('#inputBx');
let list = document.querySelector ('#list');

inputBx.addEventListener ('keyup', (e) => {
    let value = inputBx.value;
    if (e.key == 'Enter') {
        let item = document.createElement ('li');
        item.id = 'li';
        item.innerHTML = `<span>${value}</span><i></i>`;
        list.appendChild (item);
        inputBx.value = '';
        item.querySelector("i").addEventListener('click', () => {
            item.remove();
        })
        item.addEventListener ("click", (e) => {
            e.target.classList.toggle('done');
        })
    }
    
});

list.addEventListener ('click', (e) => {
    e.target.style.textDecoration = 'line-through';
});




