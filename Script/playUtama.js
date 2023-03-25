let incomeClick = 1;
let jmlCabang = 0;
let uangJuragan = 0;
let clickerVal = 80;
let bukaCabangVal = 50;
let autoWaktu = 1000;
let jmlAutoClick = 1;

let audioGet = $("#MoneySound")[0];
let audioOut = $("#BuySound")[0];
let bgmusic = $("#bgmusic")[0];

let music = confirm("Nyalakan Music?");

if (music == true) {
    bgmusic.play();
    bgmusic.volume = 0.35;
} else {
    bgmusic.stop();
};

$(".gambarTahu").click(function nambahUang() {
    uangJuragan = uangJuragan + incomeClick;
    $(".uangVal").text("$" + uangJuragan);
    audioGet.play();
});

$(".btnCabang").click(function beliCabang() {
    if (uangJuragan < bukaCabangVal) {
        alert("Maaf Uang Juragan Tidak Cukup.")
    } else {
        uangJuragan = uangJuragan - bukaCabangVal;
        $(".uangVal").text("$" + uangJuragan);
        bukaCabangVal = bukaCabangVal*2;
        iconCabang = $("<i/>", {
            class:"fa-solid fa-shop me-2"
        });
        $(".btnCabang").empty();
        $(".btnCabang").append(iconCabang);
        $(iconCabang).after("Beli Auto Clicker $" + bukaCabangVal);

        jmlCabang = jmlCabang + 1;
        $(".cabangVal").text(jmlCabang);
        jmlAutoClick++;
        audioOut.play();
    }
});

$(".btnAuto").click(() => {
    if (uangJuragan < clickerVal) {
        alert("Maaf Uang Juragan Tidak Cukup.");
    } else {
        uangJuragan = uangJuragan - clickerVal;
        $(".uangVal").text("$" + uangJuragan);

        iconAuto = $("<i/>", {
            class: "fa-solid fa-wand-sparkles me-2"
        });
        $(".btnAuto").empty();
        $(".btnAuto").text("Auto Clicker telah Dibeli");
        $(".btnAuto").attr("disabled", true);

        setInterval(autoNambah, autoWaktu);

        function autoNambah() {
            uangJuragan = uangJuragan + jmlAutoClick;
            $(".uangVal").text("$" + uangJuragan);
        };
        audioOut.play();
    };
});

