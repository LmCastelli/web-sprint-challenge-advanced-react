import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>);

    const Firstname = screen.getByLabelText("First Name:");
    userEvent.type(Firstname, "Billy");

    const Lastname = screen.getByLabelText("Last Name:");
    userEvent.type(Lastname, "TheKid");

    const Address = screen.getByLabelText("Address:");
    userEvent.type(Address, "123 WildWest Street");

    const City = screen.getByLabelText("City:");
    userEvent.type(City, "outlaw");

    const State = screen.getByLabelText("State:");
    userEvent.type(State, "Arizona");

    const zip = screen.getByLabelText("Zip:");
    userEvent.type(zip, "12345");

    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(() => {
        const output = screen.queryByText(/You have ordered some plants! Woo-Hoo!/i);
        expect(output).toBeInTheDocument();

        const orderName = screen.queryByText(/Billy TheKid/i);
        expect(orderName).toBeInTheDocument();

        const orderStreet = screen.queryByText(/123 WildWest Street/i);
        expect(orderStreet).toBeInTheDocument();

        const orderCityState = screen.queryByText(/Outlaw, Arizona 12345/i);
        expect(orderCityState).toBeInTheDocument();
    })
});
