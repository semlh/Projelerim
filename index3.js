const button=document.getElementById('darkmode');
const body= document.body

button.addEventListener('click',()=>
    {
        body.classList.toggle('darkmod')
    });

