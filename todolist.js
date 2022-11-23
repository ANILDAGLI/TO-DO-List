// sil butonu çalış

//let sil_butonu = document.getElemntById('sil-butonu');

let yazi_alani = document.getElementById('yazi-alani');
let ekle_butonu = document.getElementById('ekle-butonu');
let liste = document.getElementById('liste');
let element = document.getElementsByTagName('li');

ekle_butonu.addEventListener('click', () => {
    let deger = yazi_alani.value;
    if(!deger.length) return alert('Yazı kutusunu boş bırakamazsanız!')
    let li = document.createElement('li');
    li.innerText =deger;
    liste.insertBefore(li, liste.childNodes[0]);
    yazi_alani1.value = "";
});

liste.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('tamamlandi');
}
});

