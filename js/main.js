// function GetUserData() {
//     let registrationForm = document.getElementById('registrationFormId')
// //     let tg = window.Telegram.WebApp;
// //     alert('started 7');
// //     const data = tg.initDataUnsafe.user.id
// //     Telegram.WebApp.showAlert(data);
// //     alert("pressed!")
//     console.log(dataOne.value)
// }


// function ajaxRequest(formData, url) {
//     return new Promise((resolve, reject) => {
//         $.ajax({
//             url: url,
//             type: 'POST',
//             contentType: 'application/json',
//             dataType: 'json',
//             data: formData,
//             success: function (response) {
//                 resolve(response);
//             },
//             error: function (response) {
//                 reject(alert('Error has been occurred'));
//             }
//         });
//     });
// }

function setup() {
    let formData = JSON.stringify($("#initForm").serializeArray());
    let url = "/ident";
    ajaxRequest(formData, url).then((value) => {
        document.getElementById("response").innerHTML = value
        alert(value)
    });
};


function userRegistration() {
    let formData = JSON.stringify($("#regForm").serializeArray());
    let url = "/register";
    ajaxRequest(formData, url).then((value) => {
        document.getElementById("response").innerHTML = value
    });
};


function eventCreation() {
    let tg = window.Telegram.WebApp;
    tg.HapticFeedback.impactOccurred('heavy');
};


function loadEvents() {
    let formData = ''
    let url = "/event_request"
    ajaxRequest(formData, url).then((value) => {
        let table = document.getElementById('eventlist')
        for (let i = 0; i < value[0]; i++) {
            let row = table.insertRow(i+1);
            let uid_row = value[i + 1]
            let user_row = value[i + 1 + value[0]]
            let date_row = value[i + 1 + value[0] * 2]
            let time_row = value[i + 1 + value[0] * 3]
            let all_slots_row = value[i + 1 + value[0] * 4]
            let slots_row = value[i + 1 + value[0] * 5]
            row.className = "dynamicrows"
            row.insertCell(0).innerHTML = user_row
            row.insertCell(1).innerHTML = date_row
            row.insertCell(2).innerHTML = time_row
            row.insertCell(3).innerHTML = all_slots_row
            row.insertCell(4).innerHTML = slots_row
            row.insertCell(5).innerHTML = uid_row
        }
    });
};


function addRowHandlers() {
  let table = document.getElementById("eventlist");
  let rows = table.getElementsByTagName("tr");
  for (i = 0; i < rows.length; i++) {
    let currentRow = table.rows[i];
    let createClickHandler = function(row) {
      return function() {
        // let cell = row.getElementsByTagName("tr")[0];
        // let id = cell.innerHTML;
        document.getElementById("overlay").style.display = "block";
        // loadTeam(id)
      };
    };
    currentRow.onclick = createClickHandler(currentRow);
  }
}


function loadTeam(id) {
    ajaxRequest(id, '/team_parse').then((value) => {
        let table = document.getElementById('assign_table')
        for (let i = 0; i < value.length; i++) {
            let row = table.insertRow(i+1);
            
        }
    })
};

function start() {
    let tg = window.Telegram.WebApp;
    const data = tg.initDataUnsafe.user.id
    document.getElementById("id").innerHTML = data
    document.getElementById("height").innerHTML = window.screen.height
    document.getElementById("width").innerHTML = window.screen.width
}

// window.onload = loadEvents();
window.onload = addRowHandlers();

// Todo: PopUp window in table by pressing row. =>
// Todo: username in table and user appointing to event.