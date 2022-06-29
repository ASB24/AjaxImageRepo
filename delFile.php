<?php
    if($_SERVER['REQUEST_METHOD'] === "POST"){
        $file = isset($_POST['file']) ? $_POST['file'] : null;

        if($file && file_exists("./uploads/$file")){
            unlink("./uploads/$file");
            echo json_encode($file);
        }


    }
?>