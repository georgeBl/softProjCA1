function Rectangle(x, y, w, h, lc, fc, lw, fi) {
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.lineCol = lc;
	this.fillCol = fc;
	this.f = fi;
    this.lineWidth = lw;
	
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
	ctx.fillStyle = this.fillCol;
	ctx.beginPath();
	ctx.rect(this.x, this.y, this.width, this.height);
	
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}