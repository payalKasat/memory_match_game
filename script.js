$(document).ready(function(){
    select_game_option();
    //back_card();
   // card_selection();

    $('.reset').click(function(){
        reset_button();
    });
    $('.card-div').click(function(){
        card_click(this);
    });
    $('.start_button').click(function(){
        $("#myModal").modal('hide');
    });
});

function cheerUp_messages(message){
    $('.messages').remove();
    var message_div = $('<div></div>').addClass('messages');
    $('.cheer_up_message').append(message_div);
    var message_p = $('<p></p>').addClass('message_p');
    $(message_div).append(message_p);
        $('.message_p').text(message[match_counter]);
}
function try_again_message(){
    $('.messages').remove();
    var message_div = $('<div></div>').addClass('messages');
    $('.cheer_up_message').append(message_div);
    var message_P = $('<p></p>').addClass('message_P');
    $(message_div).append(message_P);
    $('.message_P').text('try again');
}
function back_card(){
    $('.card-div').addClass('lock');
    var back_card_div = $('<div><img src="images/Question-animated-300px-QuestionMark.gif"></div>').addClass('back card');
    var front_card_div = $('<div></div>').addClass('front');
    $('.card-div').append(back_card_div,front_card_div);
}

function card_selection(){
    back_card();

    var card_faces = {
        alph: [
            "images/m_m_front1.jpg",
            "images/m_m_front2.jpg",
            "images/m_m_front3.jpg",
            "images/m_m_front4.jpg",
            "images/m_m_front5.jpg",
            "images/m_m_front6.jpg",
            "images/m_m_front7.jpg",
            "images/m_m_front8.jpg",
            "images/m_m_front9.jpg",
            "images/m_m_front1.jpg",
            "images/m_m_front2.jpg",
            "images/m_m_front3.jpg",
            "images/m_m_front4.jpg",
            "images/m_m_front5.jpg",
            "images/m_m_front6.jpg",
            "images/m_m_front7.jpg",
            "images/m_m_front8.jpg",
            "images/m_m_front9.jpg"
        ],
        num:[
            "images/number1.png",
            "images/number2.png",
            "images/number3.png",
            "images/number4.png",
            "images/number5.png",
            "images/number6.png",
            "images/number7.png",
            "images/number8.png",
            "images/number9.png",
            "images/number1.png",
            "images/number2.png",
            "images/number3.png",
            "images/number4.png",
            "images/number5.png",
            "images/number6.png",
            "images/number7.png",
            "images/number8.png",
            "images/number9.png"
        ],
        shapes:[
            "images/star.PNG",
            "images/rectangle.PNG",
            "images/circle.PNG",
            "images/pantagon.PNG",
            "images/oval.PNG",
            "images/oactogon.PNG",
            "images/hexagoan.PNG",
            "images/heart.PNG",
            "images/star.PNG",
            "images/rectangle.PNG",
            "images/square.PNG",
            "images/circle.PNG",
            "images/pantagon.PNG",
            "images/oval.PNG",
            "images/oactogon.PNG",
            "images/hexagoan.PNG",
            "images/heart.PNG",
            "images/squar.PNG"
        ],
        paw_petrol:[
            "images/Chase.png",
            "images/Paw-patrol-ryder.jpg",
            "images/Marshall.png",
            "images/Rubble.png",
            "images/Skye.png",
            "images/Zuma.png",
            "images/Everest.png",
            "images/Rocky.png",
            "images/paw_patrol_all.jpg",
            "images/Chase.png",
            "images/Paw-patrol-ryder.jpg",
            "images/Marshall.png",
            "images/Rubble.png",
            "images/Skye.png",
            "images/Zuma.png",
            "images/Everest.png",
            "images/Rocky.png",
            "images/paw_patrol_all.jpg"

        ]
    };

    $('.Alphabets').click(function(){
        dynamic_shuffle_card_creation(card_faces.alph);
    });
    $('.Numbers').click(function(){
        dynamic_shuffle_card_creation(card_faces.num);
    });
    $('.Shapes').click(function(){
        dynamic_shuffle_card_creation(card_faces.shapes);
    });
    $('.paw_petrol').click(function(){
        $('.back').remove();
        $('.card-div').addClass('lock');
        var back_card_div = $('<div><img src="images/paw_petrol_back.jpg"></div>').addClass('back card');
        //var front_card_div = $('<div></div>').addClass('front');
        $('.card-div').append(back_card_div);
        dynamic_shuffle_card_creation(card_faces.paw_petrol);
    });
    //$('.colors').click(function(){
    //    dynamic_shuffle_card_creation(card_faces.colors);
    //});

}
