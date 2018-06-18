const cats = [1, 2, 3, 4, 5];

for (let i = 0; i < cats.length; i++) {
    var cat = cats[i];

    var el = document.createElement('li');
    el.textContent = `cat ${cat}`
    el.classList.add(`cat${cat}`);

    el.addEventListener('click', (function(copy, counter = 0){
        return function(){
            document.querySelector('.display-cat').innerHTML = '';
            var image = document.createElement('img');
            image.setAttribute('src', 'img/cat' + copy + '.jpg');
            document.querySelector('.display-cat').appendChild(image);

            var counterEl = document.createElement('p');
            counterEl.textContent = counter;
            document.querySelector('.display-cat').appendChild(counterEl);
            counter++;

        };
    })(cat));

    document.querySelector('.list').appendChild(el);

}
