function getSelectedValue() {
        // Selectbox elemanını seçiyoruz
        const selectBox = document.getElementById('mySelect');
        
        // Seçili seçeneğin değerini alıyoruz
        const selectedValue = selectBox.value;
        
        // Sonucu bir HTML öğesine yazıyoruz
        if(selectedValue=="Tramvay"){
            document.getElementById('result').innerText = `Seçilen değer: ${selectedValue}`;
            document.getElementById('resultds').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d12271.363392418498!2d30.635757633432945!3d39.7432257236094!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x14cc15faf81c8e17%3A0x410a6e978f35f1c6!2sEski%C5%9Fehir%20Sanayi%20Odas%C4%B1!3m2!1d39.743482!2d30.621663599999998!4m5!1s0x14cc3976107882d7%3A0xb33db2f8974b3d38!2zTUVCQU5UIMSwWk9MQVNZT04gVkUgQkFOVCBTQU5BWcSwIEEuxZ4uIEVTS8SwxZ5FSMSwUiBLQU1Qw5xTw5wgT1NCIDIzLiBDZC4gTm86MSBPc2IgMjYxMTAgT2R1bnBhemFyxLEvRXNracWfZWhpcg!3m2!1d39.746128399999996!2d30.6659622!5e0!3m2!1str!2str!4v1726125168094!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        }
        if(selectedValue=="Otobüs"){
            document.getElementById('result').innerText = `Seçilen değer: ${selectedValue}`;
            document.getElementById('resultds').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d20050.410543051326!2d30.60465775311609!3d39.74308639939585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x14cc175e139fd923%3A0x1ee5a88ce70681b1!2sEski%C5%9Fehir%20%C5%9Eehir%20Hastanesi!3m2!1d39.7481903!2d30.5951384!4m5!1s0x14cc3976107882d7%3A0xb33db2f8974b3d38!2zTUVCQU5UIMSwWk9MQVNZT04gVkUgQkFOVCBTQU5BWcSwIEEuxZ4uIEVTS8SwxZ5FSMSwUiBLQU1Qw5xTw5wgT1NCIDIzLiBDZC4gTm86MSBPc2IgMjYxMTAgT2R1bnBhemFyxLEvRXNracWfZWhpcg!3m2!1d39.746128399999996!2d30.6659622!5e0!3m2!1str!2str!4v1726125269605!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        }
        if(selectedValue=="Minibüs"){
            document.getElementById('result').innerText = `Seçilen değer: ${selectedValue}`;
            document.getElementById('resultds').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d20053.861860427103!2d30.613072158296063!3d39.73122371937368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x14cc3bf5d64ad80d%3A0xb3bd4d524249e2c6!2zT2RhcGFyayBEw7xnw7xuIFNhbG9ubGFyxLE!3m2!1d39.7325625!2d30.622183099999997!4m5!1s0x14cc3976107882d7%3A0xb33db2f8974b3d38!2zTUVCQU5UIMSwWk9MQVNZT04gVkUgQkFOVCBTQU5BWcSwIEEuxZ4uIEVTS8SwxZ5FSMSwUiBLQU1Qw5xTw5wgT1NCIDIzLiBDZC4gTm86MSBPc2IgMjYxMTAgT2R1bnBhemFyxLEvRXNracWfZWhpcg!3m2!1d39.746128399999996!2d30.6659622!5e0!3m2!1str!2str!4v1726125318397!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        }
    }