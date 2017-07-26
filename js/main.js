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
var user1 = new user('Dupont', 'Serge', 'France', 36, ['visa', 'gold']);
$('#firstname').val(user1.firstname);
$('#lastname').val(user1.lastname);
$('#age').val(2017 - user1.age);
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
var warrior1 = new warrior('hulk', 10,10,100);
var warrior2 = new warrior('superman', 10,10,100);