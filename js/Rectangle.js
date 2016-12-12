function Rectangle(x, y, w, h, lc, fc, lw, fi, g) {
//	this.x = x;
//	this.y = y;
//	this.width = w;
//	this.height = h;
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
	this.grad = g;
}

Rectangle.prototype.draw = function (pen) {
    var ctx = pen.getContext();
	ctx.strokeStyle = this.lineCol;
    ctx.lineWidth = this.lineWidth;
	ctx.beginPath();
	ctx.rect(this.x, this.y, this.width, this.height);
	ctx.stroke();
	ctx.closePath();
}

Rectangle.prototype.fill = function (pen) {
    var ctx = pen.getContext();
    ctx.strokeStyle = this.lineCol;
    ctx.lineWidth = this.lineWidth;
   
    
    if(this.grad === "linear"){
        ctx.beginPath();
        var grd = ctx.createLinearGradient(0,0,0,Math.abs(this.x+this.width));
        grd.addColorStop(0,"black");
        grd.addColorStop(1,"red");
        ctx.fillStyle = grd;
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
    
    else if (this.grad === "radial") {
        ctx.beginPath();
        var grd=ctx.createRadialGradient(this.width/2+this.x,this.height/2,Math.abs(this.width/2),this.width/2,this.height/2,Math.abs(this.y));
        grd.addColorStop(0,"red");
        grd.addColorStop(1,"white");
        ctx.fillStyle= grd;
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        console.log("amIstillHere?");
        
    }else {
        ctx.beginPath();
      //  delete ctx.fillStyle.prototype.;       
        ctx.fillStyle = this.fillCol;
        pen.setFillColor(this.fillCol);
        console.log(this.fillCol);
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
   
    
}
