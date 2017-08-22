/**
 *
 * exrecice 1/1
 *
 * */
function user(lastname, firstname, country, age, means) {
    this.lastname = lastname;
    this.firstname = firstname;
    this.country = country;
    this.age = age;
    this.means = means;

}

function authorize(country, means, age) {
    this.country = country;
    this.means = means;
    this.age = age;
}
var date = new Date();
var user1 = new user('Dupont', 'Serge', 'France', 36, ['visa', 'gold']);
$('#firstname').val(user1.firstname);
$('#lastname').val(user1.lastname);
$('#age').val(date.getFullYear() - user1.age);
$('#means').val(user1.means);
$('#country').val(user1.country);
/**
 *
 * exrcice 1/2
 *
 * */

var authorized = new authorize(['ETATS-UNIS', 'FRANCE', 'SUEDE'], ['MONEY', 'MASTERCARD', 'GOLD'], 40);
function check() {
    var x, y, z;
    authorized.age > user1.age ? $('#check').text("Vous n'avez pas l'age requis") : $('#check').text("Vous avez l'age requis");
    for (x in authorized.country) {
        authorized.country[x].toLowerCase() == user1.country.toLowerCase() ? $('#check2').text("Vous ne rentrer pas") : $('#check2').text("Vous rentrer");
    }
    for (z in user1.means) {
        authorized.means.includes(user1.means[z].toUpperCase()) ? $('#check3').text("Vous pouvez") : $('#check3').text("Vous pouver pas");
    }

}
/**
 *
 *exrcice 2
 *
 *
 **/
function warriors(name, attack, defense, hearth) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hearth = hearth;
    this.fight = function(warrior){
        if(this.hearth>0 && warrior.hearth>0) {
            warrior.hearth -= this.attack - warrior.defense;
            $('#hearth1').val(this.hearth);
            $('#hearth2').val(warrior.hearth);
            var $remainingLife = 100 - $('#hearth1').val();
            var $remainingLife2 = 100 - $('#hearth2').val();
            $('#comments').text(warrior.name + ' attaque ' + this.name + ' il perd ' + $remainingLife2 + ' points de vie');
            $('#comment').text(this.name + ' attaque ' + warrior.name + ' il perd ' + $remainingLife+ ' points de vie');
        }else {
            $('#comments').text('Le combatant '+this.name+' n\'as Plus de vie '+warrior.name+' remporte la partie');
        }
    }
}
/**
 *
 *magician object
 *
 *
 * */
function magician(name, attack, defense, hearth,mana) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hearth = hearth;
    this.mana = mana;
    this.regenere = function () {
        if (this.mana > 10) {
         this.mana -= 10;
         this.hearth += 10;
         $('#hearth3').val(this.hearth);
         $('#mana').val(this.mana);
         $('#commentsM').text(this.name + ' est en train de se soigner il a '+this.hearth+' points de vie');
         }
         else {
         $('#commentsM').text('plus de mana');
         }
    }
}
/**
 *
 *
 *attribute value of object
 *
 * */
var warrior1 = new warriors('hulk', 10, 5, 100);
var warrior2 = new warriors('superman', 15, 5, 100);
var warrior3 = new magician('merlin', 15, 15, 10,80);
/**
 *
 *display value
 *
 *
 * */
$('#warrior1').val(warrior1.name);
$('#warrior2').val(warrior2.name);
$('#warrior3').val(warrior3.name);
$('#attack1').val(warrior1.attack);
$('#attack2').val(warrior2.attack);
$('#attack3').val(warrior3.attack);
$('#defense1').val(warrior1.defense);
$('#defense2').val(warrior2.defense);
$('#defense3').val(warrior3.defense);
$('#hearth1').val(warrior1.hearth);
$('#hearth2').val(warrior2.hearth);
$('#hearth3').val(warrior3.hearth);
$('#mana').val(warrior3.mana);
/**
 *
 *action
 *
 *
 * */
$('#attack').click(function () {
    warrior2.fight(warrior1);
    warrior1.fight(warrior2);
    warrior3.regenere()

})