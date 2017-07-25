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
var authorized = new authorize(['ETATS-UNIS','FRANCE','SUEDE'],['MONEY','MASTERCARD'],40);
function check(){
    var x;
    authorized.age >user1.age?$('#check').text("Vous n'avez pas l'age requis"): $('#check').text("Vous avez l'age requis");
    for (x in authorized.country){
        console.log(authorized.country[x].toLowerCase())
        authorized.country[x].toLowerCase() == user1.country.toLowerCase()?$('#check2').text("Vous ne rentrer pas"):$('#check2').text("Vous rentrer");
    }
}
check()