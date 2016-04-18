
var Services = function(){
    var self = this;
    
    self.validateCard = function(cardNumber){
        return {resp: true};
    };
    
    
    self.existsCard = function(cardNumber){
        return $.ajax({
            url:"api/existsCard.json", 
            type: "get",
            success: function(resp){
                console.log(resp);
            }
        });
    };
    
    self.isActive = function(cardNumber){
        return {resp: true};

    }
};
