(function() {
    var keyword_elm = document.getElementById('keyword');
    keyword.addEventListener('keyup', function(evt) {
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
            }
        }
        keyword_result_elm.innerHTML = '';
        keyword_result_elm.style.display = 'block';
        keyword_result_elm.appendChild(list_elm);
    });
}());
