JavaScriptEx1
=============

//Multiplication function
function mult(v){

        return function(e){
                return v*e;
        }
}


//Substration function 

function sub(x){

        return function(y){

                return x - y;
        }        
}


//New adder function

function adder(){
        var args = Array.prototype.slice.call(arguments);
        var res = 0;
        
          return function(v){
          
                args.forEach(function(v2){  
                
                        res = res + fun(v2);
                });                        
                console.log(res);
                
        };
}

//Test datas to test sub

sub(0)(0); // 0
sub(2)(1); // 1
sub(2)(2); // 0
sub(2)(4); // -2

//Test datas to test adder

adder()(0); // 0
adder()(1); // 0
adder(mult(2))(1); // 2
adder(mult(2), mult(2))(1); // 4
adder(mult(2), mult(2), mult(2))(1); // 6
adder(mult(2), sub(2), mult(2))(1); // 5
