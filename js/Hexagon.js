function Hexagon(x, y, w, h, lc, fc, lw, f) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.lineCol = lc;
    this.fillCol = fc;
    this.f = f;
    this.lineWidth = lw;
}
    
Hexagon.prototype.draw = function (pen) {
    var ctx = pen.getContext();
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = this.lineCol;    
    var radx = this.width/2;
    var rady = this.height/2;
    ctx.moveTo(this.x,this.y);
    ctx.beginPath();
    ctx.fillStyle = this.fillStyle;
        for (var i=0;i<=10;i++) {
            ctx.lineTo(
            this.x + Math.cos((i / 3) * Math.PI) * this.width ,
            this.y + Math.sin((i / 3) * Math.PI) * this.width                 );
          }        
    ctx.stroke();
    ctx.closePath();   
}
Hexagon.prototype.fill = function (pen) {
    var ctx = pen.getContext();
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = this.lineCol;  
    ctx.fillStyle = this.fillCol;
    var radx = this.width/2;
    var rady = this.height/2;
    ctx.moveTo(this.x,this.y);
    ctx.beginPath();
    ctx.fillStyle = this.fillStyle;
        for (var i=0;i<=10;i++) {
            ctx.lineTo(
            this.x + Math.cos((i / 3) * Math.PI) * radx ,
            this.y + Math.sin((i / 3) * Math.PI) * rady                 );
          }    
    ctx.fill();
    ctx.stroke();
    ctx.closePath();   
}