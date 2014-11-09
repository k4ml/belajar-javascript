(function() {
    var keyCode = {
        up : 38,
        down : 40,
        esc : 27,
        enter : 13
    }

    var hints = [];
    var curHint = null;
    var prevHint = null;
    var hintScrollCounter = -1;

    function buildHints() {
        var keyword_result_elm = document.getElementById('keyword-result');
        var list_elm = document.createElement('ul');
        for (key in hints) {
            if (String(parseInt(key, 10)) === key && hints.hasOwnProperty(key)) {
                list_elm.appendChild(hints[key]);
            }
        }
        keyword_result_elm.innerHTML = '';
        keyword_result_elm.style.visibility = 'visible';
        keyword_result_elm.appendChild(list_elm);
    }

    function autoComplete(evt) {
        if (evt.type == 'keyup') {
            if (evt.keyCode == keyCode.down) {
                return;
            }
            var keyword = evt.target.value;
            var keyword_result_elm = document.getElementById('keyword-result');
            var list_elm = document.createElement('ul');
            if (keyword.length > 2) {
                for (var i = 0; i < 5; i++) {
                    var list_item_elm = document.createElement('li');
                    var list_item = document.createTextNode('result ' + i);
                    list_item_elm.appendChild(list_item);
                    list_item_elm.addEventListener('click', function(evt) {
                        keyword_elm.value = evt.target.textContent;
                        keyword_result_elm.style.display = 'none';
                    });
                    list_elm.appendChild(list_item_elm);
                    hints.push(list_item_elm);
                }
            }
            keyword_result_elm.innerHTML = '';
            keyword_result_elm.style.visibility = 'visible';
            keyword_result_elm.appendChild(list_elm);
        }

        if (evt.type == 'keydown' && evt.keyCode == keyCode.down) {
            if (!curHint) {
                hintScrollCounter++;
                curHint = hints[hintScrollCounter];
            }
            else {
                prevHint = curHint;
                curHint = hints[hintScrollCounter];
                hintScrollCounter++;
            }
            console.log(curHint);
            console.log(hintScrollCounter);
            curHint.style.backgroundColor = 'blue';
            if (prevHint) {
                prevHint.style.backgroundColor = 'white';
            }
            buildHints();
        }
    }

    var keyword_elm = document.getElementById('keyword');
    keyword.addEventListener('keyup', autoComplete);
    keyword.addEventListener('keydown', autoComplete);
}());
