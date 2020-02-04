const UIController = (function() {
    const DOMStrings = {
        name: '.input-form__name',
        year: '.input-form__year',
        abv: '.input-form__abv',
        country: '.input-form__country',
        rating: '.input-form__rating',
        button: '.input-form__add',
        list: '.list'
    };

    return {
        getDOMStrings: () => {
            return DOMStrings;
        },
        addItem: (values, ID) => {
            const html = `<div class="list__item ${ID}"><h3 class="list__item__name">${values[0]}</h3><p class="list__item__year"><small>${values[1]}</small></p><p class="list__item__abv"><small>${values[2]}%</small></p><p class="list__item__country">${values[3]}</p><p class="list__item__rating">${values[4]}</p></div>`;
            document.querySelector(DOMStrings.list).insertAdjacentHTML('beforeend', html);
        },
        clearValues: () => {
            for (var key in DOMStrings){
                document.querySelector(DOMStrings[key]).value = '';
            }
        }
    }
})();

const controller = (function(UICtrl) {
    const DOM = UICtrl.getDOMStrings();
    const getValues = () => {
        const values = [];
        const name = document.querySelector(DOM.name).value;
        const year = document.querySelector(DOM.year).value;
        const abv = document.querySelector(DOM.abv).value;
        const country = document.querySelector(DOM.country).value;
        const rating = document.querySelector(DOM.rating).value;
        if (name) {
            values.push(name, year, abv, country, rating);
            return values;
        } else {
            alert('At least give the drink a name!');
        }
    };
    const setupEventListeners = () => {
        const idList = [];
        document.querySelector(DOM.button).addEventListener('click', () => {
            const year = parseInt(document.querySelector(DOM.year).value);
            const values = getValues();
            const ID = idList.length + 1;
            if (values) {
                UICtrl.addItem(values, ID);
                UICtrl.clearValues();
                idList.push(ID);
                document.querySelector(DOM.name).focus();
            }
        });
    };
    return {
        init: () => {
            setupEventListeners();
        }
    }
})(UIController);

controller.init();
