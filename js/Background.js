function Background(w, h) {
	this.width = w;
	this.height = h;

}



Background.prototype.draw = function (pen) {
    var ctx = pen.getContext();
	ctx.beginPath();
    ctx.clearRect(0,0,this.width,this.height);
	ctx.closePath();
}

function Background(w, h, bg) {
	this.width = w;
	this.height = h;
    this.bgCol = bg;
}
Background.prototype.drawSave = function (pen) {
    var ctx = pen.getContext();
	ctx.beginPath();
    pen.setFillColor(this.bgCol);
    ctx.fillRect(0,0,this.width,this.height);
	ctx.closePath();
}
