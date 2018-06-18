var model = (function(){

    var data = {
        cats: [1, 2, 3, 4, 5],
        clicks: 0
    };

    return {
        getData: function() {
            return {
                cats: data.cats,
                clicks: data.clicks
            };
        }
    };

}());

var view = (function(){

    var DOMString = {
        section: '.display-cat',
        list: '.list'
    };

    return {
        creatCatList: function(cat) {
            for (let i = 0;i < cat.cats.length; i++) {
                var el = document.createElement('li');
                el.textContent = `cat ${cat.cats[i]}`;
                el.classList.add(`cat${cat.cats[i]}`);
                document.querySelector(DOMString.list).appendChild(el);
            }
        },
        getDOMString: function() {
            return DOMString;
        }
    };

}());

var controler = (function(appModel, appView){
    var data = appModel.getData();

    var update = function() {

        appView.creatCatList(data);
    };

    var setUpEventListener = function() {

        var DOM = appView.getDOMString();

        for(let i = 0;i< data.cats.length; i++) {
            var cat = data.cats[i];
            document.querySelector('.cat' + data.cats[i]).addEventListener('click', (function(copy, counter = data.clicks){
                return function() {
                    document.querySelector(DOM.section).innerHTML = '';
                    var image = document.createElement('img');
                    image.setAttribute('src', 'img/cat' + copy + '.jpg');
                    document.querySelector(DOM.section).appendChild(image);

                    var counterEl = document.createElement('p');
                    counterEl.textContent = counter;
                    document.querySelector(DOM.section).appendChild(counterEl);
                    ++counter;
                };
            })(cat));
        }
    };

    return {
        init: function() {
            console.log('app is working');
            update();
            setUpEventListener();
        }
    };

}(model, view));

controler.init();
