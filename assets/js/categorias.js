const $ = (id) => document.querySelector(id);

$('#menuCategorias').addEventListener('mouseenter', () => {
    criandoCaixa();
});

$('#menuCategorias').addEventListener('mouseleave', () => {
    destruindoCaixa();
})

function createElement(elm, id) {
    const element = document.createElement(elm);
    element.setAttribute('id', id);

    return element
}

function criandoCaixa(){
    const box = createElement('div', 'categoriasBox');
    box.classList.add('menu-categorias');
    adicionandoCategorias(box);
    $('#menuCategorias').appendChild(box)
}

function adicionandoCategorias (elm){
    const categorias = [
        {
            name: 'Romance',
            page: 'romance'
        }
    ];

    for(let i in categorias){
        const p = document.createElement('p');
        const a = createElement('a');
        p.classList.add('categorias');

        a.innerText = categorias[i];
        p.appendChild(a);
        elm.appendChild(p);
    }
}

function destruindoCaixa(){
    const box = $('#categoriasBox');
    if(box) {
        box.remove();
    }
}