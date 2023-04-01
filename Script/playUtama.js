let incomeUpgrade = 0;
let incomeClick = 1;
let jmlToko = 1;
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

bgmusic.play();
bgmusic.volume = 0.35;

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
        $(iconCabang).after("Buka Cabang Baru $" + bukaCabangVal);

        if(incomeUpgrade == 0 && jmlToko >= 1){
            incomeClick = incomeClick + 1; 
            jmlToko = jmlToko + 1;
        }
        else if ( incomeUpgrade == 1 && jmlToko >= 1 && 3>= ketRisol >= 1){
            jmlToko = jmlToko + 1;
            incomeClick = incomeClick *jmlToko;
        }
        else if (incomeUpgrade > 1 && jmlToko >= 1)
        {
            jmlToko = jmlToko + 1;
            incomeClick = (incomeUpgrade+2) * jmlToko;
        };
        $(".cabangVal").text(jmlToko);
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
        if (jmlToko == 1 && lvlRisol == 1){
            incomeClick = incomeClick + ketRisol;
            incomeUpgrade = incomeUpgrade + ketRisol;
        }else{
            incomeUpgrade = incomeClick + incomeUpgrade - ketRisol;
            incomeClick = incomeClick + jmlToko * ketRisol;
        };
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
        if (jmlToko == 1 && lvlCakwe == 1){
            incomeClick = incomeClick + ketCakwe;
            incomeUpgrade = incomeUpgrade + ketCakwe;
        }else{
            incomeUpgrade = incomeUpgrade + incomeClick - ketCakwe;
            incomeClick = incomeClick + jmlToko * ketCakwe;
        }
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
        if (jmlToko == 1 && lvlCimol == 1){
            incomeClick = incomeClick + ketCimol;
            incomeUpgrade = incomeUpgrade + ketCimol;
        }else{
            incomeUpgrade = incomeUpgrade + incomeClick - ketCimol;
            incomeClick = incomeClick + jmlToko * ketCimol;
        }
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
