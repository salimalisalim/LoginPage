

  $("#name_error_message").hide();
  $("#password_error_message").hide();


  function namevalidate(){

    var name = $("#UserName").val();
    var pattern_name =  /^[a-zA-Z]+$/ ;

    if(name =="" || name == null){
      $("#name_error_message").html("Please Enter User Name");
      $("#name_error_message").show();
      $("#UserName").css("border-bottom","2px solid #F90A0A");
      return false;
    }
    else if(name.length<4){
      $("#name_error_message").html("Enter Minimum 4 Letters");
      $("#name_error_message").show();
      $("#UserName").css("border-bottom","2px solid #F90A0A");
      return false;
    }
    else {
      $("#name_error_message").hide();
      $("#UserName").css("border-bottom","2px solid #34F458");
      return true;
    }
  }
  function passwordvalidate(){

    var password = $("#Password").val();
    var pattern_password =  /^[a-zA-Z]+$/ ;

    if(password =="" || password == null){
      $("#password_error_message").html("Please Enter Password");
      $("#password_error_message").show();
      $("#Password").css("border-bottom","2px solid #F90A0A");
      return false;
    } 
    else if(password.length<6){
      $("#password_error_message").html("Enter Minimum 6 Letters");
      $("#password_error_message").show();
      $("#Password").css("border-bottom","2px solid #F90A0A");
      return false;
    }
    else {
      $("#password_error_message").hide();
      $("#Password").css("border-bottom","2px solid #34F458");
      return true;
    }
  }
  
  function validateform(){

    if(namevalidate() == true && passwordvalidate() ) {
      return true ;
    } else{
      return false;
    }
    
  }

