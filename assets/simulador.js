    /*Pega o clicado e renderiza*/
    $('img.min-ladrilhos').click(function() { 
        const svg = $(this).attr('src');
        $("#preview-ladrilho").load(svg)
    });

    $('.picker').click(function() {
        $("#selectedColor").val( $(this).val() )
    });


    /*Pintando*/
    $("#preview-ladrilho").on("click", ".A", function(){
        $(".A").css("fill", $("#selectedColor").val() )
    })
    $("#preview-ladrilho").on("click", ".B", function(){
        $(".B").css("fill", $("#selectedColor").val() )
    })
    $("#preview-ladrilho").on("click", ".C", function(){
        $(".C").css("fill", $("#selectedColor").val() )
    })
    $("#preview-ladrilho").on("click", ".D", function(){
        $(".D").css("fill", $("#selectedColor").val() )
    })
    $("#preview-ladrilho").on("click", ".E", function(){
        $(".E").css("fill", $("#selectedColor").val() )
    })
    $("#preview-ladrilho").on("click", ".F", function(){
        $(".F").css("fill", $("#selectedColor").val() )
    })




