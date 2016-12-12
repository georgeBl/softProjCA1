window.addEventListener("load", function(e) {
    console.log("simonsacunt");
    var canvas = document.getElementById("mainCanvas");
    var pen = new Pen(canvas);
    console.log(pen.getBackgroundColor());
    pen.setLineWidth(5);
    pen.setLineColor("#999999");
    pen.setFillColor("#0000FF");
	var ctx = pen.getContext();
    var x;
    var y;
    var width;
    var height;
	var shapes = new Array(); // array
    var startLine=false;
	var redoShapes = new Array();
	var shapeToDraw = "line";
	var checkWhere = false;
	var freeLine = [];
	
	//free draw
	var lineTbn = document.getElementById("lineBtn");
	lineTbn.addEventListener("change", function(e){
		if (e.target.checked) {
			shapeToDraw = "line";
			console.log(shapeToDraw);
		}
	});
	
    //buton de radera
	var eraserBtn = document.getElementById("eraserBtn");
	eraserBtn.addEventListener("click", function(e){
        if (e.target.checked) {
			shapeToDraw = "eraser";
			console.log(shapeToDraw);
        }
	});
    
	//rectangle shape
    var rectangleBtn = document.getElementById("rectangleBtn");
	rectangleBtn.addEventListener("change", function(e){
		if (e.target.checked) {
			shapeToDraw = "rectangle";
			console.log(shapeToDraw);
		}
	});
	
	//ellipse shape
	var ellipseBtn = document.getElementById("ellipseBtn");
	ellipseBtn.addEventListener("change", function(e){
		if (e.target.checked) {
			shapeToDraw = "ellipse";
			console.log(shapeToDraw);
		}
	});

	var starBtn = document.getElementById("starBtn");
	starBtn.addEventListener("change", function(e){
		if (e.target.checked) {
			shapeToDraw = "star";
			console.log(shapeToDraw);
		}
	});
    var triangleBtn = document.getElementById("triangleBtn");
	triangleBtn.addEventListener("change", function(e){
		if (e.target.checked) {
			shapeToDraw = "triangle";
			console.log(shapeToDraw);
		}
	});
	// straight line
	var sLineBtn = document.getElementById("sLineBtn");
	sLineBtn.addEventListener("change", function(e){
		if (e.target.checked) {
			shapeToDraw = "sline";
			console.log(shapeToDraw);
		}
	});
    var hexagonBtn = document.getElementById("hexagonBtn");
	hexagonBtn.addEventListener("change", function(e){
		if (e.target.checked) {
			shapeToDraw = "hexagon";
			console.log(shapeToDraw);
		}
	});

    var pentagonBtn = document.getElementById("pentagonBtn");
	pentagonBtn.addEventListener("change", function(e){
		if (e.target.checked) {
			shapeToDraw = "pentagon";
			console.log(shapeToDraw);
		}
	});
	
	if (rectangleBtn.checked) {
		shapeToDraw = "rectangle";
		console.log(shapeToDraw);
	}
	else if (ellipseBtn.checked) {
		shapeToDraw = "ellipse";
		console.log(shapeToDraw);
	}
	else if (lineBtn.checked) {
		shapeToDraw = "line";
		console.log(shapeToDraw);
	}
	else if (sLineBtn.checked) {
		shapeToDraw = "sline";
		console.log(shapeToDraw);
	}
    else if (starBtn.checked) {
		shapeToDraw = "star";
		console.log(shapeToDraw);
	}
    else if (eraserBtn.checked) {
		shapeToDraw = "eraser";
		console.log(shapeToDraw);
	}
    else if (triangleBtn.checked) {
		shapeToDraw = "triangle";
		console.log(shapeToDraw);
	}
    else if (pentagon.checked) {
		shapeToDraw = "pentagon";
		console.log(shapeToDraw);
	}
    else if (hexagon.checked) {
		shapeToDraw = "hexagon";
		console.log(shapeToDraw);
	}
	else {
		shapeToDraw = "line";
	}
    // fill button
    var fillBtn = document.getElementById("fillBtn");
    
    // line width button
    var lineWidthField = document.getElementById("lineWidthField");
    lineWidthField.value = pen.getLineWidth();
    lineWidthField.addEventListener("change", function (e) {
        var lineWidthStr = e.target.value;
        var lineWidth = parseInt(lineWidthStr);
        if (Number.isInteger(lineWidth)) {
            pen.setLineWidth(lineWidth);
        }
    });
    
    //line color button 
    var lineColorField = document.getElementById("lineColorField");
    lineColorField.value = pen.getLineColor();
    lineColorField.addEventListener("change", function (e) {
        var lineColor = e.target.value;
        pen.setLineColor(lineColor);
	});
	
    //fill color button
	var fillColorField = document.getElementById("fillColorField");
    fillColorField.value = pen.getFillColor();
    fillColorField.addEventListener("change", function (e) {
        var fillColor = e.target.value;
        pen.setFillColor(fillColor);
    });
    
    //background color button
	var backgroundColorField = document.getElementById("backgroundColorField");
    var transparentBtn = document.getElementById("transparentBtn"); //make it transparent
    backgroundColorField.value = "#777777";
    transparentBtn.addEventListener("change",function(){
        if(transparentBtn.checked){
            pen.setBackgroundColor("transparent");
        }
        else{
            pen.setBackgroundColor(backgroundColorField.value);
        }
    });
    
    backgroundColorField.addEventListener("change", function (e) {
        if(!transparentBtn.checked){
            var bgColor = e.target.value;
            pen.setBackgroundColor(bgColor);
        }
    });

    
    //undo button  
	var undoBtn = document.getElementById("undoBtn");
	undoBtn.addEventListener("click", function(e){
        if (shapes.length !== 0) {
            var lw = pen.getLineWidth();
            var lc = pen.getLineColor();
            var fc = pen.getFillColor();

            var s = shapes.pop();
            redoShapes.push(s);

            canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i !== shapes.length; i++) {
                s = shapes[i];
                pen.setLineWidth(s.lineWidth);
                pen.setLineColor(s.lineColor);
                pen.setFillColor(s.fillColor);
                if (s.f) {
                    s.fill(pen);
                }
                else {
                    s.draw(pen);
                }
            }

            pen.setLineWidth(lw);
            pen.setLineColor(lc);
            pen.setFillColor(fc);
        }
	});
    
    //redo button
    var redoBtn = document.getElementById("redoBtn");
	redoBtn.addEventListener("click", function(e){
        if (redoShapes.length !== 0) {
            var lw = pen.getLineWidth();
            var lc = pen.getLineColor();
            var fc = pen.getFillColor();

            var s = redoShapes.pop();
            shapes.push(s)
            
            canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i !== shapes.length; i++) {
                s = shapes[i];
                pen.setLineWidth(s.lineWidth);
                pen.setLineColor(s.lineColor);
                pen.setFillColor(s.fillColor);
                if (s.f) {
                    s.fill(pen);
                }
                else {
                    s.draw(pen);
                }
            }

            pen.setLineWidth(lw);
            pen.setLineColor(lc);
            pen.setFillColor(fc);
        }
	});
	
    //clear button
    var clearBtn = document.getElementById("clearBtn");
    clearBtn.addEventListener("click", function(e){
        shape = new Background(canvas.width,canvas.height);
        shape.draw(pen);
        shapes.push(shape);
    });
    
	canvas.addEventListener("mousedown", function(e){
		console.log("mouse down at " + e.offsetX + ", " + e.offsetY);
		x = e.offsetX;
		y = e.offsetY;
		stopLine=true;
		checkWhere = true;
		var lc = pen.getLineColor();
        var lw = pen.getLineWidth();
		if(shapeToDraw === "line"){
			console.log(shapeToDraw);
			startLine = true;
			shape = new Line(x,
							 y,
							 lc,
                             lw);		
		}
        if(shapeToDraw === "eraser"){
			console.log(shapeToDraw);
			startLine = true;
			shape = new Eraser(x,
							   y,
							   lw);		
		}

	});

	canvas.addEventListener("mousemove", function(e){
	//	console.log("mouse move at " + e.offsetX + ", " + e.offsetY);
		if(checkWhere){
			var x2 = e.offsetX;
			var y2 = e.offsetY;
			var lc = pen.getLineColor();
			var fc = pen.getFillColor();
            var lw = pen.getLineWidth();
			var f = (fillBtn.checked) ? true : false ;
            difShape = new Background(canvas.width, canvas.height);
            difShape.draw(pen);
            redrawCanvas();
			width = x2 - x;
			height = y2 - y;
            shape = drawShape(shapeToDraw,x,y,x2,y2,width,height,lc,lw,fc,f);
		
			if (shape !== null) {
	            if (shape.f) {
	                shape.fill(pen);
	            }
	            else {
				    shape.draw(pen);
	            }

			}
			
		}
	});

	var  stopLine =false;
	canvas.addEventListener("mouseup", function(e){
		checkWhere = false;
		startLine = false;
		stopLine = true;
		console.log("mouse up at " + e.offsetX + ", " + e.offsetY);
		var x2 = e.offsetX;
		var y2 = e.offsetY;
		var lc = pen.getLineColor();
		var fc = pen.getFillColor();
		var f = (fillBtn.checked) ? true : false ;
		width = x2 - x;
		height = y2 - y;		
		shapes.push(shape);
        redoShapes.length = 0;					
		console.log(shapes);
		
	});
	
	function redrawCanvas() {		
		for(var i=0;i<shapes.length;i++){
				if(shapes[i].f){
					shapes[i].fill(pen);
				}
				else{
				shapes[i].draw(pen);
				}
				
		}
	}
	
    function drawShape(shapeToDraw,x,y,x2,y2,width,height,lc,lw,fc,f){
        if (shapeToDraw === "line") {
				//new Line created on mouseDown
				shape.addPoint(new Point(x2, y2));
				shape.draw(pen);

			}
            else if (shapeToDraw === "eraser") {
				//new Line created on mouseDown
				shape.addPoint(new Point(x2, y2));
				shape.draw(pen);

			}  
			else if (shapeToDraw === "rectangle") {				
				shape = new Rectangle(x, 
					 			      y, 
								      width, 
								      height,
									  lc,
									  fc,
                                      lw,
									  f);
			}
			else if (shapeToDraw === "ellipse") {
				shape = new Ellipse(x, 
					 			    y, 
								    width, 
								    height,
									lc,
									fc,
                                    lw,
									f);
			}
            else if (shapeToDraw === "star") {				
				shape = new Star(x, 
					 		     y, 
								 width, 
								 height,
								 lc,
								 fc,
                                 lw,
				                 f);
			}
            else if (shapeToDraw === "triangle") {				
				shape = new Triangle(x, 
					 		         y, 
                                     x2, 
                                     y2,
                                     lc,
                                     fc,
                                     lw,
                                     f);
			}
            else if (shapeToDraw === "pentagon") {				
                shape = new Pentagon(x, 
                                     y, 
                                     width, 
                                     height,
                                     lc,
                                     fc,
                                     lw,
                                     f);
            }
            else if(shapeToDraw === "hexagon"){
				shape = new Hexagon(x,
								  y,
								  width,
								  height,
								  lc,
                                  fc,
                                  lw,
                                  f);
			}
			else if(shapeToDraw === "sline"){
				shape = new sLine(x,
								  y,
								  x2,
								  y2,
								  lc,
                                  lw);
			}
        return shape;
        
    }
});























