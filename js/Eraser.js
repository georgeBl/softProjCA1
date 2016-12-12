function Eraser(x, y,lw) {
    this.lineWidth = lw;
    this.f = false;
    this.freeLine = [];
    this.freeLine.push(new Point(x,y));
	
}

Eraser.prototype.draw = function (pen) {
    var ctx = pen.getContext();
    ctx.lineWidth = this.lineWidth;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    var p = this.freeLine[0];
    ctx.moveTo(p.x, p.y);
	for (var i = 1; i != this.freeLine.length; i++) {
		p = this.freeLine[i];
		ctx.lineTo(p.x, p.y);
	}
	ctx.stroke();
	ctx.closePath();
    ctx.globalCompositeOperation = "source-over";
}
    
Eraser.prototype.addPoint = function (p) {
	this.freeLine.push(p);
}



