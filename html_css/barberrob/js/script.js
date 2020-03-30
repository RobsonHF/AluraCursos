// $(".banner").click(function(){
//     alert($(".mapa").scrollTop());
//   });

  $(document).ready(function(){
    $(".banner").click(function(){
      alert($(".conteudo-beneficios").scrollTop() + " px");
      $("html").scrollTop();

    });
  });

//   $(document).ready(function(){
//     $("button").click(function(){
//       alert($("div").scrollTop() + " px");
//     });
//   });

$(".mapa").scrollTop()


function callSearch(){
    $('#Search').one('click', function(e){
      doSearch()
      callSearch()
    })
   }

   

   $('#btn').on('click', function() {
    $(this).prop('disabled', true);
    
    console.log('Clicou!');
    
    setTimeout(() => {
      // Após realizar algumas ações, basta remover o atributo
      // `disabled`, para que ele possa ser clicado novamente.
      $(this).prop('disabled', false);
    }, 750);
  });