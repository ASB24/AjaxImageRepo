$(document).ready(function () {
    $("#preview-container").hide();

    const table = $('#example').DataTable({
        info: false,
        paging: false,
        scrollY: '200px',
        scrollCollapse: true,
        columns: [
            {
                render: function(data){
                    return `
                    <div class="d-grid gap-2">
                        <button type="button" name="" id="" class="btn btn-info preview" value="${data}"><i class="fa fa-search" aria-hidden="true"></i></button>
                        <img src="./uploads/${data}" style="max-width: 100%;" alt="Vista">
                    </div>
                    `;
                }
            },
            {
                render: function(data){
                    return `
                    <a href="./uploads/${data}" target="_blank" rel="noopener noreferrer">${data}</a>
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
        success: function (data) {
            console.log(data);
            Object.entries(data.files).forEach(([key, value]) => {
                console.log(value);
                table.row.add([value, value, value]).draw();
            });
            addButtonEvents();
        }
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
                addButtonEvents();
            },
            error: function(err){
                console.log(err.responseText);
            }
        });
    });

    function addButtonEvents(){
        $(".preview").click(function (e) { 
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
    
            
            let image = $(this).val();
            $("#preview").attr("src", `./uploads/${image}`);
            $("#preview-container").show();
    
        });

        $(".delete-btn").click(function (e) { 
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
    
            
            let image = $(this).val();
            $.ajax({
                type: "POST",
                url: "delFile.php",
                data: {
                    file: image
                },
                dataType: "json",
                encode: true,
                success: function (response) {
                    table.row( $(`button[value="${image}"]`).parents('tr') ).remove().draw();
                    if($("#preview").attr("src") === `./uploads/${image}`){
                        $("#preview-container").hide();
                    }
                }
            });
    
        });
    }
});