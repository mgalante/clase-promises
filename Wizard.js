var Wizard = function(step){
    var self = this;
    
    self.currentStep = step;
    
    self.nextStep = function(){
        if(step.beforeLeave())
        {
            console.log("Todo Bien!");
        }
        else
        {
            console.log("No puedo seguir!");
        }
    }
};
