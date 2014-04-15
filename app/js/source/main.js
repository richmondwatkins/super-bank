(function() {
  'use strict';

 $(document).ready(initialize);

   function initialize() {

      $('#withdraw').click(withdraw);
     $('#deposit').click(deposit);


   }




  function withdraw() {
    var $td1 = $('<td>');
    var $td2 = $('<td>');
    var $td3 = $('<td>');
    var $td4 = $('<td>');
    var $tr = $('<tr>');
    var amt = 0;
    amt = $('#amount').val() *1;
    var balance = ($('#display').text() - amt) * 1;

    if (balance < 0) {
      $td1.text('(' + 50 + ')');
      $td3.text( '(' + amt + ')');
      $td4.text(balance - 50);
    }
    else {
      $td3.text('(' + amt + ')');
      $td4.text(balance);

    }
    $('#display').text(balance);
    $tr.append($td1,$td2,$td3,$td4);

    $('#ledger > tbody').append($tr);


    $td3.css('color','brown');
    $td1.css('color', 'red');

  }

/*    if (balance < 0) {
      balance = balance - 50;
      $('#display').text(balance);

    }

      else {
        $('#display').text(balance); */

  //  withdrawLedger(amt,balance);

 // }

  /* function feeLedger(amt,balance){
    var $td1 = $('<td>');
    var $td2 = $('<td>');
    var $td3 = $('<td>');
    var $td4 = $('<td>');

    var $tr = $('<tr>');

    $td1.text(50);
    $td3.text(amt);
    $td4.text(balance - 50);

    $tr.append($td1,$td2,$td3,$td4);

    $('#ledger > tbody').append($tr);




  function withdrawLedger(amt,balance){
    var $td1 = $('<td>');
    var $td2 = $('<td>');
    var $td3 = $('<td>');
    var $td4 = $('<td>');

    var $tr = $('<tr>');


    $td3.text(amt);
    $td4.text(balance);

    $tr.append($td1,$td2,$td3,$td4);

    $('#ledger > tbody').append($tr);

  }
*/

    function deposit() {
      var amt = 0;
      amt = $('#amount').val() *1;
      var balance = ($('#display').text() * 1) + amt;
      $('#display').text(balance);

      depositLedger(amt,balance);

}

    function depositLedger(amt,balance) {

      var $td1 = $('<td>');
      var $td2 = $('<td>');
      var $td3 = $('<td>');
      var $td4 = $('<td>');

      var $tr = $('<tr>');

      $td2.text(amt);
      $td4.text(balance);

      $tr.append($td1,$td2,$td3,$td4);

      $('#ledger > tbody').append($tr);

      $td2.css('color','blue');

}



//Get Amount
//Calc balance
//if balance is negative charge fee
//update row






})();
