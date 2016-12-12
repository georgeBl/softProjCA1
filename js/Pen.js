function Pen(canvas) {
    this.canvas = canvas;
	this.context = canvas.getContext("2d");
}

Pen.prototype.getCanvas = function () {
	return this.canvas;
};

Pen.prototype.getContext = function () {
	return this.context;
};

Pen.prototype.getLineWidth = function() {
    return this.context.lineWidth;
};

Pen.prototype.setLineWidth = function(lw) {
    this.context.lineWidth = lw;
};

Pen.prototype.getLineColor = function() {
    return this.context.strokeStyle;
};

Pen.prototype.setLineColor = function (c) {
    this.context.strokeStyle = c;
};

Pen.prototype.getFillColor = function() {
    return this.context.fillStyle;
};

Pen.prototype.setFillColor = function (c) {
    this.context.fillStyle = c;
};
Pen.prototype.getBackgroundColor = function(){
    return this.canvas.style.backgroundColor;
}
Pen.prototype.setBackgroundColor = function(c){
    this.canvas.style.backgroundColor = c;
}
