$.ajax('/api/users',{
    accepts: 'application/json',
    success: function(data,status){
    
        var $body = $('body');
        data.forEach(function(user){
            var $elem = '<div>'+user.username+'   -   '+user.age+'</div>';
            $body.append($elem);
        })
    },
    error: function( ajax, status, err)
    {
    debugger;
    }
});

$('#submitBtn').on('click', function(e){
  var username = $('input[name="username"]').val();  
  var age = $('input[name="age"]').val();
  debugger;
  $.ajax('/api/users',{
      method:"POST",
      contentType:'application/json',
      data:JSON.stringify({
          username: username,
          age:age
      }),
      success:function(data,status)
      {
       var $body = $('body');
       
       var $elem = '<div>'+data.user.username+'   -   '+data.user.age+'</div>';
            $body.append($elem);
      },
      error:function( ajax, status, err)
      {

      }
  })

})