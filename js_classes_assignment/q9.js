class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity, 0
        );
    }

    applyCoupon(coupon) {
        const match = coupon.match(/^(SAVE|DISC)(\d{1,2})$/);

        if (!match || Number(match[2]) < 1 || Number(match[2]) > 100) {
            console.log("Invalid coupon");
            return;
        }

        const discount = Number(match[2]);
        const finalTotal = this.getTotal() * (1 - discount / 100);

        console.log("Original Total: ₹" + this.getTotal());
        console.log("Final Total: ₹" + finalTotal);
    }
}

const cart = new Cart();

cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("Keyboard", 1000, 1);

console.log("Cart Total: ₹" + cart.getTotal());

cart.applyCoupon("SAVE20");
