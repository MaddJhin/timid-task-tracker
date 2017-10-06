jQuery(function($) {

    // console.log("Javascript Loaded");

    $('.btn-complete').on('click', function(event){
        var id = $(this).data('taskid');
        console.log("Deleting Tasks");
        $.ajax('/todo/' + id, {
            type: "DELETE"
        }).then(function(){
            console.log("Deleted task with id: " + id);
            location.reload();
        });

    });

    $('.task-input').on('keyup', function(event){

        if(event.keyCode == 13){
            var id = $(this).data('taskid');
            var updatedTask = {task: $(this).val().trim()};
            // console.log("Updating Tasks " + id + " with " + updatedTask.task);

            $.ajax('/todo/' + id, {
                type: "POST",
                data: updatedTask
            }).then(function(){
                console.log("Updating task with id: " + id);
                location.reload();
            });
        }
    });
});