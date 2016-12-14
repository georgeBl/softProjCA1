function Pen(canvas) {
    this.canvas = canvas;
	this.context = canvas.getContext("2d");
    this.gradientCol1;
    this.gradientCol2;
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
Pen.prototype.getGradientCol1 = function(){
    return this.gradientCol1; 
}
Pen.prototype.setGradientCol1 = function(c){
    this.gradientCol1 = c;
}
Pen.prototype.getGradientCol2 = function(){
    return this.gradientCol2;
}
Pen.prototype.setGradientCol2 = function(c){
    this.gradientCol2 = c;
}
