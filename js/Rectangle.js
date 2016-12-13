function Rectangle(x, y, w, h, lc, fc, lw, fi, g) {
//	this.x = x;
//	this.y = y;
//	this.width = w;
//	this.height = h;
    if (w < 0) {
		this.x = x + w;
		this.width = -w;
	}
	else {
		this.x = x;
		this.width = w;
	}
	if (h < 0) {
		this.y = y + h;
		this.height = -h;
	}
	else {
		this.y = y;
		this.height = h;
	}
	this.lineCol = lc;
	this.fillCol = fc;
	this.f = fi;
    this.lineWidth = lw;
	this.grad = g;
    this.x2 = this.x+this.width;
    this.y2 = this.y+this.height;
}

Rectangle.prototype.draw = function (pen) {
    var ctx = pen.getContext();
	ctx.strokeStyle = this.lineCol;
    ctx.lineWidth = this.lineWidth;
	ctx.beginPath();
	ctx.rect(this.x, this.y, this.width, this.height);
	ctx.stroke();
	ctx.closePath();
}

Rectangle.prototype.fill = function (pen) {
    var ctx = pen.getContext();
    ctx.strokeStyle = this.lineCol;
    ctx.lineWidth = this.lineWidth;
    var centerX = this.x + this.width / 2; // This is finding the point at which x is at the center of the shape.
    var centerY = this.y + this.height / 2; // This is finding the point at which y is at the center of the shape.
    var rad1A = Math.abs(this.width/4); // This is finding the absolute value of the width variable.
    var rad1B = Math.abs(this.width/2);
    var rad2A = Math.abs(this.height/4); // This is finding the absolute value of the height variable.
    var rad2B = Math.abs(this.height/2);
    
    var ctx = pen.getContext();
    
    if (this.grad === "linear") {
        var linGrad = ctx.createLinearGradient(this.x, this.y, this.x2, this.y2);
        linGrad.addColorStop(0, "red");
        linGrad.addColorStop(1, "white");
        pen.setFillColor(linGrad);
    }
    else if (this.grad === "radial") {
        if (Math.abs(this.width) > Math.abs(this.height)) {
            var radGrad = ctx.createRadialGradient(centerX, centerY, rad1A, centerX, centerY, rad1B);
        }
        else {
            var radGrad = ctx.createRadialGradient(centerX, centerY, rad2A, centerX, centerY, rad2B);
        }
        radGrad.addColorStop(0, "red");
        radGrad.addColorStop(1, "white");
        pen.setFillColor(radGrad);
    }
    else {      
        ctx.fillStyle = this.fillCol;
    }
    ctx.beginPath();
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();   
    
}
    
//    if(this.grad === "linear"){
//        ctx.beginPath();
//        var grd = ctx.createLinearGradient(0,0,0,Math.abs(this.x+this.width));
//        grd.addColorStop(0,"black");
//        grd.addColorStop(1,"red");
//        ctx.fillStyle = grd;
//        ctx.rect(this.x, this.y, this.width, this.height);
//        ctx.stroke();
//        ctx.fill();
//        ctx.closePath();
//    }
//    
//    else if (this.grad === "radial") {
//        ctx.beginPath();
//        var grd=ctx.createRadialGradient(this.width/2+this.x,this.height/2,Math.abs(this.width/2),this.width/2,this.height/2,Math.abs(this.y));
//        grd.addColorStop(0,"red");
//        grd.addColorStop(1,"white");
//        ctx.fillStyle= grd;
//        ctx.rect(this.x, this.y, this.width, this.height);
//        ctx.stroke();
//        ctx.fill();
//        ctx.closePath();
//        console.log("amIstillHere?");
