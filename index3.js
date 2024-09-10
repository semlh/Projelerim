document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('emailFormm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Sayfanın yeniden yüklenmesini engeller

            // Form elemanlarını al
            const nameElement = document.getElementById('name');
            const emailElement = document.getElementById('email');
            const phoneElement = document.getElementById('phone');
            const messageElement = document.getElementById('message');
            
            // Değişkenlere atama
            const name = nameElement ? nameElement.value : '';
            const email = emailElement ? emailElement.value : '';
            const phone = phoneElement ? phoneElement.value : '';
            const messageContent = messageElement ? messageElement.value : '';

            // Form doğrulaması
            if (!name || !email || !phone || !messageContent) {
                alert('Lütfen tüm alanları doldurun.');
                return;
            }

            // E-posta formatı kontrolü
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email)) {
                alert('Geçerli bir e-posta adresi girin.');
                return;
            }

            // E-posta konusunu ve içeriğini ayarlama
            const subject = 'Yeni İletişim Formu Mesajı';
            const body = Ad: ${name}\nEmail: ${email}\nTelefon: ${phone}\nMesaj: ${messageContent};

            // mailto protokolü ile e-posta oluşturma
            const mailtoLink = mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)};

            // E-posta istemcisinde yeni e-posta açma
            window.location.href = mailtoLink;
        });
    } else {
        console.error('Form bulunamadı.');
    }
});