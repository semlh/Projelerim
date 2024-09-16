const button=document.getElementById('darkmode');
const body= document.body
const navs= document.getElementById('darkmodnav');
const button1=document.getElementById('anamenubtn');
const ayuak=document.getElementById('footers');
const ulyaz=document.getElementById('yazıssd');




button.addEventListener('click',()=>
    {
        ulyaz.classList.toggle('ullyaz')
        ayuak.classList.toggle('foot')
        button.classList.toggle('darkmodel')
        button1.classList.toggle('darkmode2')
        body.classList.toggle('darkmods')
        navs.classList.toggle('darkmod1')
    });