$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navsection').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('.navsection').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
    
  
  });


  var btn = document.getElementById("btn");
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    var name = document.getElementById("form-name").value;
    var email = document.getElementById("form-email").value;
    var subject = document.getElementById("form-subject").value;
    var message = document.getElementById("form-message").value;
    var body = "Name: " + name + '<br/> Email: ' + email + '<br/> Subject: ' + subject + '<br/> Message: ' + message;

    Email.send({
      Host : "smtp.gmail.com",
      Username : "khairunnessaayve@gmail.com",
      Password : "ocicbsoeueeqvsmn",
      To : 'khairunnessaayve@gmail.com',
      From : email,
      Subject : subject,
      Body : body
  }).then(
    message => alert("Message Sent!")
  );
  })

