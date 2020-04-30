    //popup
    // var names = ["John","James","Anthony","Mark","Liam","Stewart","Pierre","Majit","Peter","Spencer","Carlo","Franco","Denis","Christian","Paul","Micheal","George","Aldo","Spencer","Gary","Mary","Anna","Juliana","Laura","Angela","Jenny","Aisha","Marta","Catherine","Francesca","Anna Maria","Jade","Carla","Ellen","Sophie","Rita","Jeniffer","Victoria","Lizzy"];
    var names = [ { fruit: 'Oranges', weight: 1.0 }, { fruit: 'Apples', weight: 2.0 }, { fruit: 'Pears', weight: 1.0 }, ]
    
    var colors = ["Viral Immunity","Metabolic Balance","Viral Immunity","Viral Immunity","Motherhood","Viral Immunity","Viral Immunity","Viral Immunity","Motherhood","Motherhood","Gastric Gold","Gastric Gold","Viral Immunity","Motherhood"];
    var hiddenn = false;
    $(document).ready(function(){
      $(".name").text($.rand(names));
      $(".colors").text($.rand(colors));
    });
    
    var counter = parseInt($(".pcounter:first").text());
    console.log("Counter:" + counter);
    
    (function loop() {
        
        //POP-UP TIMER
        var rand = getRandomInt(5000,16000);
        if(hiddenn){
            rand = 4000;
        }else{
            rand = getRandomInt(4000,12000);
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
                        $(".pcounter").animate( { color: "rgb(255, 0, 0)" }, 600 );
                        $(".pcounter").text(counter);
                        
                        if(counter > 5){
                            $(".pcounter").animate( { color: "#000" }, 600 )
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