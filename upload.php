<?php

$params = [
    'host' => 'openserver',
    'dbname' => 'testdb',
    'user' => 'root',
    'password' => ''
];

$dsn = "mysql:host={$params['host']};dbname={$params['dbname']};charset=utf8";
try {
    $opt = array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    );
    $db = new PDO($dsn, $params['user'], $params['password'], $opt);

} catch (PDOException $e) {
    echo "DB error: " . $e->getMessage();
    exit();
}

if (isset($_POST['data'])) {
    $data = json_decode($_POST['data'], true);
    $query = "INSERT INTO `wowvendor`(`rock_position`, `round_time`, `jump_distance`, `rock_size`, `result`) VALUES (?, ?, ?, ?, ?)";
    $result = $db->prepare($query);
    $result->execute([$data['rockPosition'], $data['time'], $data['jumpPosition'], $data['rockSize'], $data['result']]);
}