/**
 *
 * exrecice 1
 *
 * */
function user(lastname, firstname, country, age, means) {
        this.lastname = lastname,
        this.firstname = firstname,
        this.country = country,
        this.age = age,
        this.means = means

}
var user1 = new user('Dupont', 'Serge', 'France', 36, ['visa', 'gold']);
$('#firstname').val(user1.firstname);
$('#lastname').val(user1.lastname);
$('#age').val(2017 - user1.age);
/**
 *
 * exrcice 2
 *
 * */
function authorize(country, means,age){
    this.country = country,
        this.means = means,
        this.age = age
}
var authorized = new authorize(['ETATS-UNIS','FRANCE','SUEDE'],['MONEY','MASTERCARD','GOLD'],40);
function check(){
    var x;
    var y;
    authorized.age >user1.age?$('#check').text("Vous n'avez pas l'age requis"): $('#check').text("Vous avez l'age requis");
    for (x in authorized.country){
        console.log(authorized.country[x].toLowerCase())
        authorized.country[x].toLowerCase() == user1.country.toLowerCase()?$('#check2').text("Vous ne rentrer pas"):$('#check2').text("Vous rentrer");
    }
    for (y in authorized.means){
        authorized.means[y].toLowerCase() == user1.means[y]?$('#check3').text("Vous ne pouvez pas"):$('#check3').text("Vous pouver");
    }
}
check()