// code your solution here

const saturdayFun = function(dActivity = 'roller-skate'){
    return `This Saturday, I want to ${dActivity}!`;
};

function mondayWork(work ="go to the office"){ 
    return `This Monday, I will ${work}.`;
}
function wrapAdjective(wrap = '*'){
    function wrapped(text){
        return `You are ${wrap}${text}${wrap}!`;
    }
    return wrapped;
}

