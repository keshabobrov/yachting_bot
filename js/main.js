function GetUserData() {
    let tg = window.Telegram.WebApp;
    alert('started 7');
    const data = tg.initDataUnsafe.user.id
    Telegram.WebApp.showAlert(data);
    alert("pressed!")
}