(function() {

/*Pega o clicado e renderiza*/
    $('img.min-ladrilhos').click(function() { 
        const svg = $(this).attr('src');
        const nomesvg = $(this).attr('alt')
        $("#preview-ladrilho").load(svg)
        $("#nome-ladrilho").html(nomesvg)
    });

    $('.picker').click(function() {
        $("#selectedColor").val( $(this).val() )
    });

/*Colorindo*/
    $("#preview-ladrilho").on("click", "path", function(){
            $(this).css("fill", $("#selectedColor").val() )
        })
    $("#preview-ladrilho").on("click", "rect", function(){
            $(this).css("fill", $("#selectedColor").val() )
        })
    $("#preview-ladrilho").on("click", "polygon", function(){
            $(this).css("fill", $("#selectedColor").val() )
        })


/*Categoria*/
    const centrais = document.querySelectorAll("#select-ladrilhos-centrais");
    const classico = document.querySelectorAll("#select-ladrilhos-classico");
    const faixas = document.querySelectorAll("#select-ladrilhos-faixas");
    const flores = document.querySelectorAll("#select-ladrilhos-flores");
    const geometrico = document.querySelectorAll("#select-ladrilhos-geometrico");
    const hexagonal = document.querySelectorAll("#select-ladrilhos-hexagonal");
    const tozetos = document.querySelectorAll("#select-ladrilhos-tozetos");
    const vintage = document.querySelectorAll("#select-ladrilhos-vintage");
    const exclusivo = document.querySelectorAll("#select-ladrilhos-exclusivo");


    const tabs = document.querySelectorAll(".select-filter button");
    const minLadrilhos = document.querySelectorAll(".select-ladrilhos > div");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((tab) => {
                tab.classList.remove("active")
            })
            tab.classList.add("active");


            const tabVal = tab.getAttribute("data-id")
            minLadrilhos.forEach((min) => {
                min.classList.remove("active")
                min.classList.add("inactive")
            })
            if(tabVal == "todos"){
                minLadrilhos.forEach((todos) => {
                    todos.classList.add("active")
                    todos.classList.remove("inactive")
                })
                return;
            }
            if(tabVal == "centrais"){
                centrais.forEach((central) => {
                    central.classList.add("active")
                    central.classList.remove("inactive")
                })
                return;
            }
            if(tabVal == "classico"){
                classico.forEach((classicos) => {
                    classicos.classList.add("active")
                    classicos.classList.remove("inactive")
                })
                return;
            }
            if(tabVal == "faixas"){
                faixas.forEach((faixa) => {
                    faixa.classList.add("active")
                    faixa.classList.remove("inactive")
                })
                return;
            }
            if(tabVal == "florais"){
                flores.forEach((flor) => {
                    flor.classList.add("active")
                    flor.classList.remove("inactive")
                })
                return;
            }
            if(tabVal == "geometricos"){
                geometrico.forEach((geometricos) => {
                    geometricos.classList.add("active")
                    geometricos.classList.remove("inactive")
                })
                return;
            }
            if(tabVal == "hexagonais"){
                hexagonal.forEach((hexagonais) => {
                    hexagonais.classList.add("active")
                    hexagonais.classList.remove("inactive")
                })
                return;
            }
            if(tabVal == "tozetos"){
                tozetos.forEach((tozeto) => {
                    tozeto.classList.add("active")
                    tozeto.classList.remove("inactive")
                })
                return;
            }
            if(tabVal == "vintages"){
                vintage.forEach((vintages) => {
                    vintages.classList.add("active")
                    vintages.classList.remove("inactive")
                })
                return;
            }
            if(tabVal == "exclusivos"){
                exclusivo.forEach((exclusivos) => {
                    exclusivos.classList.add("active")
                    console.log('foi')
                    exclusivos.classList.remove("inactive")
                })
                return;
            }
            
        })
        
    })

    const colorBtn = document.querySelectorAll(".picker")

    colorBtn.forEach((color)=>{
        color.addEventListener("click", () => {
            colorBtn.forEach((color)=>{
                color.classList.remove("picker-active")
            })
            color.classList.add("picker-active")
        })
    })
	
})();

function printSVG(preview){
    var $print = $(preview)
        .clone()
        .addClass('print')
        .prependTo('body');

    // Stop JS execution
    window.print();

    // Remove div once printed
    $print.remove();
}

//verificar de é faixa, se for desabilitar botão 3d

function render3d() {
	iniciamodal()
    var inner_rejuntes = $('#preview3d');
    var coluna_px = ($(".imagem3d").innerWidth() / 24) + -18.5;
    var total_linhas_colunas = 24 * 12;
    var html_inner_ladrilhos = $('#preview-ladrilho')[0].innerHTML;
    var html_inner_ladrilhos_ajustado = html_inner_ladrilhos.replace(/432px/g, coluna_px + 'px');
    var item_ladrilhos = '<div class="item-rejunte" style="width: 32.333333px; height: 32.33333px; padding: 0.5px; margin: 0px;"><div class="holder">' + html_inner_ladrilhos_ajustado + '</div></div>';
    var html_ladrilhos = '';
    for (var i = 0; i < total_linhas_colunas; i++) {
        html_ladrilhos += item_ladrilhos;
    }
    html_ladrilhos += '<br style="clear: both;">';
    inner_rejuntes.html(html_ladrilhos);
}


function iniciamodal(){
	const modal = document.getElementById('modal-3d')
	modal.classList.add("mostrar3d");
}

function fechamodal(){
	const modal = document.getElementById('modal-3d')
	modal.classList.remove("mostrar3d")
}
    //         var coluna_px = ($(inner_rejuntes).innerWidth() / ladrilhos_colunas.val()) - 4;
    //         var total_linhas_colunas = ladrilhos_colunas.val() * ladrilhos_linhas.val();
    //         var html_inner_ladrilhos = $('#preview-ladrilho')[0].innerHTML;
    //         $(inner_rejuntes).css('background-color', cor_rejunte);
    //         $(inner_rejuntes).css('border-color', cor_rejunte);
    //         var html_inner_ladrilhos_ajustado = html_inner_ladrilhos.replace(/432px/g, coluna_px + 'px');
    //         var item_ladrilhos = '<div class="item-rejunte" style="width: ' + coluna_px + 'px; padding: 1px; margin-right: 2px;"><div class="holder">' + html_inner_ladrilhos_ajustado + '</div></div>';
    //         var html_ladrilhos = '';
    //         for (var i = 0; i < total_linhas_colunas; i++) {
    //             html_ladrilhos += item_ladrilhos;
    //         }
    //         html_ladrilhos += '<br style="clear: both;">';
    //         inner_rejuntes.html(html_ladrilhos);
    //         rotate();
    //     }

    // var cor = '';
    // var item_cor = $('.box-itens-ladrilhos li span');
    // var view_ladrilhos = $('#view-ladrilhos');
    // var ladrilhos_colunas = $('#ladrilhos-colunas');
    // var ladrilhos_linhas = $('#ladrilhos-linhas');
    // var inner_rejuntes = $('#inner-rejuntes');
    // var cor_rejunte = '';
    // var item_cor_rejunte = $('.box-itens-rejuntes li span');
    // var area_anexado = $('#anexado');
    // var area_rejunte = $('#rejunte');
    // var input_modelo = $('#input-modelo');
    // var nome_cor_rejunte = '';

    // item_cor.click(function() {
    //     item_cor.each(function() {
    //         $(this).removeClass('selected');
    //     });
    //     $(this).addClass('selected');
    //     cor = $(this).data('hex');
    // });

    // // $('.modelo-ladrilho').each(function() {
    // //     $(this).click(function() {
    // //         inner_rejuntes[0].innerHTML = inner_rejuntes_default();
    // //         area_anexado.removeAttr('style');
    // //         area_anexado[0].innerHTML = '';
    // //         area_rejunte.removeAttr('style');
    // //         area_rejunte[0].innerHTML = create_html_rejunte_selected();
    // //         var modelo = $(this).data('modelo');
    // //         call_ajax(modelo);
    // //         input_modelo.val(modelo);
    // //     });
    // // });


    // view_ladrilhos.click(function() {
    //     if ($('#preview-ladrilho')[0].innerHTML == "") {
    //         alert('Primeiro selecione um ladrilho!');
    //     } else {

    //         if (ladrilhos_colunas.val() == "" || ladrilhos_colunas.val() < 1 || ladrilhos_colunas.val() > 10) {
    //             alert('O campo colunas aceita valores entre 1 e 10!');
    //             return;
    //         }
    //         if (ladrilhos_linhas.val() == "" || ladrilhos_linhas.val() < 1 || ladrilhos_linhas.val() > 10) {
    //             alert('O campo linhas aceita valores entre 1 e 10!');
    //             return;
    //         }
    //         // if (cor_rejunte == "") {
    //         //     alert('Selecione uma cor de rejunte!');
    //         //     return;
    //         // }

            
    //         // if ($('#preview-ladrilho')[0].innerHTML )
    //         var testFaixas = $('#preview-ladrilho').children()[0];
    //         if(testFaixas.id === 'faixas'){
    //             var coluna_px = ($(inner_rejuntes).innerWidth() / 2) - 4;
    //             var total_linhas_colunas = 4;
    //             var html_inner_ladrilhos = $('#preview-ladrilho')[0].innerHTML;
    //             $(inner_rejuntes).css('background-color', cor_rejunte);
    //             $(inner_rejuntes).css('border-color', cor_rejunte);

    //             var html_inner_ladrilhos_ajustado = html_inner_ladrilhos.replace(/432px/g, coluna_px + 'px');

    //             var item_ladrilhos0 = '<div class="item-rejunte 0" style="width: ' + coluna_px + 'px; height: ' + coluna_px + 'px; padding: 1px; margin-right: 2px;"><div class="holder">' + html_inner_ladrilhos_ajustado + '</div></div>';
    //             var item_ladrilhos1 = '<div class="item-rejunte 1" style="width: ' + coluna_px + 'px; height: ' + coluna_px + 'px; transform: rotate(90deg); padding: 1px; margin-right: 2px;"><div class="holder">' + html_inner_ladrilhos_ajustado + '</div></div>';
    //             var item_ladrilhos2 = '<div class="item-rejunte 2" style="width: ' + coluna_px + 'px; height: ' + coluna_px + 'px; transform: rotate(270deg); padding: 1px; margin-right: 2px;"><div class="holder">' + html_inner_ladrilhos_ajustado + '</div></div>';
    //             var item_ladrilhos3 = '<div class="item-rejunte 3" style="width: ' + coluna_px + 'px; height: ' + coluna_px + 'px; transform: rotate(180deg); padding: 1px; margin-right: 2px;"><div class="holder">' + html_inner_ladrilhos_ajustado + '</div></div>';
    //             var html_ladrilhos = '';

    //             for (var i = 0; i < total_linhas_colunas; i++) {

    //                 if (i == 0) {
    //                  html_ladrilhos += item_ladrilhos0;
    //                 }
    //                 if (i == 1) {
    //                  html_ladrilhos += item_ladrilhos1;
    //                 }
    //                 if (i == 2) {
    //                  html_ladrilhos += item_ladrilhos2;
    //                 }
    //                 if (i == 3) {
    //                  html_ladrilhos += item_ladrilhos3;
    //                 }
                    
    //             }

    //             html_ladrilhos += '<br style="clear: both;">';
    //             inner_rejuntes.html(html_ladrilhos);

    //             return;
    //         }

    //         var coluna_px = ($(inner_rejuntes).innerWidth() / ladrilhos_colunas.val()) - 4;
    //         var total_linhas_colunas = ladrilhos_colunas.val() * ladrilhos_linhas.val();
    //         var html_inner_ladrilhos = $('#preview-ladrilho')[0].innerHTML;
    //         $(inner_rejuntes).css('background-color', cor_rejunte);
    //         $(inner_rejuntes).css('border-color', cor_rejunte);
    //         var html_inner_ladrilhos_ajustado = html_inner_ladrilhos.replace(/432px/g, coluna_px + 'px');
    //         var item_ladrilhos = '<div class="item-rejunte" style="width: ' + coluna_px + 'px; padding: 1px; margin-right: 2px;"><div class="holder">' + html_inner_ladrilhos_ajustado + '</div></div>';
    //         var html_ladrilhos = '';
    //         for (var i = 0; i < total_linhas_colunas; i++) {
    //             html_ladrilhos += item_ladrilhos;
    //         }
    //         html_ladrilhos += '<br style="clear: both;">';
    //         inner_rejuntes.html(html_ladrilhos);
    //         rotate();
    //     }

    // });

    // function rotate() {
    //     $('.holder').each(function() {
    //         $(this).click(function() {
    //             if (this.classList[1] == undefined) {
    //                 this.classList.add('deg90');
    //             } else if (this.classList[1] == 'deg90') {
    //                 this.classList.remove('deg90');
    //                 this.classList.add('deg180');
    //             } else if (this.classList[1] == 'deg180') {
    //                 this.classList.remove('deg180');
    //                 this.classList.add('deg270');
    //             } else if (this.classList[1] == 'deg270') {
    //                 this.classList.remove('deg270');
    //                 this.classList.add('deg360');
    //             } else if (this.classList[1] == 'deg360') {
    //                 this.classList.remove('deg360');
    //                 this.classList.add('deg90');
    //             }
    //         })
    //     });
    // }

    // item_cor_rejunte.click(function() {
    //     item_cor_rejunte.each(function() {
    //         $(this).removeClass('selected');
    //     });
    //     $(this).addClass('selected');
    //     cor_rejunte = $(this).data('hex');
    //     nome_cor_rejunte = $(this).next().html();
    // });

    // function inner_rejuntes_default() {
    //     $(inner_rejuntes).css('background-color', '#fff');
    //     $(inner_rejuntes).css('border-color', '#ddd');
    //     html = '<div class="item-rejunte default" style="width: 25%;"><span></span></div>';
    //     html_result = '';
    //     for (i = 0; i <= 15; i++) {
    //         html_result += html;
    //     }
    //     html_result += '<br style="clear: both;">';
    //     return html_result;
    // }


    // function create_html_rejunte_selected() {
    //     return '<span style="display: inline-block;">Cor do rejunte:</span><div class="box-rejunte-selected" style="display: inline-block; vertical-align: middle; margin-left: 5px;"><div class="area-rejunte-selected"></div><span class="cor-rejunte-selected"></span></div>';
    // }


