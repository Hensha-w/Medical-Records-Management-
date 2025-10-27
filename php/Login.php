<?php
// login.php
session_start();
header('Content-Type: text/html; charset=utf-8');

// ---- Configuration (replace with your DB credentials) ----
$dbHost = '127.0.0.1';
$dbName = 'hospital_db';
$dbUser = 'db_user';
$dbPass = 'db_pass';

// helper: sanitize
function clean($v) {
    return trim(htmlspecialchars($v, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = isset($_POST['email']) ? clean($_POST['email']) : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    // basic server-side validation
    if (empty($email) || empty($password)) {
        die('Email and password are required. <a href="index.html">Go back</a>');
    }

    // Option 1: Try DB auth (recommended)
    try {
        $pdo = new PDO("mysql:host={$dbHost};dbname={$dbName};charset=utf8mb4", $dbUser, $dbPass, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]);

        $stmt = $pdo->prepare('SELECT id, email, password_hash, role FROM users WHERE email = :email LIMIT 1');
        $stmt->execute([':email' => $email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password_hash'])) {
            // success
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_email'] = $user['email'];
            $_SESSION['role'] = $user['role'];
            header('Location: dashboard.php'); // adjust destination as appropriate
            exit;
        } else {
            echo 'Invalid email or password. <a href="index.html">Try again</a>';
            exit;
        }
    } catch (PDOException $e) {
        // DB not available or misconfigured -> fallback demo login
        // In production, do NOT expose raw errors
        // For now, log error and continue to fallback.
        error_log('DB error: ' . $e->getMessage());
    }

    // Option 2: Demo fallback (for testing without DB)
    // Hardcoded demo credentials
    $demoEmail = 'demo@hospital.com';
    $demoPassword = 'Password123'; // for demo only

    if ($email === $demoEmail && $password === $demoPassword) {
        $_SESSION['user_id'] = 1;
        $_SESSION['user_email'] = $demoEmail;
        $_SESSION['role'] = 'patient';
        header('Location: dashboard.php');
        exit;
    } else {
        echo 'Login failed (demo). Use demo@hospital.com / Password123 or set up the database. <a href="index.html">Back</a>';
        exit;
    }
} else {
    header('Location: index.html');
    exit;
}
?>