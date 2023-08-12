import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className='header'>
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData
    // const pizzas = []
    const numPizzas = pizzas.length
    return (
        <menu className='menu'>
            <h2>Our Menu</h2>

            {numPizzas > 0 ? (
                <React.Fragment>
                    <p>
                        Authentic Italian cuisine, 6 creative dishes to choose
                        from. All from our stone oven, all organic, all
                        delicious.
                    </p>
                    <ul className='pizzas'>
                        {pizzaData.map((pizza) => {
                            return <Pizza key={pizza.name} pizza={pizza} />;
                        })}
                    </ul>
                </React.Fragment>
            ) : (
                <p>We are working on our menu. Please come back later :)</p>
            )}
        </menu>
    );
}

function Pizza({pizza}) {
    return (
        <li className={pizza.soldOut ? "pizza sold-out" : "pizza"}>
            <img src={pizza.photoName} alt={pizza.name}/>
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className='footer'>
            <div className='order'>
                {isOpen ? (
                    <React.Fragment>
                        <p>
                            We are open until {closeHour}:00 hrs. Please come
                            and visit us or order online.
                        </p>
                        <button className='btn'>Order</button>
                    </React.Fragment>
                ) : (
                    <p>
                        Sorry! We are closed for now. Next available at {openHour}:00 hrs.
                    </p>
                )}
            </div>
        </footer>
    );
    // return React.createElement("footer", null, "We are currently open!");
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// React before 18
// React.render(<App/>, document.getElementById("root"));
