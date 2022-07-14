
(function() {

	
function corUsada() {
    var cores = new Array();
    var paleta = "";

    $('svg [colorname]').each(function () {
        var c = $(this).attr('colorname');

        if ($.inArray(c, cores) < 0) {
            cores.push(c);
            paleta += '<li class="coresUsadas">'+c+'</li>';
        }
    });

    $('#nome-cor').html('<h3 class="titulo-coresUsadas"> Cores Usadas </h3><ul class="paleta disabled">'+paleta+'</ul>');
}
function zeraPaleta() {
    $('#nome-cor').html('</ul>');
}


/*Pega o clicado e renderiza*/
    $('img.min-ladrilhos').click(function() { 
        const svg = $(this).attr('src');
		const faixaRender = svg.replace(".svg", '.html')
        const nomesvg = $(this).attr('alt')
        const verifyType = $(this).attr('type')

		if(verifyType === "faixa"){
			$("#preview-ladrilho").load(faixaRender)
			$("#grade").html("")
			$("#svg-holder").attr('class', 'has-corner divide faixa')
			$("#nome-ladrilho").html(nomesvg)
			$("#ladrilar-3d").css("display", "none")
			zeraPaleta()
		}
		else if(verifyType === "normal"){
        	$("#svg-corner").remove()
			$("#grade").html("")
			$("#svg-holder").attr('class', '')
        	$("#svg-primary").load(svg)
        	$("#nome-ladrilho").html(nomesvg)
			$("#ladrilar-3d").css("display", "block")
        	zeraPaleta()
		}
		else if(verifyType === "hexagonal"){
        	$("#svg-corner").remove()
			$("#grade").html("")
			$("#svg-holder").attr('class', 'shape-hexagonal')
        	$("#svg-primary").load(svg)
        	$("#nome-ladrilho").html(nomesvg)
			$("#ladrilar-3d").css("display", "block")
        	zeraPaleta()
		}

		else{
        	$("#svg-corner").remove()
			$("#grade").html("")
			$("#svg-holder").attr('class', 'florao')
        	$("#svg-primary").load(svg)
        	$("#nome-ladrilho").html(nomesvg)
			$("#ladrilar-3d").css("display", "block")
        	zeraPaleta()
		}
    });

    $('.picker').click(function() {
        $("#selectedColor").val( $(this).val() )
        $("#selectedColor").attr("colorName", $(this).attr("color-name"))
    });


/*Colorindo*/
    $("#svg-holder").on("click", "path", function(){
            $(this).css("fill", $("#selectedColor").val() )
            $(this).attr("colorname", $("#selectedColor").attr('colorname'))
            corUsada()
        })

    $("#svg-holder").on("click", "rect", function(){
            $(this).css("fill", $("#selectedColor").val() )
            $(this).attr("colorname", $("#selectedColor").attr('colorname'))
            corUsada()
        })
    $("#svg-holder").on("click", "polygon", function(){
            $(this).css("fill", $("#selectedColor").val() )
            $(this).attr("colorname", $("#selectedColor").attr('colorname'))
            corUsada()
        })
    $("#svg-holder").on("click", "circle", function(){
            $(this).css("fill", $("#selectedColor").val() )
            $(this).attr("colorname", $("#selectedColor").attr('colorname'))
            corUsada()
        })
    $("#svg-holder").on("click", "polyline", function(){
            $(this).css("fill", $("#selectedColor").val() )
            $(this).attr("colorname", $("#selectedColor").attr('colorname'))
            corUsada()
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

var $window, $body;
var ww, wh, wy;

var sim;

var isIE;

var e3d, info3d;

(function($) {
	
	//-------------------------DOC READY
	$(document).ready(function () {
		
		$body = $('body');
		$window = $(window);
		$header = $('#masthead');

		isIE = $('html').hasClass('no-supports');
		
		$('.attachment-woocommerce_thumbnail').on('mouseenter', 
		function() {
			let src_split = $(this).attr('src').split('/');
			let product_name = src_split.slice(-1).pop();
			product_name = product_name.split('.');
			let src1 = $(this).attr('srcset');
			if (img_map_json.hasOwnProperty(product_name[0])) {
				if (img_map_json[product_name[0]] === 'default') {
					img2 = get_snd_image(src1);
				} else {
					let src1_split = src1.split(" ")
					src1_split[0] = src1_split[2] = src1_split[4] = img_map_json[product_name[0]][1];
					img2 = src1_split.join(" ");
				}
				$(this).attr('srcset', img2);
			}
		}).on('mouseleave',
		function() {
			let src_split = $(this).attr('src').split('/');
			let product_name = src_split.slice(-1).pop();
			product_name = product_name.split('.');
			let src2 = $(this).attr('srcset');
			if (img_map_json.hasOwnProperty(product_name[0])) {
				if (img_map_json[product_name[0]] === 'default') {
					img1 = get_fst_image(src2);
				} else {
					let src2_split = src2.split(" ")
					src2_split[0] = src2_split[2] = src2_split[4] = img_map_json[product_name[0]][0];
					img1 = src2_split.join(" ");
				}
				$(this).attr('srcset', img1);
			}
		});
		
		$('.search_field').attr('placeholder', 'Pesquisar');
		$('.widget_product_categories .widget_title').text('Categorias');

		if ($('#simulador').length > 0) {
			sim = {
				e: $('#simulador'),
				paleta: $('#preview-color'),
				ladrilho: $('#ladrilho'),
				dwld_btn: $('btn-salvar-ladrilho'),
				grade: $('#grade'),
				select: $('#select-ladrilho')
			};
			configurar_visualizar_ladrilho ();
			// selecionou_ambiente_3d();
			configurar_simulador_3d();
		}
	});

	function configurar_visualizar_ladrilho () {
		sim.e.find('#preview-options-form').on('click', visualizar_ladrilho_na_grade);
	}

	function visualizar_ladrilho_na_grade (event) {
		event.preventDefault();

		var $holder = sim.grade;
		var f = $(this);
		var args = {
			cols: f.find('#option-cols').val(),
			rows: f.find('#option-rows').val(),
			bg: f.find('.paleta .selected .swatch').attr('data-hex'),
			gap: '1px'
		}
		gera_grid_do_ladrilho(args, $holder);
		arruma_encaixe_hexagonal ($holder);
	}


	function gera_grid_do_ladrilho (args, $holder, simulador3d) {

		simulador3d = simulador3d == true;

		var svg_holder = sim.ladrilho.find('#svg-holder');
		
		var is_hexagonal = svg_holder.hasClass('shape-hexagonal');
		var is_faixa = svg_holder.hasClass('faixa');
		var is_florao = svg_holder.hasClass('florao');
		var is_florao_espelhado = svg_holder.hasClass('florao-espelhado');
		var is_tozeto = svg_holder.hasClass('tozeto');
		var has_corner = svg_holder.hasClass('has-corner');

		var cols = is_tozeto? simulador3d? Math.round(args.cols*2) : args.cols*2 : args.cols;
		var rows = is_tozeto? simulador3d? Math.round(args.rows*2) : args.rows*2 : args.rows;
		//var gap = is_tozeto && simulador3d? '0' : args.gap;
		var gap = args.gap;
		var bg = args.bg;

		var html = '<div class="tile-row tile-row-0 first-row">';
		var svg = svg_holder.find('#svg-primary').html();
		var svg_corner = has_corner? svg_holder.find('#svg-corner').html() : false;

		var tile = svg;
		var tile_w = (100/cols)-1;
		var tela = window.screen.width;
		console.log(tela)
		if (tela <= 600){
			var tile_w = (100/cols)-1;
		}
		else{
			var tile_w = (100/cols)-0.30;
		}
		// var tile_w = (100/cols)-0.30;

		//
		$holder.toggleClass('hexagonal', is_hexagonal);
		$holder.toggleClass('faixa', is_faixa);
		$holder.toggleClass('florao', is_florao);
		$holder.toggleClass('florao-espelhado', is_florao_espelhado);
		$holder.toggleClass('tozeto', is_tozeto);
		$holder.toggleClass('has-corner', has_corner);

		$holder.attr('data-cols', cols);
		$holder.attr('data-rows', rows);

		$holder.css('background-color', bg);

		for (var r = 0; r < rows; r++) {
			for (var c = 0; c < cols; c++) {

				var classes = ['item', 'tile-col', 'tile-col-'+c];
				if (c === 0) classes.push('first-col');
				if (c === cols - 1) classes.push('last-col');

				//classe empty recheio da faixa
				if (is_faixa &&
					r > 0 && r < rows - 1 &&
					c > 0 && c < cols -1
				) {
					classes.push('empty-tile');

					//cl('empty');
				}

				//classe pros cantos
				if (has_corner &&
					 (r === 0 || r === rows - 1) && 
					 (c === 0 || c === cols -1)
				) {
					classes.push('corner-tile');
					tile = svg_corner;
					//cl('corner');
				} else {
					tile = svg;
					//cl('normal');
				}

				html += '<div class="'+ classes.join(' ') + '" style="width: ' + tile_w + '%; padding: ' + gap + ';"><div class="holder">'+ tile +'</div></div>';

				//fecha row e abre nova
				if (c === cols -1) {
					var row_ix = r + 1;
					var row_classes = ['tile-row', 'tile-row-'+row_ix];
					//if (row_ix === 0) row_classes.push('first-row');

					if (row_ix === rows - 1) row_classes.push('last-row');

					html += '</div>';

					if (row_ix < rows) {
						html += '<div class="'+row_classes.join(' ')+'">';
					}
				}
			}
		}

		if (is_hexagonal) {
			html += '<div class="mask"></div>';
		}
		$holder.html(html);
		//ARRUMA ENCAIXE DAS FILEIRAS DO HEXAGONAL
		arruma_encaixe_hexagonal ($holder);
	}


	function arruma_encaixe_hexagonal ($holder) {
		if ($holder.hasClass('hexagonal')) {

			var tile = $holder.find('.item').eq(0);
			var tile_h = tile.height();
			var tile_w = tile.width();

			// cl('tile dim: ' + tile_w + ' x ' + tile_h);

			$holder.find('.tile-row').each(function (ix) {
				var g = $(this);
				if (ix > 0) {
					g.css('top', ((tile_h/4) * ix) * -1);
				}
				if (ix % 2) {
					g.css('left', (tile_w/2) * -1);
				}
			});
		}
	}
	function arruma_encaixe_hexagonal_simulador ($holder, w, cols) {
		if ($holder.hasClass('hexagonal')) {

			var tile_w = w/cols;
			var tile_h = tile_w;

			$holder.find('.tile-row').each(function (ix) {
				var g = $(this);
				if (ix > 0) {
					g.css('top', ((tile_h/4) * ix) * -1);
				}
				if (ix % 2) {
					g.css('left', (tile_w/2) * -1);
				}
			});
		}
	}















	function configurar_simulador_3d () {

		e3d = {};

		e3d.info = {
			sala: {
				file:'http://127.0.0.1:5500/assets/imagens3d/sala.png',
				w: 1200,
				h: 1200,
				cols: 20,
				rows: 20,
				matrix: "matrix3d(1.31278, 0.01559, 0, 0, 0, 0.001, 0, -0.001, 0, 0, 1, 0, 0, 264, 0, 1)",
				coords: {"topLeft":{"x":-0.14266666666666666,"y":0.5},"topRight":{"x":1.109,"y":0.5},"bottomLeft":{"x":-0.6226666666666667,"y":1.23},"bottomRight":{"x":1.619,"y":1.23}},
			},
			cozinha: {
				file:'http://127.0.0.1:5500/assets/imagens3d/cozinha-chao.png',
				w: 1200,
				h: 1200,
				cols: 20,
				rows: 20,
				matrix: "matrix3d(1.11401, -0.00319961, 0, -1.0078e-05, 0.15995, 0.264353, 0, -0.0012232, 0, 0, 1, 0, 0.8917, 197.404, 0, 1)",
				coords: {"topLeft":{"x":-0.21399983333333333,"y":0.76},"topRight":{"x":0.6776666666666668,"y":0.2999975},"bottomLeft":{"x":0.316,"y":1.5775},"bottomRight":{"x":1.4226666666666667,"y":0.7225}}
			},
			banheiro: {
				file:'http://127.0.0.1:5500/assets/imagens3d/banheiro.png',
				w: 1200,
				h: 1200,
				cols: 20,
				rows: 20,
				matrix: "matrix3d(1.17, -0.0032, 0, -1.0078e-05, 0.15995, 0.264353, 0, -0.0012232, 0, 0, 1, 0, 0, 209.404, 0, 1)",
				coords: {"topLeft":{"x":-0.14266666666666666,"y":0.5},"topRight":{"x":1.109,"y":0.5},"bottomLeft":{"x":-0.6226666666666667,"y":1.23},"bottomRight":{"x":1.619,"y":1.23}}
			},
			externa: {
				file:'http://127.0.0.1:5500/assets/imagens3d/externa.png',
				w: 1008,
				h: 540,
				cols: 17,
				rows: 10,
				matrix: "matrix3d(1.05, 0, 0, 0, 0, 0.05, 0, -0.0013, 0, 0, 1, 0, 16, 170, 0, 1)",
				coords: {"topLeft":{"x":-0.14266666666666666,"y":0.5},"topRight":{"x":1.109,"y":0.5},"bottomLeft":{"x":-0.6226666666666667,"y":1.23},"bottomRight":{"x":1.619,"y":1.23}}
			},
			parede: {
				file:'http://127.0.0.1:5500/assets/imagens3d/cozinha-parede.png',
				w: 1200,
				h: 1200,
				cols: 15,
				rows: 15,
				matrix: "matrix3d(1.15, 0, 0, 0, 0, 1.13333, 0, 0, 0, 0, 1, 0, 34, 1, 0, 1)",
				coords: {"topLeft":{"x":-0.06666666666666667,"y":-0.06666666666666667},"topRight":{"x":1.0666666666666667,"y":-0.06666666666666667},"bottomLeft":{"x":-0.06666666666666667,"y":1.0666666666666667},"bottomRight":{"x":1.0666666666666667,"y":1.0666666666666667}}
			}
		};

		
		e3d.buttons = $('.ladrilar-3d__selectors button');
		e3d.parent = $('#ladrilar-3d');
		e3d.display = $('#ladrilar-3d-display').attr('class', 'tipo-'+ e3d.key);
		e3d.ladrilhos_holder = 	e3d.display.find('.ladrilar-3d__ladrilhos');
		e3d.svg_holder = e3d.ladrilhos_holder.find('.grade');
		e3d.img_holder = e3d.display.find('.ladrilar-3d__image');
		e3d.f = $('#preview-options-form');

		e3d.args = {};
		e3d.tipo = null;
		e3d.key = null;
		e3d.transform;
		e3d.imgID = 'img-3d';

		e3d.buttons.on('click', selecionou_ambiente_3d);
	}

	function selecionou_ambiente_3d (event) {
		event.preventDefault();

		e3d.key = $(this).val();
		e3d.tipo = e3d.info[e3d.key];
		e3d.imgID = 'img-3d';


		if ($('#ladrilho svg').length <= 0 || e3d.parent.hasClass('disabled')) {
			return;
		}

		e3d.parent.addClass('disabled opening');

		//GRID LADRILHOS
		e3d.args = {
			cols: e3d.tipo.cols,
			rows: e3d.tipo.rows,
			bg: e3d.f.find('.paleta .selected .swatch').attr('data-hex'),
			gap: '.04rem' //'0 1px 1px 0'
		}

		//IMAGEM
		e3d.img_holder.html('<img src="'+e3d.tipo.file+'" alt="" class="ladrilar-3d__'+e3d.key+'" id="'+ e3d.imgID +'">');

		e3d.img_holder.find("#" + e3d.imgID).one("load", function() {
			
			gera_grid_do_ladrilho(e3d.args, e3d.svg_holder, true);

			var w = e3d.img_holder.width() == 0? fixSized[e3d.key].width: e3d.img_holder.width();
			var h = e3d.img_holder.height() == 0? fixSized[e3d.key].height: e3d.img_holder.height();
			
			//PERSPECTIVE
			e3d.transform = new PerspectiveTransform(e3d.svg_holder.get(0), w, h, false);

			e3d.transform.topLeft.x = e3d.tipo.coords.topLeft.x*w;
			e3d.transform.topLeft.y = e3d.tipo.coords.topLeft.y*h;
			e3d.transform.topRight.x = e3d.tipo.coords.topRight.x*w;
			e3d.transform.topRight.y = e3d.tipo.coords.topRight.y*h;
			e3d.transform.bottomLeft.x = e3d.tipo.coords.bottomLeft.x*w;
			e3d.transform.bottomLeft.y = e3d.tipo.coords.bottomLeft.y*h;
			e3d.transform.bottomRight.x = e3d.tipo.coords.bottomRight.x*w;
			e3d.transform.bottomRight.y = e3d.tipo.coords.bottomRight.y*h;

			e3d.transform.update();

			arruma_encaixe_hexagonal_simulador (e3d.svg_holder, w, e3d.args.cols);
			
			e3d.svg_holder.css("transform", e3d.tipo.matrix);

			e3d.display.addClass('loaded');
			
		}).each(function() {
			if(this.complete) $(this).load();
		});

		//ABRE MODAL
		$.fancybox.open({
			src  : '#'+ e3d.display.attr('id'),
			type : 'inline',
			opts : {
				afterClose: function () {
					e3d.transform = null;
					$("#" + e3d.imgID).remove();
					e3d.img_holder.add(e3d.svg_holder).empty();
					e3d.display.attr('class', 'tipo-undefined');
					e3d.parent.removeClass('disabled opening');
				}
			}
		});
	}

	
const fixSized = {
			'sala': {
				'cols': 20,
				'width': 600,
				'height': 600
			},
			'banheiro': {
				'cols': 26,
				'width': 900,
				'height': 600
			},
			'cozinha': {
				'cols': 20,
				'width': 900,
				'height': 600
			},
			'parede': {
				'cols': 15,
				'width': 600,
				'height': 600
			},
}

$('.download-image').click(function(e) {
    e.preventDefault();
	let linkImage = $(this).attr('data-link');
//     window.location.href = linkImage;
       window.open(
	  linkImage,
	  '_blank' 
	   );
});


})(jQuery);
