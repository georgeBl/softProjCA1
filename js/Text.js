function Text(x, y ,text,font,lc) {
	this.x = x;
    this.y = y;
    this.text = text;
    this.font = font;
    this.lineCol = lc;
}



Text.prototype.draw = function (pen) {
    var ctx = pen.getContext();
    ctx.beginPath();
    ctx.font = this.font;
    ctx.fillStyle = this.lineCol;
    ctx.fillText(this.text, this.x, this.y);
    ctx.closePath();
}

