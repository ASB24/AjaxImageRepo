<?php

    $path = "./uploads";
    $data = [];
    $error = "";

    if( $_SERVER['REQUEST_METHOD'] === "POST" ){
        if(is_dir($path)){
            $files = array_diff(scandir($path), array('.', '..'));
            $data['error'] = false;
        }
        else
        {
            $data['error'] = true;
            $data['errorMessage'] = "Files could not be scanned";
        }
    }

    $data['files'] = $files;

    echo json_encode($data);
?>