"use strict";
(function () {
    var barrowed = [],
        list = document.getElementById('myStuff'),
        form = document.getElementById('input'),
        whoInput = document.getElementById('whoInput'),
        whatInput = document.getElementById('whatInput'),
        whenInput = document.getElementById('whenInput');
    
    var addItem = function (who, what, when) {
        barrowed.push({
            who: who,
            what: what,
            when: when
        });
        console.log(barrowed);
    };
    
    var render = function () {
        var fragment = document.createDocumentFragment();
        
        barrowed.forEach(function (item) {
            var when = new Date(item.when),
                formatDate = when.toLocaleDateString() + ' ' + when.toLocaleTimeString(),
                listItem = document.createElement('li'),
                text = document.createTextNode(item.who + ' has my "' + item.what + '" (barrowed: ' + formatDate + ')');
            
            listItem.appendChild(text);
            fragment.appendChild(listItem);
        });
        list.innerHTML = "";
        list.appendChild(fragment);
    };
    
    form.addEventListener('submit', function (e) {
        var who = whoInput.value,
            what = whatInput.value,
            when = new Date(whenInput.value).getTime();
        
        addItem(whoInput.value, whatInput.value, new Date(whenInput.value).getTime());
        //addItem(who,what,when);
        
        render();
        e.preventDefault();
    });
    
    addItem('Travis', 'chainsaw', Date.now());
    addItem('Zach', 'Jeep', new Date('2015-06-01').getTime());
    addItem('Gary', 'Sander', new Date('2001-05-25').getTime());
    console.log(barrowed);
    
    render();
    
    write("ToDo: Try adding a Table Create section to our render function");
}());