    //popup
    // var names = ["John","James","Anthony","Mark","Liam","Stewart","Pierre","Majit","Peter","Spencer","Carlo","Franco","Denis","Christian","Paul","Micheal","George","Aldo","Spencer","Gary","Mary","Anna","Juliana","Laura","Angela","Jenny","Aisha","Marta","Catherine","Francesca","Anna Maria","Jade","Carla","Ellen","Sophie","Rita","Jeniffer","Victoria","Lizzy"];
    var names = ["Manchester","London","Birmingham","Cardiff","Shrewsbury","Braintree","York","Reading","Crewe","Liverpool","Cambridge","Oxford","Leeds","Woking","Bedford","Stoke-on-trent","Carlisle","Grimsby","Newcastle","Edinburgh","Exeter","Chester","Canterbury","Bristol","Bognor Regis","York","Chipping Norton","Glasgow","London","Braintree","Hull","Windsor","Bath","London","London","Manchester"];
    var colors = ["Travelers Tummy", "Mariners Choice", "Metabolic Balance","Viral Immunity","Viral Immunity","Viral Immunity","Viral Immunity","Motherhood","Motherhood","Gastric Gold","Gastric Gold"];
    var hiddenn = false;
    $(document).ready(function(){
      $(".name").text($.rand(names));
      $(".colors").text($.rand(colors));
    });
    
    var counter = parseInt($(".pcounter:first").text());
    console.log("Counter:" + counter);
    
    (function loop() {
        
        //POP-UP TIMER
        var rand = getRandomInt(3000,6000);
        if(hiddenn){
            rand = 4000;
        }else{
            rand = getRandomInt(3000,6000);
        }
        
        setTimeout(function(){
            $(".custom-social-proof").stop().slideToggle('slow',function(){
            if(hiddenn){
                console.log("Hidden :" + rand);
                $(".name").text($.rand(names));
                $(".colors").text($.rand(colors));
                hiddenn = false;
            }else{
                console.log("Not Hidden :" + rand);
                hiddenn = true;
                if(counter != null){
                    if(counter > 1){
                      counter--;
                        $(".pcounter").animate( { color: "rgb(255, 0, 0)" }, 500 );
                        $(".pcounter").text(counter);
                        
                        if(counter > 5){
                            $(".pcounter").animate( { color: "#000" }, 500 )
                        }
                    }
                }
            }
            
            loop();
        });
    }, rand);
    }());
    
    //RANDOM FUNCTION
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    //CLOSE POP-UP
    $(".custom-close").click(function() {
        $(".custom-social-proof").stop().slideToggle('slow');
    });
    
    (function($) {
        $.rand = function(arg) {
            if ($.isArray(arg)) {
                return arg[$.rand(arg.length)];
            } else if (typeof arg == "number") {
                return Math.floor(Math.random() * arg);
            } else {
                return 4;  // chosen by fair dice roll
            }
        };
    })(jQuery);