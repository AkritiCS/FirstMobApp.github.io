


     $('#sendMe').click(function(){

		var valU = $('#username').val();
		var valP = $('#password').val();

		if(valU=="Akriti")
		{
			if(valP=="aaa")
			{s
				alert('correct');
			}
		}			
		

	});







/*$(document).ready(function(){
	$('#sendMe').click(function(){

		var valU= $('#username').val();
		var valP= $('#password').val();


		if(valU=="Akriti"}
		{
			if(valP=="aaa")
			{
				{
					$('#p1').live('pageshow', function(event){
						$.mobile.changePage("#home");}); /*, {reload:false});*/
			/*window.location="#home";*/

				/*function(form){ $(":mobile-pagecontainer").pagecontainer('change','#home',{reload:false}); }///
							
				}
				
		
			}

		} 	

	});
});*/


/*function logfunc(form){
	if(form.username.value=="Akriti")
	{
		if(form.password.value=="aaa")
		{
			location="#home";
		}

		else {alert('Wrong Password!');}
	}
}
*/

/*
$.mobile.loadPage( "searchresults.php", {
	type: "post",
	data: $("form#search").serialize()
});
*/

/*function signin() {

    alert('singin button has been clicked');
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/json/login',
        dataType: "json",
        headers: {'Authorization':'Basic '+ btoa('abc' + ':' + '12345')},
        contentType: 'application/json',
        data:loginFormToJSON(),
        success: function(data, textStatus, jqXHR)
        {
            if(data.token !="ErrorID-11000"){
                alert('login successfully');
                //document.location.href = "accountinfo.html";
                //document.getElementById("loginBtn").replace="accountinfo.html";
                $.mobile.changePage("accountinfo.html");
            }

            else{
                alert('userid password did not match');
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('login error:'+errorThrown + textStatus);
        }
    });

}*/



