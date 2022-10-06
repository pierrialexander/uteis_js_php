<?php

try {
    $pdo = new PDO('mysql:dbname=login_ajax;host=localhost', 'root', 'ROOT');
} catch (PDOException $e) {
    echo 'Erro: ' . $e->getMessage();
    exit;
}

if(isset($_POST['email']) && !empty($_POST['email'])) {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $sql = "SELECT * FROM usuarios 
                    WHERE email = :email
                      AND senha = :senha";
    
    $sql = $pdo->prepare($sql);
    $sql->bindValue(':email', $email);
    $sql->bindValue(':senha', md5($senha));
    $sql->execute();

    if($sql->rowCount() > 0) {
        echo "Usuário Logado com Sucesso";
    }
    else {
        echo "Usuário não encontrado";
    }
}
else {
    echo "Digite um email ou senha!";
}