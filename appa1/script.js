    //popup
    // var names = ["John","James","Anthony","Mark","Liam","Stewart","Pierre","Majit","Peter","Spencer","Carlo","Franco","Denis","Christian","Paul","Micheal","George","Aldo","Spencer","Gary","Mary","Anna","Juliana","Laura","Angela","Jenny","Aisha","Marta","Catherine","Francesca","Anna Maria","Jade","Carla","Ellen","Sophie","Rita","Jeniffer","Victoria","Lizzy"];
    var names = [
    //    UK
        "Manchester","Aberdeen","London","London","Chipping Norton","Sheffield","Guildford","London","Henley-on-Thames","Henley-on-Thames","London","London","Manchester","Henley-on-Thames","Southend-on-Sea","Stratford-upon-Avon",
        "London","London","Manchester","Chichester","Birmingham","Cardiff","Swansea","Lancaster","Liverpool","Lincoln","Wolverhampton","Oxford","King's Lynn","Oxford","Oxford","Manchester","Cambridge","Poole",
        "Brighton","Brighton","Brighton","Kingston-upon-Thames","Durham","Shrewsbury","London","York","Reading","Crewe","Liverpool","Cambridge","Oxford","London","Woking","Bedford","Stoke-on-trent","Carlisle","Cheltenham",
        "Grimsby","Newcastle","Edinburgh","Manchester","Leeds","Canterbury","Portsmouth","Newcastle","Edinburgh","Exeter","Chester","Canterbury","Bristol","Bognor Regis","York","Chipping Norton","Glasgow","London",
        "Exeter","Chester","Canterbury","Bristol","Bognor Regis","York","Chipping Norton","Glasgow","London","Braintree","Hull","Windsor","Bath","London","London","Manchester","Cambridge","Eaton","Eastbourne",
        "York","Leamington Spa","Warwick","London","Harrogate","Inverness","Truro","Bath","London","Truro","Manchester","Luton","Bournemouth","London","Leeds","London","London","Liverpool","Whitehaven","	Telford",
        "Chipping Norton","Leamington Spa","Edinburgh","London","Harrogate","London","Brighton","Bath","London","Truro","Manchester","Swindon","Plymouth","London","Burnley","London","Warrington","Blackpool",
        "London","Henley-on-Thames","Manchester","Oxford","Birmingham","Cardiff","Swansea","Lancaster","Liverpool","Lincoln","Derby","Oxford","Exeter","Newcastle","Glasgow","Manchester","Cambridge","Colchester",
    //    IRELAND
    "Dublin","Dublin","Belfast","Cork","Danegal","Wexford",
     //    AMERICA
     "New York","Toronto","Toronto","Montreal", "New York","Los Angeles ","Huston TX","Seattle WA", "New York","Washington DC","Washington DC",
     "Boston MA","Chicago","Denver CO","Miami FL","Boston MA", "Boston MA","San Francisco","Austin TX",
    //    EUROPE
    "Paris","Lyon","Strasbourg","Berlin","Frankfurt","Amsterdam","Stockholm","Milan","Turin","Dallas","Naples","Rome","Bologna","Tallinn","Tel Aviv","Valencia",
    "Aachen","Antwerp","Brussels","Rome","Barcelona","Munich","Zurich","Zurich","Geneva","Paris","Helsinki","Budapest","Prague","Tel Aviv","Milan","Verona",
    "Paris","Berlin","Vienna","Milan","Monaco","Lisbon","Warsaw","Zurich","Lucerne","The Hague","Lucerne","Copenhagen","Oslo","Madrid","Milan","Seville","Madrid"];
    // END
    
    var colors = ["Viral Immunity","Metabolic Balance","Viral Immunity","Viral Immunity","Motherhood","Viral Immunity","Viral Immunity","Gastric Gold","Viral Immunity","Motherhood","Motherhood","Gastric Gold","Viral Immunity","Motherhood","Viral Immunity","Viral Immunity","Motherhood","Viral Immunity"];
    var hiddenn = false;
    $(document).ready(function(){
      $(".name").text($.rand(names));
      $(".colors").text($.rand(colors));
    });
    
    var counter = parseInt($(".pcounter:first").text());
    console.log("Counter:" + counter);
    
    (function loop() {
        
        //POP-UP TIMER
        var rand = getRandomInt(3500,6000);
        if(hiddenn){
            rand = 4000;
        }else{
            rand = getRandomInt(3500,6000);
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