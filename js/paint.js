var c1 = document.getElementById('paint');
var c2 = document.getElementById('c1');
document.getElementById('color').oninput = function colorget(){
    var color = this.value;
    return color;
}

c1.onclick = function(){
    
    var canvas = document.getElementById('paint');
    var ctx = canvas.getContext('2d');
        var R = 150;
        var r = 170;
        var d = 55;
        var teta = 0;
     document.getElementById('Rad').oninput = function(){R = this.value;}
     document.getElementById('rad').oninput = function(){r = this.value;}
     document.getElementById('dad').oninput = function(){d = this.value;}
     document.getElementById('spiro').onclick = function(){
        sspiro();
        function sspiro(){
            var x = (R-r)*Math.cos(teta)+d*Math.cos((r-R)*teta/r);
            var y = (R-r)*Math.sin(teta)-d*Math.sin((r-R)*teta/r);
            teta = teta+0.1;
            ctx.fillStyle = document.getSelection('#color').value;
            ctx.fillRect(250+x, 175+y, 4, 4);
            var timer = setTimeout(sspiro, 1);
        }
    }
    
    canvas.onmousedown = function(event){
	       canvas.onmousemove = function(event){
            var x = event.offsetX;
            var y = event.offsetY;
            ctx.fillStyle = document.getSelection('#color').value;
            ctx.fillRect(x-5, y-5, 10, 10);
            ctx.fill();
	       }
	       canvas.onmouseup = function(){
		          canvas.onmousemove = null;
	       }
    }
}

