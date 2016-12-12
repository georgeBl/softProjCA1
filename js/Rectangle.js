function Rectangle(x, y, w, h, lc, fc, lw, fi, g) {
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.lineCol = lc;
	this.fillCol = fc;
	this.f = fi;
    	this.lineWidth = lw;
	this.grad = g;
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
    if(this.grad === "linear"){
        var grd = ctx.createLinearGradient(0,0,0,Math.abs(this.x+this.width));
        grd.addColorStop(0,"black");
        grd.addColorStop(1,"red");
        ctx.fillStyle = grd;
    }
    else if (this.grad === "radial") {
        ctx.fillStyle = this.fillCol;
        console.log("sada");
        
    }
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
}
