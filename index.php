
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Repo</title>
    <link rel="stylesheet" href="./form.css">
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
</head>
<body>

    <div class="container mt-5 mb-5 d-flex justify-content-center" >
        <div class="card px-1 py-4 w-50">
            <div class="card-body">
                <h6 class="card-title mb-3">Uploaded Images</h6>
                <div class="d-flex flex-row w-100">
                    <table id="example" class="display w-100">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        
                    </table>
                </div>
                
                <form action="" method="post" enctype="multipart/form-data">
                    <h6 class="information mt-4">Upload Image</h6>
                    <div class="row">
                        <div class="col-sm-12">
                            <input required type="file" class="form-control" name="imageFile" id="imageFile" placeholder="Image File" aria-describedby="fileUploadHelp">
                            <div id="fileUploadHelp" class="form-text">Upload File to the Current Repo</div>
                        </div>
                    </div>
                    <div class="row">
                        <button class="btn btn-primary btn-block confirm-button w-25 mx-auto">Upload</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
    <script src="./index.js"></script>
</body>
</html>