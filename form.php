<?php
$servername = "localhost";
$username = "root";
$password = "Mebant.123123";
$dbname = "esk";

// Veritabanına bağlan
$conn = new mysqli($servername, $username, $password, $dbname);

// Bağlantı kontrolü
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan verileri alın
    $name = $_POST['name'];
    $email = $_POST['email'];
    $soyad = $_POST['soyad'];
    $phone = $_POST['phone'];
    $sehir = $_POST['sehir'];
    $mekan = $_POST['mekan'];
    $yemek = $_POST['yemek'];
    $message = $_POST['message'];
    $suggestions = $_POST['suggestions'];

    // SQL sorgusunu hazırlayın
    $sql = "INSERT INTO experiences (name, email, soyad, phone, sehir, mekan, yemek, message, suggestions) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        die('Prepare failed: ' . $conn->error);
    }
    $stmt->bind_param("sssssssss", $name, $email, $soyad, $phone, $sehir, $mekan, $yemek, $message, $suggestions);

    // Verileri veritabanına ekleyin
    if ($stmt->execute()) {
        echo "Yeni kayıt başarıyla eklendi";
    } else {
        echo "Hata: " . $stmt->error;
    }

    // Bağlantıyı kapatın
    $stmt->close();
    $conn->close();
}
?>
