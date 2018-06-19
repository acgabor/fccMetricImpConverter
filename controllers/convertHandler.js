/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    if (input==this.getUnit(input)){
     return 1; 
    }
    input = input.replace(/([a-z]*[A-Z]*)$/, "");
    
    if (/^[0-9]*[.]?[0-9]*(\/[0-9]*[.]?[0-9]*)?$/.test(input)){
      if (input.includes("/")){
        var num1=parseFloat(input.split('/')[0]);
        var num2=parseFloat(input.split('/')[1]);
        result=num1/num2;
      }else{
        result=parseFloat(input);
      }
    }else{
      result='invalid';
    }
    return result;
  };
  
  this.getUnit = function(input) {
    //input=input.replace('/','');
    //var result=input.replace(parseFloat(input),'');
    var result='invalid'
    if('KM'==input.toUpperCase().substr(-2) || 'KG'==input.toUpperCase().substr(-2) || 'MI'==input.toUpperCase().substr(-2)){
      result=input.substr(-2);
    }else if('GAL'==input.toUpperCase().substr(-3) || 'LBS'==input.toUpperCase().substr(-3)){
       result=input.substr(-3);
    }else if('L'==input.toUpperCase().substr(-1)){
     result=input.substr(-1);
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
        switch (initUnit.toUpperCase()){
        case 'GAL':
          result='L';
          break;
        case 'L':
          result='gal';
          break;
        case 'LBS':
          result='Kg';
          break;
        case 'KG':
          result='lbs';
          break;
        case 'MI':
          result='km';
          break;
        case 'KM':
          result='mi';
          break;
      default:
          result='invalid';
                    }
    return result;
  };
  
  this.spellOutUnit = function(unit) {
    var result;
    switch (unit.toUpperCase()){
        case 'GAL':
          result='gallons';
          break;
        case 'L':
          result='liters';
          break;
        case 'LBS':
          result='pounds';
          break;
        case 'KG':
          result='kilograms';
          break;
        case 'MI':
          result='miles';
          break;
        case 'KM':
          result='kilometers';
          break;
      default:
          result='invalid';
                    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    console.log(initNum);
    console.log(initUnit);
    switch (initUnit.toUpperCase()){
        case 'GAL':
          result=Math.round(initNum*galToL*100000)/100000;
          break;
        case 'L':
          result=Math.round(initNum/galToL*100000)/100000;
          break;
        case 'LBS':
          result=Math.round(initNum*lbsToKg*100000)/100000;
          break;
        case 'KG':
          result=Math.round(initNum/lbsToKg*100000)/100000;
          break;
        case 'MI':
          result=Math.round(initNum*miToKm*100000)/100000;
          break;
        case 'KM':
          result=Math.round(initNum/miToKm*100000)/100000;
          break;
      default:
          result='invalid'
                    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    /*
    if (isNaN(initNum) && returnUnit=='invalid'){
      result='invalid number and unit';
    }else if(returnUnit=='invalid'){
      result='invalid unit';
    }else if(returnNum=='invalid'){
      result='invalid number';
    }else{
     */ result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
    //}
    console.log(result);
    return result;
  };
  
}

module.exports = ConvertHandler;
