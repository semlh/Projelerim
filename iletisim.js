const button=document.getElementById('darkmode');
const body= document.body
const navs= document.getElementById('darkmodnav');
const button1=document.getElementById('anamenubtn');
const ayuak=document.getElementById('footers');
const yazıb=document.getElementById('yazı');
const yazıb2=document.getElementById('yazı2');
const yazıb3=document.getElementById('yazı3');
const yazıb4=document.getElementById('yazı4');




button.addEventListener('click',()=>
    {
        
        yazıb.classList.toggle('yazıcss')
        yazıb2.classList.toggle('yazıcss1')
        yazıb3.classList.toggle('yazıcss2')
        yazıb4.classList.toggle('yazıcss3')
        ayuak.classList.toggle('foot')
        button.classList.toggle('darkmodel');
        button1.classList.toggle('darkmode2')
        body.classList.toggle('darkmods')
        navs.classList.toggle('darkmod1')
    });