setInterval(function () {
    var d = new Date();
    var eta = 1454999400000 - d.getTime();
    console.log(eta / 1000);

    if (eta < 0) {
        $(".sale - btn").trigger("click");
    }
}, 10);