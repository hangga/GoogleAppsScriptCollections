function doGet(e){
  sendEmails(e);
}

function doPost(e){
  sendEmails(e);
}

function sendEmails(request) {
  var address = request.parameter.address;
  var subject = request.parameter.subject;
  var message = request.parameter.message;
  
  MailApp.sendEmail(address, subject, message);
}

