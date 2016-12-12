function Triangle(x1, y1, x2, y2, lc, fc, lw, f) {
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.w = this.x2 - this.x1;
	this.h = this.y2 - this.y1;
    this.fillCol = fc;
    this.lineCol = lc;
    this.f = f;
    this.lineWidth = lw;
}



Triangle.prototype.draw = function (pen) {
    var ctx = pen.getContext();
    ctx.lineWidth = this.lineWidth;
	ctx.beginPath();
    ctx.strokeStyle = this.lineCol;
	ctx.moveTo(this.x1 + this.w/2, this.y2);
	ctx.lineTo(this.x1, this.y2);
	ctx.lineTo(this.x1+(this.x2-this.x1)/2, this.y1);
	ctx.lineTo(this.x2,this.y2);
	ctx.lineTo(this.x1 + this.w/2, this.y2);	
	ctx.stroke();
	ctx.closePath();
}

Triangle.prototype.fill = function (pen) {
    var ctx = pen.getContext();
    ctx.lineWidth = this.lineWidth;
	ctx.beginPath();
    ctx.strokeStyle = this.lineCol;
    ctx.fillStyle = this.fillCol;
	ctx.moveTo(this.x1 + this.w/2, this.y2);
	ctx.lineTo(this.x1, this.y2);
	ctx.lineTo(this.x1+(this.x2-this.x1)/2, this.y1);
	ctx.lineTo(this.x2,this.y2);
	ctx.lineTo(this.x1 + this.w/2, this.y2);

	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}