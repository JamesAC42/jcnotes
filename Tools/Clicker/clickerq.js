 $(document).ready(function(){
        $(".outelligence-header").mouseenter(function(){
                $(".outelligence-header").fadeTo("slow",.5);
        }).mouseleave(function(){
                $(".outelligence-header").fadeTo("slow",1);
        });
});

$(document).ready(function(){
        $(".jumbotron").mouseenter(function(){
                $(".jumbotron").fadeTo("slow",.5);
        }).mouseleave(function(){
                $(".jumbotron").fadeTo("slow",1);
        });
});

$(document).ready(function(){
        if(localStorage.sAmt){
                loadSave();
        };
        $(".jumbotron").mouseenter(function(){
                $(".jumbotron").fadeTo("slow",.5);
        }).mouseleave(function(){
                $(".jumbotron").fadeTo("slow",1);
        });
        $('#button_div').mouseenter(function(){
                $(this).fadeTo('fast',.6);
        }).mouseleave(function(){
                $(this).fadeTo('fast',1);
        }).click(function(){
                $(this).css('border-radius','10px').delay(500).css('border-radius','0px');
        });

        $('.upgrade_desc_div').fadeTo('fast',0);                        
        $('.double-button').hide();
        $('#notification').fadeTo('fast',0);

        $('#upMouse').mouseenter(function(){
                $('#upMouseDesc').fadeTo('fast',1);
        }).mouseleave(function(){
                $('#upMouseDesc').fadeTo('fast',0);
        });

        $('#upFarm').mouseenter(function(){
                $('#upFarmDesc').fadeTo('fast',1);
        }).mouseleave(function(){
                $('#upFarmDesc').fadeTo('fast',0);
        });

        $('#upFactory').mouseenter(function(){
                $('#upFactoryDesc').fadeTo('fast',1);
        }).mouseleave(function(){
                $('#upFactoryDesc').fadeTo('fast',0);
        });

        $('#upClick').mouseenter(function(){
                $('#upClickDesc').fadeTo('fast',1);
        }).mouseleave(function(){
                $('#upClickDesc').fadeTo('fast',0);
        });

        $('#upCity').mouseenter(function(){
                $('#upCityDesc').fadeTo('fast',1);
        }).mouseleave(function(){
                $('#upCityDesc').fadeTo('fast',0);
        });

        $('.upgrade_desc_div').mouseenter(function(){
                $(this).fadeTo('fast',1);
        }).mouseleave(function(){
                $(this).fadeTo('fast',0);
        });

        });