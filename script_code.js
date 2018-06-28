/**
 * Created by ashwi on 11/9/2016.
 */
var match_counter =0;
var can_click = true;  //flag veriable
var games = 0;
var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_match = 9;
var attempts = 0;
var accuracy = 0;

function select_game_option(){
    $('.modal-body,.modal-footer').empty();
    model_title("select the game option");
    var alpha_cards = $("<input>").attr({'type':'radio','name':'turn'}).html('<h4>Alphabets</h4>').addClass('Alphabets');    //Alphabets radio button created
    var num_cards = $("<input>").attr({'type':'radio','name':'turn'}).html('<h4>Numbers</h4>').addClass('Numbers');    //Numbers radio button created
    var shapes_cards = $("<input>").attr({'type':'radio','name':'turn'}).html('<h4>Shapes</h4>').addClass('Shapes');    //Shapes radio button created
    var paw_petrol_cards = $("<input>").attr({'type':'radio','name':'turn'}).html('<h4>paw_petrol</h4>').addClass('paw_petrol');    //Alphabets radio button created
    var alpha = $('<label>').html('<p>Alphabets</p>');        //Alphabets label created
    //var alpha_image = $('<img>').attr('src','images/m_m_front1.jpg').addClass('pl_img');      //Alphabets image created dynamically
    var brake = $('<br>');      //brake tag created
    var num = $('<label>').html('<p>Numbers</p>');        //Numbers label created
    //var num_image = $('<img>').attr('src','images/number1.jpg').addClass('pl_img');     //Numbers image created dynamically
    var brake1 = $('<br>');      //brake tag created
    var brake2 = $('<br>');
    var shapes = $('<label>').html('<p>Shapes</p>');        //Numbers label created
    //var shapes_image = $('<img>').attr('src','images/star.png').addClass('pl_img');     //Shapes image created dynamically
    var paw_petrol = $('<label>').html('<p>Paw_petrol</p>');
    var start_button = $("<button>").addClass('btn btn-success start_button').text('start');     //dynamically start button created
    $(".modal-body").append(alpha,alpha_cards,brake,num,num_cards,brake1,shapes,shapes_cards,brake2,paw_petrol,paw_petrol_cards);      //append player 1,2,3 and there images
    alpha.append(alpha_cards);       //append alpha radio button to Alphabets label
    num.append(num_cards);       //append num radio button to Numbers label
    shapes.append(shapes_cards);     //append shapes radio button to Shapes label
    paw_petrol.append(paw_petrol_cards);
    var cancel_button = $("<button>").addClass('btn btn-success cancel_button').text('cancel');     //dynamically cancel button created

    $(".modal-footer").append(start_button,cancel_button);     //append start button to model footer
    $('.cancel_button').click(function(){           //when cancel button clicked, model should hide
        $("#myModal").modal("hide");
    });
    card_selection();
}

function dynamic_shuffle_card_creation(old_array) {         //dynamically card creation function, with selected sets of card
    $('.front').empty();                                    //empty precise front card
    $('.card-div').removeClass('lock');                    //after card set selected, remove lock class form card-div
    var new_array = [];                                    // empty array variable created
    var card_faces_length = old_array.length;             //card face length created and value assigned to selected cards count
    for (var i = 0; i < card_faces_length; i++) {           //for loop for looping to cards
        var current_length = card_faces_length;             //current length assigned to card faces length
        var num = Math.floor(Math.random() * old_array.length); //math floor and math random function for getting number
        var temp = (old_array.splice(num, 1));                  //splice that number from old array and store in temp variable
        new_array.push(temp[0]);                            //push that temp store num image in to new_array for shuffle cards
    }
    console.log(new_array);
    for(var j = 0; j < current_length; j++) {               //one more for loop for appending new arrays images to front card
    $('.card' + j  + '>.front').append('<img src="' + new_array[j] + '">');     //append images to front card
    }

}
function card_click(element){                           //card click function
    if(!can_click || $(element).hasClass('lock')){              //if can click false and element has lock return it
        return;
    }
    if($(element).hasClass('lock')){         //if card set is not selected then cards are lock and model comes down and return
        model_title('Please select game option');
        return;
    }
    $(element).find('.back').hide();                //back hide
    $(element).find('.front').show().addClass('card_animation');        //front card shoe with css3 animation

    if(first_card_clicked == null){         //first card null then assign elements value to it and add lock class
        first_card_clicked = $(element);
        first_card_clicked.addClass('lock');
    }
    else if(second_card_clicked == null){
        second_card_clicked = $(element);       //second card null then assign elements value to it and add lock class
        second_card_clicked.addClass('lock');
        attempts++;                                 //attempts increases

        setTimeout(function(){          //timeout function for comparing two cards
            if (first_card_clicked.find(".front >img").attr('src') == second_card_clicked.find(".front >img").attr('src')){
                var messages =['Good Going','Great job','Awesome','Super Champ','You got it','Astonishing','Nice work','You did it'];                   //if cards matches cheerup messages display
                cheerUp_messages(messages);
                first_card_clicked.find('.front').hide();
                second_card_clicked.find('.front').hide();
                //hide the matched cards
                match_counter++;            //increases match counter
                console.log('match counter',match_counter,accuracy,attempts);
                first_card_clicked = null;
                second_card_clicked = null;
                //both cards value goes to null again
                can_click = true;       //can true flag value goes to true
                //check for win
                if (match_counter == total_possible_match) {
                    setTimeout(function(){
                        select_game_option();
                        show_message('Hurry you won');       //all cards match model comes down
                        games++;                            //increases game number
                        $('.games').text(games);
                        console.log('games',games);

                    }, 500);
                }

            }
            else {                          //if cards doesn't match
                try_again_message();            //try again message display
                //not a match flip cards back
                console.log('oh not a match');
                first_card_clicked.find('.front').hide().removeClass('card_animation');
                first_card_clicked.find('.back').show().addClass('card_animation');
                second_card_clicked.find('.front').hide().removeClass('card_animation');
                second_card_clicked.find('.back').show().addClass('card_animation');
                //hide front card with animation
                //back shows up
                first_card_clicked.removeClass('lock');
                second_card_clicked.removeClass('lock');
                //remove lock class for future click
                can_click = true; // resetting flag variable
                first_card_clicked = null;
                second_card_clicked = null;
                //cards set to null again
            }
        }, 2000);       //after 2 seconds all actions done
        display_stats();        //status display( attempts, accuracy, matches)
    }
}

function show_message(message){
    $("#myModal .modal-body").html(message);
    $("#myModal").modal("show");
}

function model_title(messages){         //bootstrap model
    $("#myModal .modal-header").html(messages);
    $("#myModal").modal("show");
}
function display_stats(){       //game status display function
    if(attempts==0){
        accuracy=0;  //after you reset your game, this condition gets true.
    } else {
        accuracy = (Math.floor((match_counter/attempts) *100));
    }
    $('.attempts').text(attempts);
    $('.accuracy').text(accuracy + '%');
}

function reset_button(){        //reset button click this function performs action
    $('.front').empty().remove();       //front cards remove and empty
    $('.card').remove();
    $('.messages').remove();
    //card_selection();
    model_title();
    card_selection();
    //select_game_option();
    //back_card();        //back cards creation
    reset_stats();
    display_stats();

}

function reset_stats (){
    match_counter =0;
    can_click = true;  //flag veriable
    first_card_clicked = null;
    second_card_clicked = null;
    total_possible_match = 6;
    attempts = 0;
    accuracy = 0;

}
