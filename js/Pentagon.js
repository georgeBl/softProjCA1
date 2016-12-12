function Pentagon(x, y, w, h, lc, fc, lw, f) {
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
    this.f = f;
    this.lineWidth = lw;
}



Pentagon.prototype.draw = function (pen) {
    var ctx = pen.getContext();
	ctx.beginPath();
    ctx.strokeStyle = this.lineCol;
    ctx.lineWidth = this.lineWidth;
	ctx.moveTo(this.x+this.width/2,this.y+this.height);
    ctx.lineTo(this.x+this.x *0.1, this.y+this.height);
    ctx.lineTo(this.x, this.y+this.height/3);
    ctx.lineTo(this.x+this.width/2,this.y);
    ctx.lineTo(this.x+this.width, this.y+this.height/3);    
    ctx.lineTo(this.x+this.width-this.x *0.1,this.y+this.height);
    ctx.lineTo(this.x+this.width/2,this.y+this.height);
	ctx.stroke();
	ctx.closePath();
}

Pentagon.prototype.fill = function (pen) {
    var ctx = pen.getContext();
    ctx.lineWidth = this.lineWidth;
	ctx.beginPath();
    ctx.strokeStyle = this.lineCol;
    ctx.fillStyle = this.fillCol;
	ctx.moveTo(this.x+this.width/2,this.y+this.height);
    ctx.lineTo(this.x+this.x *0.1, this.y+this.height);
    ctx.lineTo(this.x, this.y+this.height/3);
    ctx.lineTo(this.x+this.width/2,this.y);
    ctx.lineTo(this.x+this.width, this.y+this.height/3);    
    ctx.lineTo(this.x+this.width-this.x *0.1,this.y+this.height);
    ctx.lineTo(this.x+this.width/2,this.y+this.height);

	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}