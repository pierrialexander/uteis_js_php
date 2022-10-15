<?php

class Pessoa {

    private $nome;
    private $idade;

    public static function getInstance() {
        static $instance = null;
        if($instance === null) {
            $instance = new Pessoa();
        }
        return $instance;
    }

    private function __construct()
    {
        
    }

    public function getNome() {
        return $this->nome;
    }

    public function setNome($nome) {
        $this->nome = $nome;
    }

    public function getIdade() {
        return $this->idade;
    }

    public function setIdade($idade) {
        $this->idade = $idade;
    }

}


//============================

$cara = Pessoa::getInstance();
$cara->setNome("Fulaninho");

$cara2 = Pessoa::getInstance();
$cara2->setNome("Nicolau");
$cara2->setIdade(90);

echo "Nome: " . $cara->getNome() . "<br>";
echo "Idade: " . $cara->getIdade();



