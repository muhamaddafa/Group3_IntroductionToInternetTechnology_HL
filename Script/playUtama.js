let incomeClick = 1;
let jmlCabang = 0;
let uangJuragan = 0;
let clickerVal = 80;
let bukaCabangVal = 50;
let autoWaktu = 1000;
let hargaRisol = 50;
let ketRisol = 1;
let lvlRisol = 1;
let hargaCakwe = 80;
let ketCakwe = 2;
let lvlCakwe = 1;
let hargaCimol = 100;
let ketCimol = 3;
let lvlCimol = 1;
let audioGet = $("#MoneySound")[0];
let audioOut = $("#BuySound")[0];
let bgmusic = $("#bgmusic")[0];

let music = confirm("Nyalakan Music?");

if (music == true) {
    bgmusic.play();
    bgmusic.volume = 0.35;
} else {
    bgmusic.volume = 0;
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
        incomeClick = incomeClick + 1;
        $(".cabangVal").text(jmlCabang);
        $(".incomeJuragan").text("Income Juragan = $" + incomeClick);
        audioOut.play();
    };
});

$(".btnAuto").click(() => {
    if (uangJuragan < clickerVal) {
        alert("Maaf Uang Juragan Tidak Cukup.");
    } else {
        uangJuragan = uangJuragan - clickerVal;
        $(".uangVal").text("$" + uangJuragan);

        $(".btnAuto").empty();
        $(".btnAuto").text("Auto Clicker telah Dibeli");
        $(".btnAuto").attr("disabled", true);

        setInterval(autoNambah, autoWaktu);

        function autoNambah() {
            uangJuragan = uangJuragan + incomeClick;
            $(".uangVal").text("$" + uangJuragan);
        };
        audioOut.play();
    };
});

$(".btnRisol").click(() => {
    if (uangJuragan < hargaRisol) {
        alert("Maaf Uang Juragan Tidak Cukup.");
    } else {
        uangJuragan = uangJuragan - hargaRisol;
        incomeClick = incomeClick + ketRisol;
        ketRisol = ketRisol + 1;
        lvlRisol = lvlRisol + 1;
        hargaRisol = hargaRisol + 10;
        $(".uangVal").text("$" + uangJuragan);
        if (lvlRisol > 3) {
            $(".btnRisol").empty();
            $(".btnRisol").addClass("btnUpgrade btnRisol mb-2");
            $(".ketRisol").remove();
            $(".btnRisol").text("Risol - Max Level");
            $(".btnRisol").attr("disabled", true);
        } else {
            $(".btnRisol").text("Jual Risol level-" + lvlRisol + " $" + hargaRisol);
            $(".ketRisol").text("Income Juragan +$" + ketRisol);
        };
        $(".incomeJuragan").text("Income Juragan = $" + incomeClick);
    };
});

$(".btnCakwe").click(() => {
    if (uangJuragan < hargaCakwe) {
        alert("Maaf Uang Juragan Tidak Cukup.");
    } else {
        uangJuragan = uangJuragan - hargaCakwe;
        incomeClick = incomeClick + ketCakwe;
        ketCakwe = ketCakwe + 1;
        lvlCakwe = lvlCakwe + 1;
        hargaCakwe = hargaCakwe + 20;
        $(".uangVal").text("$" + uangJuragan);
        if (lvlCakwe > 3) {
            $(".btnCakwe").empty();
            $(".btnCakwe").addClass("btnUpgrade btnCakwe mb-2");
            $(".ketCakwe").remove();
            $(".btnCakwe").text("Cakwe - Max Level");
            $(".btnCakwe").attr("disabled", true);
        } else {
            $(".btnCakwe").text("Jual Cakwe level-" + lvlCakwe + " $" + hargaCakwe);
            $(".ketCakwe").text("Income Juragan +$" + ketCakwe);
        };
        $(".incomeJuragan").text("Income Juragan = $" + incomeClick);
    };
});

$(".btnCimol").click(() => {
    if (uangJuragan < hargaCimol) {
        alert("Maaf Uang Juragan Tidak Cukup.");
    } else {
        uangJuragan = uangJuragan - hargaCimol;
        incomeClick = incomeClick + ketCimol;
        ketCimol = ketCimol + 1;
        lvlCimol = lvlCimol + 1;
        hargaCimol = hargaCimol + 30;
        $(".uangVal").text("$" + uangJuragan);
        if (lvlCimol > 3) {
            $(".btnCimol").empty();
            $(".btnCimol").addClass("btnUpgrade btnCimol mb-2");
            $(".ketCimol").remove();
            $(".btnCimol").text("Cimol - Max Level");
            $(".btnCimol").attr("disabled", true);
        } else {
            $(".btnCimol").text("Jual Cimol level-" + lvlCimol + " $" + hargaCimol);
            $(".ketCimol").text("Income Juragan +$" + ketCimol);
        };
        $(".incomeJuragan").text("Income Juragan = $" + incomeClick);
    };
});
