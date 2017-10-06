jQuery(function($) {

    console.log("Javascript Loaded");

    $('.btn-complete').on('click', function(event){
        var id = $(this).data('taskid');
        console.log("Deleting Tasks");
        $.ajax('/todo/' + id, {
            type: "DELETE"
        }).then(function(){
            console.log("Deleted task with id: " + id);
        });

    });

});