$(document).ready(function() {
    $("#btn-paket-1").click(function() {
        $(".detail-paket-2").hide(500);
        $(".detail-paket-3").hide(500);
        $(".detail-paket-1").toggle(1000);
    })

    $("#btn-paket-2").click(function() {
        $(".detail-paket-1").hide(500);
        $(".detail-paket-3").hide(500);
        $(".detail-paket-2").toggle(1000);
    })

    $("#btn-paket-3").click(function() {
        $(".detail-paket-1").hide(500);
        $(".detail-paket-2").hide(500);
        $(".detail-paket-3").toggle(1000);
    })
});