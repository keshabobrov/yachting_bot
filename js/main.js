function GetUserData() {
    const data = Telegram.WebApp.initData
    Telegram.WebApp.showAlert(data.user);
    alert("pressed!")
}