
let yazi_alani = document.getElementById('yazi-alani');
let ekle_butonu = document.getElemntById('ekle-butonu');
let liste = document.getElementById('liste');
let element = document.getElementsByTagName('li');

ekle_butonu.addEventListener('click', () => {
    let deger = yazi_alani.value;
    if(!deger.length) return alert('Yazı kutusunu boş bırakamazsanız!')
    let li = document.createElement('li');
    li.innerText =deger;
    liste.insertBefore(li, liste.childNodes[0]);
    yazi_alani.value = "";
});

liste.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('tamamlandi');
}
});
