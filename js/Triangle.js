function Triangle(x, y, w ,h , lc, fc, lw, f, g, gradCol1, gradCol2, s) {  
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.lineCol = lc;
    this.fillCol = fc;
    this.f = f;
    this.lineWidth = lw;
    this.grad = g;
    this.x2 = this.x+this.width;
    this.y2 = this.y+this.height;
    this.gradCol1 = gradCol1;
    this.gradCol2 = gradCol2;
    this.stroke = s;
}



Triangle.prototype.draw = function (pen) {
    var ctx = pen.getContext();
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = this.lineCol;
	ctx.beginPath();
	ctx.moveTo(this.x + this.width/2, this.height+this.y);
	ctx.lineTo(this.x, this.height+this.y);
	ctx.lineTo(this.x+this.width/2, this.y);
	ctx.lineTo(this.x+this.width,this.y+this.height);
	ctx.lineTo(this.x + this.width/2, this.y+this.height);	
	ctx.stroke();
	ctx.closePath();
}

Triangle.prototype.fill = function (pen) {
    var ctx = pen.getContext();
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = this.lineCol;
    var centerX = this.x + this.width / 2; // This is finding the point at which x is at the center of the shape.
    var centerY = this.y + this.height / 2; // This is finding the point at which y is at the center of the shape.
    var rad1A = Math.abs(this.width/4); // This is finding the absolute value of the width variable.
    var rad1B = Math.abs(this.width/2);
    var rad2A = Math.abs(this.height/4); // This is finding the absolute value of the height variable.
    var rad2B = Math.abs(this.height/2);
    if (this.grad === "linear") {
        var linGrad = ctx.createLinearGradient(this.x, this.y, this.x2, this.y2);
        linGrad.addColorStop(0, this.gradCol1);
        linGrad.addColorStop(1, this.gradCol2);
        pen.setFillColor(linGrad);
    }
    else if (this.grad === "radial") {
        if (Math.abs(this.width) > Math.abs(this.height)) {
            var radGrad = ctx.createRadialGradient(centerX, centerY, rad1A, centerX, centerY, rad1B);
        }
        else {
            var radGrad = ctx.createRadialGradient(centerX, centerY, rad2A, centerX, centerY, rad2B);
        }
        radGrad.addColorStop(0, this.gradCol1);
        radGrad.addColorStop(1, this.gradCol2);
        pen.setFillColor(radGrad);
    }
    else if(this.grad === "pattern1"){
        var img = new Image();
        img.src ="img/pattern1.png";
        var pat=ctx.createPattern(img,"repeat");
        pen.setFillColor(pat);
    }
    else if(this.grad === "pattern2"){
        var img = new Image(); 
        img.src ="img/pattern2.jpg";
        var pat=ctx.createPattern(img,"repeat");
        pen.setFillColor(pat);
    }
    else {
        pen.setFillColor(this.fillCol);
        ctx.fillStyle = this.fillCol;
    }
    ctx.beginPath();
	ctx.moveTo(this.x + this.width/2, this.height+this.y);
	ctx.lineTo(this.x, this.height+this.y);
	ctx.lineTo(this.x+this.width/2, this.y);
	ctx.lineTo(this.x+this.width,this.y+this.height);
	ctx.lineTo(this.x + this.width/2, this.y+this.height);	
    if(this.stroke){
        ctx.stroke();    
    }
	
	ctx.fill();
	ctx.closePath();
}



//function Triangle(x1, y1, x2 ,y2, lc, fc, lw, f, g, gradCol1, gradCol2, s) {
//	this.x1 = x1;
//	this.y1 = y1;
//	this.w = this.x2 - this.x1;
//	this.h = this.y2 - this.y1;
//    this.fillCol = fc;
//    this.lineCol = lc;
//    this.f = f;
//    this.lineWidth = lw;
//    this.grad = g;
//    this.x2 = this.x+this.width;
//    this.y2 = this.y+this.height;
//    this.gradCol1 = gradCol1;
//    this.gradCol2 = gradCol2;
//    this.stroke = s;
//    
//    if (w < 0) {
//		this.x = x + w;
//		this.width = -w;
//	}
//	else {
//		this.x = x;
//		this.width = w;
//	}
//	if (h < 0) {
//		this.y = y + h;
//		this.height = -h;
//	}
//	else {
//		this.y = y;
//		this.height = h;
//	}
//    this.lineCol = lc;
//    this.fillCol = fc;
//    this.f = f;
//    this.lineWidth = lw;
//    this.grad = g;
//    this.x2 = this.x+this.width;
//    this.y2 = this.y+this.height;
//    this.gradCol1 = gradCol1;
//    this.gradCol2 = gradCol2;
//    this.stroke = s;
//}
//
//
//
//Triangle.prototype.draw = function (pen) {
//    var ctx = pen.getContext();
//    ctx.lineWidth = this.lineWidth;
//	ctx.beginPath();
//    ctx.strokeStyle = this.lineCol;
//	ctx.moveTo(this.x1 + this.w/2, this.y2);
//	ctx.lineTo(this.x1, this.y2);
//	ctx.lineTo(this.x1+(this.x2-this.x1)/2, this.y1);
//	ctx.lineTo(this.x2,this.y2);
//	ctx.lineTo(this.x1 + this.w/2, this.y2);	
//	ctx.stroke();
//	ctx.closePath();
//}
//
//Triangle.prototype.fill = function (pen) {
//    var ctx = pen.getContext();
//    ctx.lineWidth = this.lineWidth;
//    ctx.strokeStyle = this.lineCol;
//    var centerX = this.x + this.width / 2; // This is finding the point at which x is at the center of the shape.
//    var centerY = this.y + this.height / 2; // This is finding the point at which y is at the center of the shape.
//    var rad1A = Math.abs(this.width/4); // This is finding the absolute value of the width variable.
//    var rad1B = Math.abs(this.width/2);
//    var rad2A = Math.abs(this.height/4); // This is finding the absolute value of the height variable.
//    var rad2B = Math.abs(this.height/2);
//    console.log("centerX: " + centerX);
//    console.log("centerY: " + centerY);
//    console.log("rad1A: " + rad1A);
//    console.log("rad1B: " + rad1B);
//    console.log("rad2A: " + rad2A);
//    console.log("rad2B: " + rad2B);
//    if (this.grad === "linear") {
//        var linGrad = ctx.createLinearGradient(this.x, this.y, this.x3, this.y3);
//        linGrad.addColorStop(0, this.gradCol1);
//        linGrad.addColorStop(1, this.gradCol2);
//        pen.setFillColor(linGrad);
//    }
//    else if (this.grad === "radial") {
//        if (Math.abs(this.width) > Math.abs(this.height)) {
//            var radGrad = ctx.createRadialGradient(centerX, centerY, rad1A, centerX, centerY, rad1B);
//        }
//        else {
//            var radGrad = ctx.createRadialGradient(centerX, centerY, rad2A, centerX, centerY, rad2B);
//        }
//        radGrad.addColorStop(0, this.gradCol1);
//        radGrad.addColorStop(1, this.gradCol2);
//        pen.setFillColor(radGrad);
//    }
//    else if(this.grad === "pattern1"){
//        var img = new Image();
//        img.src ="img/pattern1.png";
//        var pat=ctx.createPattern(img,"repeat");
//        pen.setFillColor(pat);
//    }
//    else if(this.grad === "pattern2"){
//        var img = new Image(); 
//        img.src ="img/pattern2.jpg";
//        var pat=ctx.createPattern(img,"repeat");
//        pen.setFillColor(pat);
//    }
//    else {
//        pen.setFillColor(this.fillCol);
//        ctx.fillStyle = this.fillCol;
//    }
//    ctx.beginPath();
//	ctx.moveTo(this.x1 + this.w/2, this.y2);
//	ctx.lineTo(this.x1, this.y2);
//	ctx.lineTo(this.x1+(this.x2-this.x1)/2, this.y1);
//	ctx.lineTo(this.x2,this.y2);
//	ctx.lineTo(this.x1 + this.w/2, this.y2);
//    if(this.stroke){
//        ctx.stroke();    
//    }
//	
//	ctx.fill();
//	ctx.closePath();
//}
