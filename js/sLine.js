function sLine(x, y, x2, y2, lc, lw) {
	this.x = x;
	this.y = y;
	this.x2 = x2;
	this.y2 = y2;
	this.lineCol = lc;
	this.f = false;
    this.lineWidth = lw;
}

sLine.prototype.draw = function (pen) {
	var ctx = pen.getContext();
	ctx.strokeStyle = this.lineCol;
    ctx.lineWidth = this.lineWidth;
	ctx.beginPath();
	ctx.moveTo(this.x,this.y);
	ctx.lineTo(this.x2,this.y2);
	ctx.stroke();
	ctx.closePath();
}

