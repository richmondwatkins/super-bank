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

    if (balance < 0 ) {
      balance = balance - 50;
      $td1.text('(' + 50 + ')');
      $td3.text( '(' + amt + ')');
      $td4.text(balance);
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

    function deposit() {
      var amt = 0;
      amt = $('#amount').val() *1;
      var balance = ($('#display').text() * 1) + amt;
      var $td1 = $('<td>');
      var $td2 = $('<td>');
      var $td3 = $('<td>');
      var $td4 = $('<td>');
      var $tr = $('<tr>');

      $td2.text(amt);
      $td4.text(balance);

      $tr.append($td1,$td2,$td3,$td4);

      $('#ledger > tbody').append($tr);

      $('#display').text(balance);

      $td2.css('color','blue');

    //  depositLedger(amt,balance);

}

/*
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
*/


})();
