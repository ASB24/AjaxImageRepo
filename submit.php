<?php
    if($_SERVER['REQUEST_METHOD'] === "POST" && getimagesize($_FILES['imageFile']['tmp_name'])){
        $image = $_FILES['imageFile'];
        $name = $image['name'];

        if(is_dir("./uploads/")){
            move_uploaded_file($image['tmp_name'], "./uploads/$name");
        }
        echo json_encode($image['name']);
    }
?>