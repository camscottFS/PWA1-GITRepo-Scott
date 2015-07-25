/**
 * Cameron Scott
 * 07/24/2015
 * 1500919
 */

// Wrapper function
(function(){

    console.log("** Fight **"); //Console.log fight

    //DEFINE YOUR dom pieces; Multiple ways to define/access HTML tags
    var fighter1_txt = document.querySelector("#kabal").querySelector("p"); // pull in kabal
    var fighter2_txt = document.querySelector("#kratos").querySelector("p"); // pull in kratos
    var round_txt = document.querySelector("#round"); //Pull in round
    var button = document.getElementById("fight_btn"); //Pull in button that starts the game



    //SETUP YOUR click event
    button.addEventListener("click", fight, false);
    //Don't use >> button.onclick = fight; Need Event Listener for more flexibility

    //CREATE ARRAY OF OBJECTS FOR 2 FIGHTERS
    var fighters = [  //object name fighters
        {
            name:"Spiderman", //index0.name or index[0] with object-key "name" = WonderWoman
            damage:20, //index0.damage
            health: 100 //index0.health
        },
        {
            name: "Batman", //index1.name or index[1] with object-key "name" = BlackWidow
            damage:20, //index1.damage
            health:100 //index1.health
        }];
    var round =1;

    //INITIALIZE DOM innerHTML text for top of HTML page
    round_txt.innerHTML = "Click FIGHT BUTTON to Start!";
    fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;

    //REMOVE OLDjs FUNCTION, But need the below f we use addEventListener in line 15 above.
    //function onClick() {
    //  fight();
    // }

    //CREATE "FIGHT" FUNCTION
    function fight(){

        //alert(fighters[0].name +":"+fighters[0].health+"  *START* "+fighters[1].name+":"+fighters[1].health);
        fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health; //this is displaying the players health onto the HTML
        fighter2_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health; //this is displaying the players health onto the HTML

        //determine dmg
        var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);//using Math. to round dow and random a number then add it to the players existing damage
        var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);//using Math. to round dow and random a number then add it to the players existing damage

        //inflict damage
        fighters[0].health -= f1;//I took the players health and minus the .random I just made
        fighters[1].health -= f2;//I took the players health and minus the .random I just made

        console.log(fighters[0].health, fighters[1].health);//console.log each fighters current health

        //check for winner
        var result = winnerCheck();
        console.log(result);//logging the result

        round_txt.innerHTML = "ROUND " + round + " COMPLETE ";//showing round number adding counter
        round++;
        if (result === "no winner")//if no winner
        {
            fighter1_txt.innerHTML = fighters[0].name + ": " + fighters[0].health;//showing health of each player in html
            fighter2_txt.innerHTML = fighters[1].name + ": " + fighters[1].health;//showing health of each player in html
        }else{  //or
            fighter1_txt.innerHTML = result;//shows result to the html
            fighter2_txt.innerHTML = "";
            //disable the button
            button.removeEventListener("click", fight, false);
            //button.disabled = true;

            //button.onclick = "return false";
            document.querySelector('.buttonblue').innerHTML = "Game Over!";
        }

    }
    function winnerCheck() {  //function for results that will check for winner and change the result var
        var result = "no winner";
        if (fighters[0].health < 1 && fighters[1].health < 1)//if player 0 health is less than 1 and fighter 2 health is less than 1
        {
            result = "You both die - GAME OVER";//you both die
        } else if (fighters[0].health < 1) {//if ones fighters health is below 1 while the others is not we have a winner
            result = fighters[1].name + " WINS!!!";//if ones fighters health is below 1 while the others is not we have a winner
        } else if (fighters[1].health < 1) {//if ones fighters health is below 1 while the others is not we have a winner
            result = fighters[0].name + " WINS!!!";//if ones fighters health is below 1 while the others is not we have a winner
        }
        return result;//catch result
    }
})();