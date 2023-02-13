function GetUserData() {
    const data = Telegram.WebApp.initDataUnsafe
    Telegram.WebApp.showAlert(data.user.id);
    alert("pressed!")
}