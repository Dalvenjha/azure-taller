$(document).ready(function() {
    $.ajax({
        url: "http://52.149.174.73/api/customers/api/customers",
        headers: { 'Ocp-Apim-Subscription-Key': 'd00a7719e1034fb3b892d2df531a6fc8;product=unlimited' }
    }).then(function(data) {
       $('.clientes').append(data[Math.floor(Math.random()*3)]);
    });
});

$(document).ready(function() {
    $.ajax({
        url: "http://52.141.219.120/products/api/products",
        headers: { 'Ocp-Apim-Subscription-Key': '9db32e4fed844af0aac4537ed2f784c8;product=unlimited' }
    }).then(function(data) {
       $('.productos').append(data[Math.floor(Math.random()*3)]);
    });
}); 