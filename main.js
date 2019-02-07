
let discounts = [
    { amount: "1", price: 55 },
    { amount: "2", price: 52.50 },
    { amount: "3", price: 50 },
    { amount: "4", price: 47.50 },
    { amount: "5+", price: 45 },
    //{ amount: "60 > 200", price: 41 },
    //{ amount: "200 > 250", price: 36 },
    //{ amount: "250 >", price: 32 }
]

let products = [
    { name: 'Acelga (Kg)', amount: 0, url: 'images/acelga.jpg', type: 'veggie' },
    // { name: 'Achicoria (500g)', amount: 0, url: 'images/achicoria.jpg', type: 'veggie' },
    // { name: 'Aji Vinagre (1/2 Kg)', amount: 0, url: 'images/ajivinagre.jpg', type: 'veggie' },
    { name: 'Ajo (x2)', amount: 0, url: 'images/ajo.jpg', type: 'veggie'},
    // { name: 'Albahaca (x2)', amount: 0, url: 'images/albahaca.jpg', type: 'veggie' },
    { name: 'Anco (Kg)', amount: 0, url: 'images/anco.jpg', type: 'veggie' },
    // { name: 'Apio (Kg)', amount: 0, url: 'images/apio.jpg', type: 'veggie' },
    { name: 'Banana (Kg)', amount: 0, url: 'images/banana.jpg', type: 'fruit', price: 55 },
    // { name: 'Brocoli (Kg)', amount: 0, url: 'images/brocoli.jpg', type: 'veggie' },
    { name: 'Cebolla (Kg)', amount: 0, url: 'images/cebolla.jpg', type: 'veggie' },
    // { name: 'Cilantro (Kg)', amount: 0, url: 'images/cilantro.jpg', type: 'veggie' },
    { name: 'Ciruela (Kg)', amount: 0, url: 'images/ciruela.jpg', type: 'fruit', price: 70 },
    // { name: 'Choclo x 3', amount: 0, url: 'images/choclo.jpg', type: 'veggie' },
    { name: 'Durazno (Kg)', amount: 0, url: 'images/durazno.jpg', type: 'fruit', price: 70 },
    // { name: 'Espinaca (500g)', amount: 0, url: 'images/espinaca.jpg', type: 'veggie' },
    // { name: 'Hinojo (Kg)', amount: 0, url: 'images/hinojo.jpg', type: 'veggie' },
    // { name: 'Kale Morado (500g)', amount: 0, url: 'images/kalemorado.jpg', type: 'veggie' },
    { name: 'Kale (500g)', amount: 0, url: 'images/kale.jpg', type: 'veggie' },
    { name: 'Lechuga (1kg)', amount: 0, url: 'images/lechuga.jpg', type: 'veggie' },
    // { name: 'Lima (1/2 Kg)', amount: 0, url: 'images/lima.jpg', type: 'veggie' },
    { name: 'Limon (Kg)', amount: 0, url: 'images/limon.jpg', type: 'fruit', price: 70 },
    { name: 'Melon (Kg)', amount: 0, url: 'images/melon.jpg', type: 'fruit', price: 80 },
    { name: 'Mango (Kg)', amount: 0, url: 'images/mango.jpg', type: 'fruit', price: 80 },
    { name: 'Maracuya (Kg)', amount: 0, url: 'images/maracuya.jpg', type: 'fruit', price: 100 },
    // { name: 'Morron (Kg)', amount: 0, url: 'images/morron.jpg', type: 'veggie' },
    { name: 'Morron Rojo(Kg)', amount: 0, url: 'images/morronrojo.jpg', type: 'veggie' },
    // { name: 'Nabo (Kg)', amount: 0, url: 'images/nabo.jpg', type: 'veggie' },
    // { name: 'Pack Choi (Kg)', amount: 0, url: 'images/packchoi.jpg', type: 'veggie' },
    { name: 'Papa (Kg)', amount: 0, url: 'images/papa.jpg', type: 'veggie' },
    { name: 'Pelon (Kg)', amount: 0, url: 'images/pelon.jpg', type: 'fruit', price: 75 },
    // { name: 'Pepino (Kg)', amount: 0, url: 'images/pepino.jpg', type: 'veggie' },
    { name: 'Pera (Kg)', amount: 0, url: 'images/pera.jpg', type: 'fruit', price: 60 },
    // { name: 'Perejil (400g)', amount: 0, url: 'images/perejil.jpg', type: 'veggie' },
    { name: 'Puerro (PAQ)', amount: 0, url: 'images/puerro.jpg', type: 'veggie' },
    // { name: 'Rabanito (500g)', amount: 0, url: 'images/rabanito.jpg', type: 'veggie' },
    { name: 'Radicheta (500g)', amount: 0, url: 'images/radicheta.jpg', type: 'veggie' },
    { name: 'Repollo (Kg)', amount: 0, url: 'images/repollo.jpg', type: 'veggie' },
    // { name: 'Remolacha (Kg)', amount: 0, url: 'images/remolacha.jpg', type: 'veggie' },
    { name: 'Rucula (500g)', amount: 0, url: 'images/rucula.jpg', type: 'veggie' },
    { name: 'Sandia (Kg)', amount: 0, url: 'images/watermelon.jpg', type: 'fruit', price: 60 },
    { name: 'Tomate (Kg)', amount: 0, url: 'images/tomato.jpg', type: 'veggie' },
    { name: 'Tomate Cherry (500g)', amount: 0, url: 'images/tomatecherry.jpg', type: 'veggie' },
    // { name: 'Uva (Kg)', amount: 0, url: 'images/uva.jpg', type: 'fruit', price: 100 },
    // { name: 'Verdeo (500g)', amount: 0, url: 'images/verdeo.jpg', type: 'veggie' },
    { name: 'Zanahoria (Kg)', amount: 0, url: 'images/zanahoria.jpg', type: 'veggie' },
    // { name: 'Zapallito (Kg)', amount: 0, url: 'images/zapallito.jpg', type: 'veggie' },
    // { name: 'Zuchinni (Kg)', amount: 0, url: 'images/zuchinni.jpg', type: 'veggie' },
    { name: 'Budin banana y frutos rojos', amount: 0, url: 'images/budinbananafrutosrojos.jpg', type: 'meal', price: 90 },
    { name: 'Budin banana y pera', amount: 0, url: 'images/budinbananapera.jpg', type: 'meal', price: 90 },
    { name: 'Budin cacao amargo y frutos secos', amount: 0, url: 'images/cacaoamargo.jpg', type: 'meal', price: 90 },
    { name: 'Hamburguesa vegana de lenteja, remolacha y mijo (x3)', amount: 0, url: 'images/hamburguesavegana.jpg', type: 'meal', price: 100 },
    { name: 'Milanesa de berenjena (x6)', amount: 0, url: 'images/milanesaberenjena.jpg', type: 'meal', price: 150 },
    { name: 'Tarta de berenjena', amount: 0, url: 'images/tartavariedad.jpg', type: 'meal', price: 110 },
    { name: 'Tarta de zapallito y puerro', amount: 0, url: 'images/tartavariedad.jpg', type: 'meal', price: 110 },
    { name: 'Tarta kale y champi', amount: 0, url: 'images/tartakalechampi.jpg', type: 'meal', price: 110 },
    { name: 'Tortilla vegana', amount: 0, url: 'images/tortillavegana.jpg', type: 'meal', price: 90 }

]

products = products.sort()

var app = new Vue({
    el: '#app',
    data: {
        search: "",
        price: 55,
        discounts: discounts,
        productList: products,
        cartTotal: 0,
        cart: [],
        cartItems: 0,
        saleComplete: false,
        userData: {
            name: "",
            address: "",
            phone: "",
            email: "",
            delivery: false
        },
        active: {
            'veggie': { status: true },
            'fruit': { status: false },
            'meal': { status: false }
        },
        cartHas: {
            veggie: false,
            fruit: false,
            meal: false
        }

    },
    methods: {
        getTotal: function () {
            var self = this;
            this.cartTotal = 0;
            this.cartItems = 0;

            this.cart = this.productList.filter(function (item) {
                return item.total > 0;
            });

            for (var item in this.cart) {
                if (this.cart[item].type == 'veggie')
                    this.cartItems += this.cart[item].amount;
            }

            if (this.cartItems <= 1) { this.price = 55 }
            else if (this.cartItems == 2) { this.price = 52.50 }
            else if (this.cartItems == 3) { this.price = 50 }
            else if (this.cartItems == 4) { this.price = 47.50 }
            else if (this.cartItems >= 5 && this.cartItems) { this.price = 45 }
            //else if (this.cartItems >= 60 && this.cartItems <= 199) { this.price = 41 }
            //else if (this.cartItems >= 200 && this.cartItems <= 249) { this.price = 36 }
            //else { this.price = 32 }

            for (var item in this.cart) {
                if (this.cart[item].type == 'fruit') {
                    this.cart[item].total = this.cart[item].amount * this.cart[item].price;
                    this.cart[item].total = parseFloat(this.cart[item].total.toFixed(2))
                    this.cartHas.fruit = true;
                }
                if (this.cart[item].type == 'veggie') {
                    this.cart[item].price = this.price;
                    this.cart[item].total = this.cart[item].amount * this.price;
                    this.cartHas.veggie = true;
                }
                if (this.cart[item].type == "meal") {
                    this.cart[item].total = this.cart[item].amount * this.cart[item].price;
                    this.cart[item].total = parseFloat(this.cart[item].total.toFixed(2))
                    this.cartHas.meal = true;

                }
                this.cartTotal += this.cart[item].total;
                this.cartTotal = parseFloat(this.cartTotal.toFixed(2))
            }

        },
        addItem: function (item) {
            item.amount++;
            if (item.price) {
                item.total = item.amount * item.price;
            } else {
                item.total = item.amount * this.price;
            }
            this.getTotal();
        },
        removeItem: function (item) {
            if (item.amount > 0) {
                item.amount--;
            }
            if (item.price) {
                item.total = item.amount * item.price;
            } else {
                item.total = item.amount * this.price;
            }
            this.getTotal();
        },
        updateValue: function (item) {
            if (item.amount == "" || parseFloat(item.amount) == NaN) { item.amount = 0 }
            else (item.amount = parseFloat(item.amount))
            if (item.price) {
                item.total = item.amount * item.price;
            } else {
                item.total = item.amount * this.price;
            }
            this.getTotal();
        },
        saveSale: function (cart) {
            var today = new Date().toLocaleDateString('es-GB', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric'
            }).split('/').join('-');

            var sale = [{
                date: today,
                name: this.userData.name,
                address: this.userData.address,
                phone: this.userData.phone,
                email: this.userData.email,
                delivery: this.userData.delivery,
                total: this.cartTotal
            }];

            for (var item in cart) {
                sale.push({
                    variedad: cart[item].name,
                    cantidad: cart[item].amount,
                    precio: cart[item].price || this.price,
                    pago: cart[item].total
                })
            }

            var self = this;

            database.ref('/sales/' + today).push(sale, function (error) {
                if (error) {
                    console.log(error)
                } else {
                    self.saleComplete = true;
                    //window.location.reload();
                }
            });
        },
        setVisibility: function (type) {
            this.search = "";
            for (var t in this.active) {
                this.active[t].status = false;
            }
            this.active[type].status = true;
        },
        toggleActive: function (e) {
            e.target.classList.add('active');
        }

    },
    computed: {
        filteredItems: function () {
            var self = this;
            var newList = this.productList.sort().filter(function (item) {
                return item.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
            });
            if (self.search != "") {
                for (var t in this.active) {
                    this.active[t].status = false;
                }
                for (var i in newList) {
                    self.active[newList[i].type].status = true;
                }
            }
            if (self.search == "") {
                for (var t in this.active) {
                    if(this.active[t].status == true) {}
                    else {
                        this.active[t].status = false;
                    }
                }
            }
            return newList.filter(function (item) {
                return self.active[item.type].status == true;
            }).sort();
        }
    }
})