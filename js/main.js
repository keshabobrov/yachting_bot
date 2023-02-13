function GetUserData() {
    alert('started 6')
    const data = Telegram.WebApp.initDataUnsafe
    Telegram.WebApp.showAlert(data.user.id);
    alert("pressed!")
}