function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function Validation() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function AssignValues() {
    localStorage.setItem("text1", document.form1.text1.value);
    localStorage.setItem("text2", document.form1.text2.value);
    localStorage.setItem("text3", document.form1.text3.value);
}

function Value1() {
    alert("Value 1 is " + localStorage.getItem("text1"));
}

function Value2() {
    alert("Value 2 is " + localStorage.getItem("text2"));
}

function Value3() {
    alert("Value 3 is " + localStorage.getItem("text3"));
}

function Delete1() {
    localStorage.removeItem("text1")
    alert("Value 1 is removed");
}

function Delete2() {
    localStorage.removeItem("text2")
    alert("Value 2 is removed");
}

function Delete3() {
    localStorage.removeItem("text3")
    alert("Value 3 is removed");
}

function ClearStorage() {
    localStorage.clear();
    alert("Storage was cleared");
}

var w;

function startWorker() {
    if (typeof(Worker) !== "undefined") {
        if (typeof(w) == "undefined") {
            w = new Worker("worker.js");
        }
        w.onmessage = function(event) {
            document.getElementById("result").innerHTML = event.data;
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
}

function get_ajax(data_type) {
    data_url = document.forms["ajax_form"]["data_url"].value;
    if (data_url == "") {
        alert("data_url must be filled out");
        return false;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (data_type == 'text') {
                document.getElementById('aj_cont').innerHTML = this.responseText;
            } else if (data_type == 'status') {
                document.getElementById('aj_cont').innerHTML = this.statusText;
            } else if (data_type == 'headers') {
                document.getElementById('aj_cont').innerHTML = this.getAllResponseHeaders();
            }

        }
    };
    xhttp.open("GET", data_url, true);
    xhttp.send();
    return xhttp.responseText;
}

$(document).ready(function() {
    $("#hide").click(function() {
        $("#toggle").hide();
    });
    $("#show").click(function() {
        $("#toggle").show();
    });
});

$(document).ready(function() {
    $("#fadeIn").click(function() {
        $("#toggle1").fadeIn("slow");
    });
    $("#fadeOut").click(function() {
        $("#toggle1").fadeOut("slow");
    });
});

$(document).ready(function() {
    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });
});

$(document).ready(function() {
    $("#animate").click(function() {
        var animation = $("#animate1");
        animation.animate({ height: '50vh', opacity: '0.4' }, "slow");
        animation.animate({ width: '75vh', opacity: '0.8' }, "slow");
        animation.animate({ height: '35vh', opacity: '0.4' }, "slow");
        animation.animate({ width: '50vh', opacity: '0.8' }, "slow");
    });
});

$(document).ready(function() {
    $("#start").click(function() {
        $("#stop1").slideDown(4000);
    });
    $("#stop").click(function() {
        $("#stop1").stop();
    });
});

$(document).ready(function() {
    $("#callback").click(function() {
        $("#callback1").hide("slow", function() {
            alert("The image is now hidden");
        });
    });
});

$(document).ready(function() {
    $("#chain").click(function() {
        $("#chain1").slideUp(2000).slideDown(2000);
    });
});

$(document).ready(function() {
    $("#get_ip").click(function() {
        $.ajax({
            url: "http://ip.jsontest.com/",
            success: function(result) {
                console.log(result);
                $("#ip_div").text(result.ip);
            }
        });
    });
    $("#get_headers").click(function() {
        $.ajax({
            url: "http://headers.jsontest.com/",
            success: function(result) {
                console.log(result);
                $("#headers_div").text(result["Accept-Language"]);
            }
        });
    });
    $("#get_date").click(function() {
        $.ajax({
            url: "http://date.jsontest.com",
            success: function(result) {
                console.log(result);
                $("#date_div").text(result["date"]);
            }
        });
    });
    $("#get_echo").click(function() {
        $.ajax({
            url: "http://echo.jsontest.com/me/Revenantino/",
            success: function(result) {
                console.log(result);
                $("#echo_div").text(result["me"]);
            }
        });
    });
    $("#get_valid").click(function() {
        $.ajax({
            url: 'http://validate.jsontest.com/?json={"key":"value"}',
            success: function(result) {
                console.log(result);
                $("#valid_div").text(result["object_or_array"]);
            }
        });
    });
    $("#get_js_code").click(function() {
        $.ajax({ url: 'http://code.jsontest.com', dataType: 'jsonp' });
    });
    $("#get_md5").click(function() {
        $.ajax({
            url: 'http://md5.jsontest.com/?text=example_text',
            success: function(result) {
                console.log(result);
                res = JSON.stringify(result);
                $("#md5_div").text(res);
            }
        });
    });
});