window.addEventListener("load", function(e) {
    console.log("Last edited 14/12/2016");
    var canvas = document.getElementById("mainCanvas");
    var pen = new Pen(canvas);
    console.log(pen.getBackgroundColor());
    pen.setLineWidth(5);
    pen.setLineColor("#999999");
    pen.setFillColor("#0000FF");
    pen.setGradientCol1("#FF0000");
    pen.setGradientCol2("#0000FF");
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
	var textToDraw;
    var font;
    var gradient;
    var stroke;
    //line btn
	var lineBtn = document.getElementById("lineBtn");
	lineBtn.addEventListener("click", function(e){
		
			shapeToDraw = "line";
			console.log(shapeToDraw);
		
	});
	
    //buton de radera
	var eraserBtn = document.getElementById("eraserBtn");
	eraserBtn.addEventListener("click", function(e){
        
			shapeToDraw = "eraser";
			console.log(shapeToDraw);
        
	});
    
	//rectangle shape
    var rectangleBtn = document.getElementById("rectangleBtn");
	rectangleBtn.addEventListener("click", function(e){
		
			shapeToDraw = "rectangle";
			console.log(shapeToDraw);
		
	});
	
	//ellipse shape
	var ellipseBtn = document.getElementById("ellipseBtn");
	ellipseBtn.addEventListener("click", function(e){
		
			shapeToDraw = "ellipse";
			console.log(shapeToDraw);
		
	});

	var starBtn = document.getElementById("starBtn");
	starBtn.addEventListener("click", function(e){
		
			shapeToDraw = "star";
			console.log(shapeToDraw);
		
	});
    var triangleBtn = document.getElementById("triangleBtn");
	triangleBtn.addEventListener("click", function(e){
		
			shapeToDraw = "triangle";
			console.log(shapeToDraw);
		
	});
	// straight line
	var sLineBtn = document.getElementById("sLineBtn");
	sLineBtn.addEventListener("click", function(e){
		
			shapeToDraw = "sline";
			console.log(shapeToDraw);
		
	});
    //hexagon btn
    var hexagonBtn = document.getElementById("hexagonBtn");
	hexagonBtn.addEventListener("click", function(e){
		
			shapeToDraw = "hexagon";
			console.log(shapeToDraw);
		
	});

    //pentagon btn
    var pentagonBtn = document.getElementById("pentagonBtn");
	pentagonBtn.addEventListener("click", function(e){
		
			shapeToDraw = "pentagon";
			console.log(shapeToDraw);
		
	});
    
    var applyBtn = document.getElementById("applyBtn");
    applyBtn.addEventListener("click", function(e){
        var textField = document.getElementById("textField");
        var fontSizeField = document.getElementById("fontSizeField");
        var fontStyleField = document.getElementById("fontStyleField");
        var boldBtn = document.getElementById("boldBtn");
        if(boldBtn.checked){
            boldBtn.value = "bold";
        }
        else{
            boldBtn.value = "";
        }
        var italicBtn = document.getElementById("italicBtn");
        if(italicBtn.checked){
            italicBtn.value = "italic";
        }
        else{
            italicBtn.value = "";
        }
        shapeToDraw = "text";
        
        font =boldBtn.value + " " + italicBtn.value + " " + fontSizeField.value + "px " + fontStyleField.value;
        textToDraw = textField.value;
        console.log(textToDraw,font);
    });
	
//	if (rectangleBtn.checked) {
//		shapeToDraw = "rectangle";
//		console.log(shapeToDraw);
//	}
//	else if (ellipseBtn.checked) {
//		shapeToDraw = "ellipse";
//		console.log(shapeToDraw);
//	}
//	else if (lineBtn.checked) {
//		shapeToDraw = "line";
//		console.log(shapeToDraw);
//	}
//	else if (sLineBtn.checked) {
//		shapeToDraw = "sline";
//		console.log(shapeToDraw);
//	}
//    else if (starBtn.checked) {
//		shapeToDraw = "star";
//		console.log(shapeToDraw);
//	}
//    else if (eraserBtn.checked) {
//		shapeToDraw = "eraser";
//		console.log(shapeToDraw);
//	}
//    else if (triangleBtn.checked) {
//		shapeToDraw = "triangle";
//		console.log(shapeToDraw);
//	}
//    else if (pentagon.checked) {
//		shapeToDraw = "pentagon";
//		console.log(shapeToDraw);
//	}
//    else if (hexagon.checked) {
//		shapeToDraw = "hexagon";
//		console.log(shapeToDraw);
//	}
//	else {
//		shapeToDraw = "line";
//	}
    
    // FILLS!!!
    // fill buttons
    var fillBtn = document.getElementById("fillBtn");
    
    //gradient buttons
    //linear grad btn
    var linearGradBtn = document.getElementById("linearGradBtn");
    linearGradBtn.addEventListener("change", function(e){
        gradient = "linear";
        console.log(gradient);
    });
    
    // radial gradiant button
    var radialGradBtn = document.getElementById("radialGradBtn");
    radialGradBtn.addEventListener("change", function(e){
        gradient = "radial";
        console.log(gradient);
    });
    
    //simple fill btn
    var simpleFillBtn = document.getElementById("simpleFillBtn");
    simpleFillBtn.addEventListener("change", function(e){
        gradient ="noGrad";
        var fillColor = fillColorField.value;
        pen.setFillColor(fillColor);
        console.log(gradient);
    });
    
    
    //gradient color 1
    var gradientCol1 = document.getElementById("gradientCol1");
    gradientCol1.value = pen.getGradientCol1();
    gradientCol1.addEventListener("change", function(e){
        pen.setGradientCol1(e.target.value);
        console.log(e.target.value);
    });
    
    //gradient color 2
    var gradientCol2 = document.getElementById("gradientCol2");
    gradientCol2.value = pen.getGradientCol2();
    gradientCol2.addEventListener("change", function(e){
        pen.setGradientCol2(e.target.value);
        console.log(e.target.value);
    });
    
    //pat1
    var pattern1Btn = document.getElementById("pattern1");
    pattern1Btn.addEventListener("change", function(e){
        gradient = "pattern1";
        console.log(gradient);
    });
    
    //pat2
    var pattern2Btn = document.getElementById("pattern2");
    pattern2Btn.addEventListener("change", function(e){
        gradient = "pattern2";
        console.log(gradient);
    });
   
    
    
    //other buttons
    
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
    
    // line width slider
    var lineWidthSliderField = document.getElementById("lineWidthSliderField");
    lineWidthSliderField.value = pen.getLineWidth();
    lineWidthSliderField.addEventListener("change", function (e) {
        var lineWidthSld = e.target.value;
        var lineWidth = parseInt(lineWidthSld);
        if (Number.isInteger(lineWidth)) {
            pen.setLineWidth(lineWidth);
        }
    });
    
    // stroke button
    var strokeBtn = document.getElementById("strokeBtn");
    strokeBtn.addEventListener("change", function (e) {
        if(e.target.checked){
            stroke = true;            
        }
        else{
            stroke = false;
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
    
    var newBtn = document.getElementById("refreshBtn");
    newBtn.addEventListener("click", function(e){
        history.go(0);   
    });
    //save button
    var saveBtn = document.getElementById("saveBtn");
    saveBtn.addEventListener("click", function(e){
        if(!transparentBtn.checked){
        shape = new Background(canvas.width, canvas.height, backgroundColorField.value);
        shape.drawSave(pen);
   //     shapes.concat(shape);
        console.log(shapes);
        redrawCanvas();
        }
        var dataURL = canvas.toDataURL();
//      window.location.href = dataURL;
        window.open(dataURL);
      //  shapes.shift();
        console.log(shapes);
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
        if(!checkWhere && shapeToDraw === "text"){
            var lc = pen.getLineColor();
            var x2 = e.offsetX;
			var y2 = e.offsetY;
            difShape = new Background(canvas.width, canvas.height);
            difShape.draw(pen);
            redrawCanvas();
            shape = new Text(x2,y2,textToDraw,font,lc);
            shape.draw(pen);
        }
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
            shape = drawShape(shapeToDraw,x,y,x2,y2,width,height,lc,lw,fc,f,gradient, stroke);
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
	
    function drawShape(shapeToDraw,x,y,x2,y2,width,height,lc,lw,fc,f,gradient, stroke){
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
									  f,
                                      gradient,
                                      pen.getGradientCol1(),
                                      pen.getGradientCol2(),
                                      stroke);
			}
			else if (shapeToDraw === "ellipse") {
				shape = new Ellipse(x, 
					 			    y, 
								    width, 
								    height,
									lc,
									fc,
                                    lw,
									f,
                                    gradient,
                                    pen.getGradientCol1(),
                                    pen.getGradientCol2(),
                                    stroke);
			}
            else if (shapeToDraw === "star") {				
				shape = new Star(x, 
					 		     y, 
								 width, 
								 height,
								 lc,
								 fc,
                                 lw,
				                 f,
                                 gradient,
                                 pen.getGradientCol1(),
                                 pen.getGradientCol2(),
                                 stroke);
			}
            else if (shapeToDraw === "triangle") {				
				shape = new Triangle(x, 
					 		         y, 
                                     x2, 
                                     y2,
                                     lc,
                                     fc,
                                     lw,
                                     f,
                                     gradient,
                                     pen.getGradientCol1(),
                                     pen.getGradientCol2(),
                                     stroke);
			}
            else if (shapeToDraw === "pentagon") {				
                shape = new Pentagon(x, 
                                     y, 
                                     width, 
                                     height,
                                     lc,
                                     fc,
                                     lw,
                                     f,
                                     gradient,
                                     pen.getGradientCol1(),
                                     pen.getGradientCol2(),
                                     stroke);
            }
            else if(shapeToDraw === "hexagon"){
				shape = new Hexagon(x,
								  y,
								  width,
								  height,
								  lc,
                                  fc,
                                  lw,
                                  f,
                                  gradient,
                                  pen.getGradientCol1(),
                                  pen.getGradientCol2(),
                                  stroke);
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























