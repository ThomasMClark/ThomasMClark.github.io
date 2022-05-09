
function checkCanvasIsSupported() {
	canvas = document.getElementById("canvas");
	canvas.width = 480;
	canvas.height = 320;	
	if (canvas.getContext) {
		context = canvas.getContext('2d');
		render();
		
	} 
}

function render() {
	context.clearRect(0, 0, canvas.width , canvas.height);
	
	drawMandelbrot();

}

function drawMandelbrot() {
	
	var image_data = context.createImageData(canvas.width, canvas.height);
	var d = image_data.data;

	max_iterations = 100;
	for (var i = 0; i < canvas.height; i++) {
		for (var j = 0; j < canvas.width; j++) {

			
			x0 = -2.0 + j * 3.0 / canvas.width;	
			y0 = -1.0 + i * 2.0 / canvas.height;	

			x = 0;
			y = 0;
			iteration = 0;

			while ((x * x + y * y < 4) && (iteration < max_iterations)) {
				x_n = x * x - y * y + x0;
				y_n = 2 * x * y + y0;
				x = x_n;
				y = y_n;
				iteration++;
			}

			
			d[i * canvas.width * 4 + j * 4 + 0] = iteration*15;
			d[i * canvas.width * 4 + j * 4 + 1] = iteration*3;
			d[i * canvas.width * 4 + j * 4 + 2] = iteration*5;
			d[i * canvas.width * 4 + j * 4 + 3] = 255;
		}		
	}

	
	context.putImageData(image_data, 0, 0);	
}


function drawJulia() {
	
	var image_data = context.createImageData(canvas.width, canvas.height);
	var d = image_data.data;

	x0 = -0.4;
	y0 = -0.6;
	max_iterations = 100;
	for (var i = 0; i < canvas.height; i++) {
		for (var j = 0; j < canvas.width; j++) {
	
			
			x = -1.5 + j * 3.0 / canvas.width;
			y = -1.0 + i * 2.0 / canvas.height;
			
			iteration = 0;
			
			while ((x * x + y * y < 4) && (iteration < max_iterations)) {
				x_n = x * x - y * y + x0;
				y_n = 2 * x * y + y0;
				x = x_n;
				y = y_n;
				iteration++;
			}
			
			
			d[i * canvas.width * 4 + j * 4 + 0] = iteration*25;
			d[i * canvas.width * 4 + j * 4 + 1] = iteration*5;
			d[i * canvas.width * 4 + j * 4 + 2] = iteration*8;
			d[i * canvas.width * 4 + j * 4 + 3] = 255;
		}		
	}

	
	context.putImageData(image_data, 0, 0);
}

function drawBurningShipFractal() {
	
	var image_data = context.createImageData(canvas.width, canvas.height);
	var d = image_data.data;

	max_iterations = 100;
	for (var i = 0; i < canvas.height; i++) {		
		for (var j = 0; j < canvas.width; j++) {

			x0 = -1.80 + j * (-1.7+1.80) / canvas.width;
			y0 = -0.08 + i * (0.01+0.08) / canvas.height;
			x = 0;
			y = 0;
			iteration = 0;

			while ((x * x + y * y < 4) && (iteration < max_iterations)) {
				x_n = x * x - y * y + x0;
				y_n = 2 * Math.abs(x * y) + y0;
				x = x_n;
				y = y_n;
				iteration++;
			}
			
			
			d[i * canvas.width * 4 + j * 4 + 0] = 25+iteration*30;
			d[i * canvas.width * 4 + j * 4 + 1] = 25+iteration*10;
			d[i * canvas.width * 4 + j * 4 + 2] = 85-iteration*5;
			d[i * canvas.width * 4 + j * 4 + 3] = 255;
		}		
	}

	
	context.putImageData(image_data, 0, 0);
}

function drawSierpinskiCarpet() {
	
	var draw_carpet = function (x, y, width, height, iteration) {
		if (iteration == 0) return;
		var w = width / 3;
		var h = height / 3;

		
		context.fillStyle = 'rgb(255,255,255)';
		context.fillRect(x + w, y + h, w, h);

		
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				
				if (j == 1 && i == 1) continue;
				draw_carpet(x + j * w, y + i * h, w, h, iteration - 1);
			}
		}
	}

			
	var carpet_width = canvas.height;
	var carpet_height = canvas.height;
	
	var carpet_left = (canvas.width - carpet_width) / 2;
	
	var max_iterations = 4;

	
	draw_carpet(carpet_left, 0, carpet_width, carpet_height, max_iterations);
}
