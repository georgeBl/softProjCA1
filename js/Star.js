function Star(x, y, w, h, lc, fc, lw, f) {
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.lineCol = lc;
	this.fillCol = fc;
    this.lineWidth = lw;
    this.f = f;
	
}

Star.prototype.draw = function (pen) {
    var ctx = pen.getContext();
	ctx.strokeStyle = this.lineCol;
    ctx.lineWidth = this.lineWidth;
    ctx.moveTo(this.x,this.y);
	ctx.beginPath();
	
		for (var i=0;i<=24;i++) {
			ctx.lineTo(
			this.x + Math.cos(i / 12 * Math.PI) * this.width * (i % 2 + 1),
			this.y + Math.sin(i / 12 * Math.PI) * this.height * (i % 2 + 1));
		}
	ctx.stroke();
	ctx.closePath();
}

Star.prototype.fill = function (pen) {
    var ctx = pen.getContext();
	ctx.strokeStyle = this.lineCol;
    ctx.fillStyle = this.fillCol;
    ctx.lineWidth = this.lineWidth;
    ctx.moveTo(this.x,this.y);
	ctx.beginPath();
	
		for (var i=0;i<=24;i++) {
			ctx.lineTo(
			this.x + Math.cos(i / 12 * Math.PI) * this.width * (i % 2 + 1),
			this.y + Math.sin(i / 12 * Math.PI) * this.height * (i % 2 + 1));
		}
    ctx.fill();
	ctx.stroke();
	ctx.closePath();
}