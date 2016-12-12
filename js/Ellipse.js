function Ellipse(x, y, w, h, lc, fc, lw, fi) {
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
}

Ellipse.prototype.draw = function (pen) {
	var radiusX = this.width/2
	var radiusY = this.height/2
	var centerX = this.x + radiusX;
	var centerY = this.y + radiusY;
	var rotation = 0;
	var startAngle = 0;
	var endAngle = 2 * Math.PI;
	var antiClockwise = false;
    var ctx = pen.getContext();
    ctx.lineWidth = this.lineWidth;
	ctx.strokeStyle = this.lineCol;
	ctx.beginPath();
	ctx.ellipse(centerX, centerY, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise);	
	ctx.stroke();
	ctx.closePath();
}

Ellipse.prototype.fill = function (pen) {
	var radiusX = this.width/2
	var radiusY = this.height/2
	var centerX = this.x + radiusX;
	var centerY = this.y + radiusY;
	var rotation = 0;
	var startAngle = 0;
	var endAngle = 2 * Math.PI;
	var antiClockwise = false;
    var ctx = pen.getContext();
    ctx.lineWidth = this.lineWidth;
	ctx.strokeStyle = this.lineCol;
	ctx.fillStyle = this.fillCol;
	ctx.beginPath();
	ctx.ellipse(centerX, centerY, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise);
	
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}