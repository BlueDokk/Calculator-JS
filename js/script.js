/*=============================================
        OBJECT PROPERTIES OF CALCULATOR
=============================================*/

var properties =  { 
    keys: document.querySelectorAll('#keyboard ul li'),
	screen: document.getElementById("screen"),
    signsCount: 0,
    decimalCount: 0,
    kind: null,
    digit: null,
    result: false
}

/*=============================================
        OBJECT METHODS OF CALCULATOR
=============================================*/

var methods = {

    start: ()=>{
        for (let i=0;i<properties.keys.length;i++){
            properties.keys[i].addEventListener('click',methods.pressKey)
        }
        document.addEventListener("keydown", methods.press);
    },

    pressKey: (key)=>{
        properties.kind = key.target.getAttribute("class");
        properties.digit = key.target.innerHTML;
        
        methods.calculator(properties.kind, properties.digit);
    },

    press: (key)=>{
        if (key.keyCode == 48 || key.keyCode == 96) {
			properties.kind = "number";
			properties.digit = 0;2112
		}
        else if (key.keyCode == 49 || key.keyCode == 97) {
			properties.kind = "number";
			properties.digit = 1;
		}
        else if (key.keyCode == 50 || key.keyCode == 98) {
			properties.kind = "number";
			properties.digit = 2;
		}
        else if (key.keyCode == 51 || key.keyCode == 99) {
			properties.kind = "number";
			properties.digit = 3;
		}
        else if (key.keyCode == 52 || key.keyCode == 100) {
			properties.kind = "number";
			properties.digit = 4;
		}
        else if (key.keyCode == 53 || key.keyCode == 101) {
			properties.kind = "number";
			properties.digit = 5;
		}
        else if (key.keyCode == 54 || key.keyCode == 102) {
			properties.kind = "number";
			properties.digit = 6;
		}
        else if (key.keyCode == 55 || key.keyCode == 103) {
			properties.kind = "number";
			properties.digit = 7;
		}
        else if (key.keyCode == 56 || key.keyCode == 104) {
			properties.kind = "number";
			properties.digit = 8;
		}
        else if (key.keyCode == 57 || key.keyCode == 105) {
			properties.kind = "number";
			properties.digit = 9;
		}
        else if (key.keyCode == 187 || key.keyCode == 107) {
			properties.kind = "sign";
			properties.digit = "+";
		}
        else if (key.keyCode == 189 || key.keyCode == 109) {
			properties.kind = "sign";
			properties.digit = "-";
		}
        else if (key.keyCode == 88 || key.keyCode == 106) {
			properties.kind = "sign";
			properties.digit = "*";
		}
        else if (key.keyCode == 111) {
			properties.kind = "sign";
			properties.digit = "/";
		}
        else if (key.keyCode == 190 || key.keyCode == 110) {
			properties.kind = "decimal";
			properties.digit = ".";
		}
        else if (key.keyCode == 13) {
			properties.kind = "equal";
		}
        else if (key.keyCode == 8) {
			properties.kind = "";
            methods.clearCalculator();
		}else{
            properties.kind = "";
            properties.digit = "";

        }

        methods.calculator(properties.kind, properties.digit);
    },

    calculator: (action,digit)=>{
        switch(action){
            case "number":
                properties.signsCount = 0;

                if(properties.screen.innerHTML == '0'){
                    properties.screen.innerHTML = digit;
                }else {
                    if(properties.result){
                        properties.result = false;
                        properties.screen.innerHTML = digit;
                    }else {
                        properties.screen.innerHTML += digit;
                    }
                }
                break;

            case "sign":

                properties.signsCount++;

                if(properties.signsCount == 1){
                    if (properties.screen.innerHTML == "0") {
                        properties.screen.innerHTML = 0;
                    } else {
                        properties.screen.innerHTML += digit;
                        properties.decimalCount = false;
                        properties.result = false;
                    }
                }
                break;

            case "decimal":

                if (!properties.decimalCount && properties.signCount!=1) {
                    properties.screen.innerHTML += digit;
                    properties.decimalCount = true;
                    properties.result = false;
                }
    
                break;
            
            case "equal":

                properties.screen.innerHTML = eval(properties.screen.innerHTML);

                properties.result = true;
                break;
        }
    },
    clearCalculator: ()=>{
        properties.result = false;
        properties.screen.innerHTML = 0;
    }
}

methods.start();
