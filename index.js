$(document).ready(function () {
    const table = $('#example').DataTable({
        info: false,
        lengthChange: false,
        columns: [
            {
            },
            {
                render: function(data){
                    return `
                    <!-- Button trigger modal -->
                    <button type="button" class="btn-no-style" data-bs-toggle="modal" data-bs-target="#modelId">
                        <img class="item-img" src="./uploads/${data}" alt="${data}">
                    </button>
                    
                    <!-- Modal -->
                    <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">${data}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img class="item-img-popup" src="./uploads/${data}" alt="${data}">
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary btn-danger" data-bs-dismiss="modal">Delete</button>
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                }
            },
            {
                render: function(data){
                    return `<button type="button" class="btn btn-danger delete-btn" value="${data}">Delete</button>`;
                }
            }
        ]
    });

    $.ajax({
        type: "POST",
        url: "getFiles.php",
        data: "data",
        dataType: "json",
        encode: true,
        success: function (response) {
            
        }
    }).done((data) => {
        console.log(data);
        Object.entries(data.files).forEach(([key, value]) => {
            console.log(value);
            table.row.add([value, value, value]).draw();
        });
    });

    $("#uploadForm").on("submit", function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: $(this).attr('action'),
            data: new FormData(this),
            dataType: "json",
            encode: true,
            processData: false,
            contentType: false,
            success: function (response) {
                console.log(response);
                table.row.add([response, response, response]).draw();
            },
            error: function(err){
                console.log(err.responseText);
            }
        });
    });
});