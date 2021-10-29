import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from '../App'
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<App/>);
});

test("shows success message on submit with form details", () => {
    render(<App/>);

    const Firstname = screen.getByText(/firstname/i);
    userEvent.type(Firstname, "Billy");

    const Lastname = screen.getByText(/lastname/i);
    userEvent.type(Lastname, "TheKid");

    const Address = screen.getByText(/address/i);
    userEvent.type(Address, "123 WildWest Street")

    const State = screen.getByText(/state/i);
    userEvent.type(State, "Arizona");

    const zip = screen.getByText(/zip/i);
    userEvent.type(zip, "12345");

    const button = screen.findByRole("button");
    userEvent.click(button);
    
});
