var polish = document.getElementById('pl_click'),
    english = document.getElementById('en_click'),
    pl_txt = document.querySelectorAll('#pl'),
    en_txt = document.querySelectorAll('#en'),
    nb_pl = pl_txt.length,
    nb_en = en_txt.length;

polish.addEventListener('click', function() {
    langue(polish,english);
}, false);

english.addEventListener('click', function() {
    langue(english,polish);
}, false);

function langue(langueOn,langueOff){
    if (!langueOn.classList.contains('current_lang')) {
        langueOn.classList.toggle('current_lang');
        langueOff.classList.toggle('current_lang');
    }
    if(langueOn.innerHTML == 'pl'){
        afficher(pl_txt, nb_pl);
        cacher(en_txt, nb_en);
    }
    else if(langueOn.innerHTML == 'En'){
        afficher(en_txt, nb_en);
        cacher(pl_txt, nb_pl);
    }
}

function afficher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'block';
    }
}
function cacher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'none';
    }
}
function init(){
    langue(polish,english);
}
init();