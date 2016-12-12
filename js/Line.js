function Line(x, y, lc, lw) {
	this.freeLine = [];
	this.freeLine.push(new Point(x,y));
	this.lineCol = lc;
	this.f = false;
    this.lineWidth = lw;
}

Line.prototype.draw = function (pen) {
	var ctx = pen.getContext();
	ctx.strokeStyle = this.lineCol;
    ctx.lineWidth = this.lineWidth;
	ctx.beginPath();
	var p = this.freeLine[0];
	ctx.moveTo(p.x, p.y);
	for (var i = 1; i != this.freeLine.length; i++) {
		p = this.freeLine[i];
		ctx.lineTo(p.x, p.y);
	}
	ctx.stroke();
	ctx.closePath();
}

Line.prototype.addPoint = function (p) {
	this.freeLine.push(p);
}

function Point(x, y) {
	this.x = x;
	this.y = y;
}

