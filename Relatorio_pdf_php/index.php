<?php
ob_start();
?>

<h1>Olá Mundo</h1>
<h4>Sub Titulo</h4>

<?php
$html = ob_get_contents();
ob_end_clean();

require 'vendor/autoload.php';

$mpdf = new Mpdf\Mpdf();
$mpdf->WriteHTML($html);
// F: Salva no Servidor
//$mpdf->Output('arquivo.pdf', 'F');
// D: Faz Download e não abre janela do navegador
//$mpdf->Output('arquivo.pdf', 'D');
// Sem segundo parametro, abre janela do navegador com o pdf
$mpdf->Output('arquivo.pdf'); 
?>


