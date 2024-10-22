//JavaScript for Taste of Calumpit

//Hamburger toggle menu
function hamburger() {
    var menu = document.getElementById("menu-links");
    menu.classList.toggle("show-menu");
}

//Order form - submit form (alerts for total payment, or no quantity entered)
function buy(event) {
    event.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('add').value;
    const street = document.getElementById('street').value;
    const province = document.getElementById('province').value;
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;

    if (!name || !email || !phone || !address || !street || !province || !city || !zip) {
        alert("Please enter all required information first.");
        return false;
    }

    const orderItems = [
        { name: "Garlic Longganisa", price: 150 },
        { name: "Sweet Longganisa", price: 140 },
        { name: "Sweet and Spicy Longganisa", price: 140 },
        { name: "Chorizo Longganisa", price: 150 },
        { name: "Mushroom Longganisa", price: 150 }
    ];

    const order = {
        name: name,
        email: email,
        phone: phone,
        address: `${street}, ${city}, ${province}, ${zip}`,
        items: []
    };

    let totalPrice = 0;

    const quantities = document.querySelectorAll('.quantity');
    let hasOrderItems = false;

    quantities.forEach((input, index) => {
        const quantity = Number(input.value);
        if (quantity > 0) {
            hasOrderItems = true;
            const itemPrice = orderItems[index].price * quantity; 
            totalPrice += itemPrice;
            order.items.push({ name: orderItems[index].name, quantity: quantity, itemPrice: itemPrice });
        }
    });

    if (!hasOrderItems) {
        alert("Please enter at least one quantity.");
        return false;
    }

    let summary = `Thank you for your order, ${name}!\nYour order details:\n`;
    order.items.forEach(item => {
        summary += `${item.quantity} x ${item.name} - Price: ${item.itemPrice.toFixed(2)}\n`;
    });
    summary += `\n\nTotal Price: ${totalPrice.toFixed(2)}`; 
    alert(summary);
}