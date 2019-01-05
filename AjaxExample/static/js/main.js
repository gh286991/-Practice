
function Postdata(){
    
    var input = {
        A : Number(document.getElementById('A').value),
        B : Number(document.getElementById('B').value),
    }
    // console.log(input.X)
    // console.log(typeof(input.X))


    var data = JSON.stringify(input);

    var xhr = new XMLHttpRequest();
    xhr.open('post','http://127.0.0.1:8000/add/api',true);
    // xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
    // xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'),"application/x-www-form-urlencoded");
    xhr.send(data);
    // xhr.send(B);
    console.log('傳送資料 ' + data)
    // console.log('傳送資料 ' + B)

    xhr.onload = function() {
        var Result = JSON.parse(xhr.responseText)
        console.log('Result =' + Result['result']);
        document.getElementById('result').innerHTML = Result['result'] 
        return 
        };

    
   

};


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


// Postdata(data)

function test(){
    var xhr = new XMLHttpRequest();

    xhr.open('get','https://hexschool.github.io/ajaxHomework/data.json',true);

    xhr.send(null);

    xhr.onload = function(data) {
    console.log(xhr.responseText);
    };
}

console.log("Loading JS done")