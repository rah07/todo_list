// $("#add").click(function() {


//     if ($('#text-box').val() !== "") {

//         let value = $("#text-box").val()
//         $("#view-area").append("<span class='display'><span class='chk'><i class='fas fa-check' id='input-check'></i></span><span class='task-text'>" + value + "</span><span class='del'><i class='fas fa-times-circle del-element'> </i></span></span>");
//         console.log($(".chk #input-check"))
//         let le = document.createElement("<span class='display'><span class='chk'><i class='fas fa-check' id='input-check'></i></span><span class='task-text'>" + value + "</span><span class='del'><i class='fas fa-times-circle del-element'> </i></span></span>");

//         $('#text-box').val('');
//     }
// })




// $(".fas fa-check").click(function() {

//     console.log('hjg');
// })
let DisplayCompleted = document.getElementById("complete-display");
let display_view = document.getElementsByClassName("display");
$("#add").click(function() {

    if ($('#text-box').val() !== "") {
        let value = $("#text-box").val();
        let ele = document.createElement('span');
        ele.className = 'display';
        ele.innerHTML = "<span class='task-text'>" + value + "</span>";



        // Add and implement delete button
        let delSpan = document.createElement('span');
        delSpan.classList.add('del');
        let delButton = document.createElement('i');
        delButton.className = "fas fa-times-circle del-element";
        delSpan.appendChild(delButton);
        ele.appendChild(delSpan);
        delButton.addEventListener('click', () =>

            ele.remove()

        );



        // Add And Implement Checked button

        let chkspan = document.createElement("span");
        chkspan.classList.add('chk');
        let chkbutton = document.createElement("i");
        chkbutton.className = "fas fa-check chked";
        chkspan.appendChild(chkbutton);
        ele.appendChild(chkspan);

        chkbutton.addEventListener("click", function(e) {

            ele.classList.add("overline");
            ele.classList.add("complete-display");
            DisplayCompleted.appendChild(ele);


        })



        $("#view-area").append(ele);
        console.log($(".chk #input-check"));
        $('#text-box').val('');


    }

})



// Working on Complete button 

$("#complete").click(function() {



    $('#complete-display').css("display", "block");

    $("#view-area").css("display", "none");



})

// Working on alltask button

$("#all-task").click(function() {

    $('#complete-display').css("display", "none");
    $("#view-area").css("display", "block");

})