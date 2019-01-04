// grab what user puts in



// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $("#submit-burger").on("click", function (event) {

        event.preventDefault();
        var newBurger = {
            burger_name: $("#new-burger").val().trim(),
            devoured: 0,
        };

        // post request to database to create NEW

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        )
    });

    // // send to database to UPDATE
    //       // Send the PUT request.
    $(".change-burger").on("click", function (event) {
        var id = $(this).data("id");
        console.log(id);
        var newBurgerState = {
            devoured: $(this).data("newburger")
        }

        console.log(newBurgerState);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function () {
                console.log("changed burger to", newBurgerState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

})

