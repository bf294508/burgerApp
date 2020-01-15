$(function() {

    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      event
  
      var newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: 0
      };
  console.log(newBurger)
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".eat").on("click", function(event) {
      var id = $(this).data("id");
      var newEaten = $(this).data("neweaten") === false;
  
      var newEatenState = {
        devoured:  newEaten
      };
      console.log('id:' + id)
      console.log('devoured:' + newEatenState.devoured)
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          console.log("changed devoured state to", newEaten);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  })