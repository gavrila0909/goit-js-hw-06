

const scrollbar = document.getElementById('font-size-control');
const text = document.getElementById('text');

scrollbar.addEventListener ('input', () =>{
    text.style.fontSize = `${scrollbar.value}px`;
})
