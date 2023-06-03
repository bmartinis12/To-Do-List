$(document).ready(function(){

    // Call on function to expand text area when user is typing

    $(document).on('input', 'textarea', function(element){
        expandTextArea(element.currentTarget);
    });

    // Call on delete function when user presses trash icon

    $(document).on("click", '.fa-trash',  function(){
        deleteRow($(this).parent());
    })

    // Apply line-through class when checkbox is selected

    $(document).on('click',`input[type='checkbox']`, function(){
        $(this).next('textarea').toggleClass('line-through');
    });

    // Add another task box (row) to the bottom of column when add iccon is selected

    let end = $('.end');
    let add = $(".fa-plus");

    add.on("click", function(){

        let newrow = $('<div></div>')
            .addClass('row');

        let newcheckBox = $('<input>')
            .attr('type', 'checkbox')
            .addClass('checkbox')
            .appendTo(newrow);

        let newtext = $('<textarea></textarea>')
            .attr('placeholder', 'Example task.....')
            .attr('rows', '1')
            .appendTo(newrow);

        let newtrash = $('<i></i>')
            .addClass('fa-sharp fa-solid fa-trash')
            .appendTo(newrow);

        end.before(newrow);
    });
});

// Expand textarea function

function expandTextArea(element){
    element.style.height = "";
    element.style.height = element.scrollHeight + "px";
}


// Delete row function

function deleteRow(element){
    element.remove();
}