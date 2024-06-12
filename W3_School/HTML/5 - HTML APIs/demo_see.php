<?php // Início do script PHP
header('Content-Type: text/event-stream'); // Define o tipo de conteúdo da resposta como 'text/event-stream' para habilitar SSE
header('Cache-Control: no-cache'); // Define as configurações de cache para não armazenar a resposta no navegador

$time = date('r'); // Obtém a hora atual no formato RFC 2822
echo "data: The server time is: {$time}\n\n"; // Envia a hora atual como uma mensagem de evento SSE
flush(); // Força a saída de dados para o navegador
?>