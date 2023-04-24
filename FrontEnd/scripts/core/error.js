function sendErrorsMessage(target, message) {
    document.getElementById(target).innerText = message;
    window.localStorage.removeItem('token');
}