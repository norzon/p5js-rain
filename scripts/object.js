function Ball(x=0.0, y=0.0, sp=getRndFloat(3,5)){

    this.x=x;
    this.y=y;
    this.sp = sp;
    this.dropped = false;


    this.update = function(x, y) {
        this.x = x;
        this.y = y;
    }

    this.draw = function(size) {
        stroke(16, 130, 223);
        var w = map(this.sp,3,5,1,3);
        strokeWeight(w);
        line(this.x, this.y-(size/6)-(w*4), this.x, this.y+(size/6)+(w*4));
        //ellipse(this.x, this.y, 1, size);
        if(this.dropped){
            this.rainDrop();
        }
    }

    this.speed = function(sp) {
        this.sp = sp;
    }

    this.move = function() {
        this.y += this.sp*speedModifier;
        this.limit();
    }

    this.limit = function() {
        var w = map(this.sp,3,5,1,3);
        if(this.y>=(height-10/w)-w*5){
            this.dropped = this.sp*2/speedModifier;
        }
        if (this.y>=(height-10/w)) {
            this.y = -40;
        }
    }

    this.rainDrop = function() {
        this.dropped--;
        if(this.dropped<=0){
            this.dropped = false;
        } else {
            var a = map(this.dropped,0,this.sp*2/speedModifier,0,1);
            var c = color("rgba(16,130,223,"+a+")");
            fill(c);
            noStroke();
            var w = map(this.sp,3,5,1,3);
            ellipse(this.x, height-10/w, w*10, w*2);
        }
    }
}
