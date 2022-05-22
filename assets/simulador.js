

    globalColor = ""
    

    /*Pega o clicado e renderiza*/
    $('img.min-ladrilhos').click(function() { 
        const svg = $(this).attr('src');
        $("#preview-ladrilho").load(svg)
    });

    $('.picker').click(function() {
        const color = $(this).val();
        globalColor = $(this).val()
        console.log(color)
        console.log(globalColor)
    });


    /*Pintando*/
    $("#preview-ladrilho").on("click", ".A", function(){
        $(".A").css("fill", globalColor )
    })
    $("#preview-ladrilho").on("click", ".B", function(){
        $(".B").css("fill", globalColor )
    })
    $("#preview-ladrilho").on("click", ".C", function(){
        $(".C").css("fill", globalColor )
    })
    $("#preview-ladrilho").on("click", ".D", function(){
        $(".D").css("fill", globalColor )
    })
    $("#preview-ladrilho").on("click", ".E", function(){
        $(".E").css("fill", globalColor )
    })
    $("#preview-ladrilho").on("click", ".F", function(){
        $(".F").css("fill", globalColor )
    })




