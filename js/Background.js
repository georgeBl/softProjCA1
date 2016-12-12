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
