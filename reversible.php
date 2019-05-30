<?php

//valores de entrada
$inputs = array(36, 904, 1010, 37, 209, 0);

//recorrer los valores
foreach ($inputs as $input) {

    //voltear valor numerico
    $numStr = (string) $input; 
    $revStr = strrev($numStr);
    $reverse = (int) $revStr; 
    
    //contar el tamaño de los valores
    $tNum = strlen($numStr);
    $tRev = strlen($reverse);

    //consideracion para ser numero reversible
    //comparacion de los valores
    if($tNum == $tRev)
    {
        $output = $input + $reverse; 
        //comparacion en valores pares. 
        if ($output%2==0){
            echo $input." -> false \n";
        }else{
            echo $input." -> true \n";
        }
    }
    else {
        echo input." -> false \n";
    }
}
?>
