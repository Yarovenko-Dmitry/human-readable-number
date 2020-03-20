module.exports = function toReadable (number) {
    let hundredsUnits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
    let dozensFirstPart = ['stub', 'stub', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let dozensSecondPart = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let str = number.toString();
    let result = "";
    let intermediateResult = "";

    if (str.length == 3) {
        if (str[0] == '1') {intermediateResult = hundredsUnits[1]}
        if (str[0] == '2') {intermediateResult = hundredsUnits[2]}
        if (str[0] == '3') {intermediateResult = hundredsUnits[3]}
        if (str[0] == '4') {intermediateResult = hundredsUnits[4]}
        if (str[0] == '5') {intermediateResult = hundredsUnits[5]}
        if (str[0] == '6') {intermediateResult = hundredsUnits[6]}
        if (str[0] == '7') {intermediateResult = hundredsUnits[7]}
        if (str[0] == '8') {intermediateResult = hundredsUnits[8]}
        if (str[0] == '9') {intermediateResult = hundredsUnits[9]}

        result = intermediateResult + ' hundred';

        if ((str[1] == '0') && (str[2] == '0')) {
            return result;
        }

        if (str[1] == '0') {
            if (str[2] == '1') {intermediateResult = hundredsUnits[1]}
            if (str[2] == '2') {intermediateResult = hundredsUnits[2]}
            if (str[2] == '3') {intermediateResult = hundredsUnits[3]}
            if (str[2] == '4') {intermediateResult = hundredsUnits[4]}
            if (str[2] == '5') {intermediateResult = hundredsUnits[5]}
            if (str[2] == '6') {intermediateResult = hundredsUnits[6]}
            if (str[2] == '7') {intermediateResult = hundredsUnits[7]}
            if (str[2] == '8') {intermediateResult = hundredsUnits[8]}
            if (str[2] == '9') {intermediateResult = hundredsUnits[9]}

            result = result + ' ' + intermediateResult;                
            return result;
        }

        if (str[1] !== '1') {
            if (str[1] == '2') {intermediateResult = dozensFirstPart[2]}
            if (str[1] == '3') {intermediateResult = dozensFirstPart[3]}
            if (str[1] == '4') {intermediateResult = dozensFirstPart[4]}
            if (str[1] == '5') {intermediateResult = dozensFirstPart[5]}
            if (str[1] == '6') {intermediateResult = dozensFirstPart[6]}
            if (str[1] == '7') {intermediateResult = dozensFirstPart[7]}
            if (str[1] == '8') {intermediateResult = dozensFirstPart[8]}
            if (str[1] == '9') {intermediateResult = dozensFirstPart[9]}

            result = result + ' ' + intermediateResult;

            if (str[2] == '0') {
                return result;
            }

            if (str[2] == '1') {intermediateResult = hundredsUnits[1]}
            if (str[2] == '2') {intermediateResult = hundredsUnits[2]}
            if (str[2] == '3') {intermediateResult = hundredsUnits[3]}
            if (str[2] == '4') {intermediateResult = hundredsUnits[4]}
            if (str[2] == '5') {intermediateResult = hundredsUnits[5]}
            if (str[2] == '6') {intermediateResult = hundredsUnits[6]}
            if (str[2] == '7') {intermediateResult = hundredsUnits[7]}
            if (str[2] == '8') {intermediateResult = hundredsUnits[8]}
            if (str[2] == '9') {intermediateResult = hundredsUnits[9]}

            result = result + ' ' + intermediateResult;   
                
            return result
        } else {
            if (str[2] == '0') {
                intermediateResult = dozensSecondPart[0];            
                result = result + ' ' + intermediateResult;                
                return result;
            }
            if (str[2] == '1') {intermediateResult = dozensSecondPart[1]}
            if (str[2] == '2') {intermediateResult = dozensSecondPart[2]}
            if (str[2] == '3') {intermediateResult = dozensSecondPart[3]}
            if (str[2] == '4') {intermediateResult = dozensSecondPart[4]}
            if (str[2] == '5') {intermediateResult = dozensSecondPart[5]}
            if (str[2] == '6') {intermediateResult = dozensSecondPart[6]}
            if (str[2] == '7') {intermediateResult = dozensSecondPart[7]}
            if (str[2] == '8') {intermediateResult = dozensSecondPart[8]}
            if (str[2] == '9') {intermediateResult = dozensSecondPart[9]}

            result = result + ' ' + intermediateResult;                
            return result;
        }        
    }

    if (str.length == 2) {
        if  (str[0] !== '1') {
            if (str[0] == '2') {intermediateResult = dozensFirstPart[2]}
            if (str[0] == '3') {intermediateResult = dozensFirstPart[3]}
            if (str[0] == '4') {intermediateResult = dozensFirstPart[4]}
            if (str[0] == '5') {intermediateResult = dozensFirstPart[5]}
            if (str[0] == '6') {intermediateResult = dozensFirstPart[6]}
            if (str[0] == '7') {intermediateResult = dozensFirstPart[7]}
            if (str[0] == '8') {intermediateResult = dozensFirstPart[8]}
            if (str[0] == '9') {intermediateResult = dozensFirstPart[9]}

            result = intermediateResult;

            if (str[1] == '0') {
                return result;
            }

            if (str[1] == '1') {intermediateResult = hundredsUnits[1]}
            if (str[1] == '2') {intermediateResult = hundredsUnits[2]}
            if (str[1] == '3') {intermediateResult = hundredsUnits[3]}
            if (str[1] == '4') {intermediateResult = hundredsUnits[4]}
            if (str[1] == '5') {intermediateResult = hundredsUnits[5]}
            if (str[1] == '6') {intermediateResult = hundredsUnits[6]}
            if (str[1] == '7') {intermediateResult = hundredsUnits[7]}
            if (str[1] == '8') {intermediateResult = hundredsUnits[8]}
            if (str[1] == '9') {intermediateResult = hundredsUnits[9]}

            result = result + ' ' + intermediateResult;           
            return result;

        } else {
            if (str[1] == '0') {
                intermediateResult = dozensSecondPart[0];            
                result = intermediateResult;                
                return result;
            }
            if (str[1] == '1') {intermediateResult = dozensSecondPart[1]}
            if (str[1] == '2') {intermediateResult = dozensSecondPart[2]}
            if (str[1] == '3') {intermediateResult = dozensSecondPart[3]}
            if (str[1] == '4') {intermediateResult = dozensSecondPart[4]}
            if (str[1] == '5') {intermediateResult = dozensSecondPart[5]}
            if (str[1] == '6') {intermediateResult = dozensSecondPart[6]}
            if (str[1] == '7') {intermediateResult = dozensSecondPart[7]}
            if (str[1] == '8') {intermediateResult = dozensSecondPart[8]}
            if (str[1] == '9') {intermediateResult = dozensSecondPart[9]}
           
            result = intermediateResult;                  
            return result;
        }        
    }

    if (str.length == 1) {
        if (str[0] == '0') {intermediateResult = hundredsUnits[0]}
        if (str[0] == '1') {intermediateResult = hundredsUnits[1]}
        if (str[0] == '2') {intermediateResult = hundredsUnits[2]}
        if (str[0] == '3') {intermediateResult = hundredsUnits[3]}
        if (str[0] == '4') {intermediateResult = hundredsUnits[4]}
        if (str[0] == '5') {intermediateResult = hundredsUnits[5]}
        if (str[0] == '6') {intermediateResult = hundredsUnits[6]}
        if (str[0] == '7') {intermediateResult = hundredsUnits[7]}
        if (str[0] == '8') {intermediateResult = hundredsUnits[8]}
        if (str[0] == '9') {intermediateResult = hundredsUnits[9]}

        result = intermediateResult;
        return result        
    }
}
