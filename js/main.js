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
function warrior(name, attack, defense, hearth) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hearth = hearth;
}
var warrior1 = new warrior('hulk', 10, 10, 100);
var warrior2 = new warrior('superman', 15, 15, 100);
var warrior3 = new warrior('merlin', 15, 15, 10);
warrior.prototype.mana = 80;
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
var life = 0;
var lifea = 0;
function attack(player1, player2) {
    if (player2.hearth > 0) {
        var lifer = life += parseInt($('#attack1').val());
        if(player1.hearth>0) {
            player1.hearth -= player2.attack;
        }
        $('#hearth1').val(player1.hearth);
        $('#comment').text(player1.name + ' attaque ' + player2.name + ' il perd ' + lifer + ' point de vie');
    } else {
        $('#comment').text('Le combatant '+player2.name+' n\'as Plus de vie');
    }
    if(player1.hearth > 0 ){
        var lifero = lifea += parseInt($('#attack2').val());
        player2.hearth -= player1.attack;
        $('#hearth2').val(player2.hearth);
        $('#comments').text(player2.name + ' attaque ' + player1.name + ' il perd ' + lifero + ' point de vie');
    }else{
        $('#comments').text('Le combatant '+player1.name+' n\'as Plus de vie');
    }
}
$('#attack').click(function () {
    attack(warrior1, warrior2);
    if (warrior3.mana > 10) {
        warrior3.mana -= 10;
        warrior3.hearth += 10;
        $('#hearth3').val(warrior3.hearth);
        $('#mana').val(warrior3.mana);
        $('#commentsM').text(warrior3.name + ' est en train de se soigner');
    }
    else {
        $('#commentsM').text('plus de mana');
    }
})