$(document).on('click','#EventSave',function(e){
    var eventName = $('#name').val();
    var eventDate = $('#date').val();
    setInterval(show(eventDate,eventName),1000);
});

function show(eventDate,eventName){
    var eventTime = new Date(eventDate);
    var currentTime = new Date();
    var leftTime = eventTime -  currentTime;
    var days = Math.floor(leftTime / 1000 / 60 / 60 / 24);
    var hours = Math.floor(leftTime / 1000 / 60 / 60) % 24;
    var minutes = Math.floor(leftTime / 1000 / 60) % 60;
    var seconds = Math.floor(leftTime / 1000 )% 60;

    var cards = `
    <div class="card mb-2 mx-4 rounded">
        <div class = "card-header bg-primary">
        <div class="card-title text-center">
        ${eventName}
        </div>
        </div>
        <div class = "card-body">
            <div class="row">
                <div class="col-3">${days}</div>
                <div class="col-3">${hours}</div>
                <div class="col-3">${minutes}</div>
                <div class="col-3">${seconds}</div>
            </div>
            <div class="row">
                <div class="col-3">days</div>
                <div class="col-3">hours</div>
                <div class="col-3">minutes</div>
                <div class="col-3">seconds</div>
            </div>
        </div>
        <div class = "card-footer bg-light">
        ${eventDate}
        </div>
    </div>
    `;
    $('.app_body').append(cards);
    console.log('left'+seconds);
}



/*$(document).on('click', '#btnSave', function(e){
    e.preventDefault();
    var taskname = $('#taskname').val();
    if(taskname == ''){
        toastr.warning('Please write name of the task.');
        $('#createBox').modal('show');
    }else{
        create(taskname, (err, result) => {
            if(err){
                toastr.error(err);
            }else{
                toastr.success(result);
                showRecords();
            }
        });
        $('#taskname').val();
    }
    
});*/