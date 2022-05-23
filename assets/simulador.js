

    globalColor = ""
    

    /*Pega o clicado e renderiza*/
    $('img.min-ladrilhos').click(function() { 
        const svg = $(this).attr('src');
        $("#preview-ladrilho").load(svg)
    });

    $('.picker').click(function() {
        const color = $(this).val();
        globalColor = $(this).val()
        $("#selectedColor").val(color)
        $("#selectedColor").val( $(this).val() )
        console.log(color)
        console.log(globalColor)
    });


    /*Pintando*/
    $("#preview-ladrilho").on("click", ".A", function(){
        $(".A").css("fill", globalColor )
        $(".A").css("fill", $("#selectedColor").val() )
    })
    $("#preview-ladrilho").on("click", ".B", function(){
        $(".B").css("fill", globalColor )
        $(".B").css("fill", $("#selectedColor").val() )
    })
    $("#preview-ladrilho").on("click", ".C", function(){
        $(".C").css("fill", globalColor )
        $(".C").css("fill", $("#selectedColor").val() )
    })
    $("#preview-ladrilho").on("click", ".D", function(){
        $(".D").css("fill", globalColor )
        $(".D").css("fill", $("#selectedColor").val() )
    })
    $("#preview-ladrilho").on("click", ".E", function(){
        $(".E").css("fill", globalColor )
        $(".E").css("fill", $("#selectedColor").val() )
    })
    $("#preview-ladrilho").on("click", ".F", function(){
        $(".F").css("fill", globalColor )
        $(".F").css("fill", $("#selectedColor").val() )
    })




