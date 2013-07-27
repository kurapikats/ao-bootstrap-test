
(function() {

  var zwsid = 'X1-ZWz1dlnsqnlmob_211k7';

  $("#btn_submit").click(function() {
    var address = encodeURIComponent($('#address').val());
    var citystatezip = encodeURIComponent($('#citystatezip').val());

    /*
    // http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz1dlnsqnlmob_211k7&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA
    $.get('http://www.zillow.com/webservice/GetSearchResults.htm', function(data) {
      $('.result').html(data);
      alert('Load was performed.');
    });
    */
   alert(zwsid);
  });

});