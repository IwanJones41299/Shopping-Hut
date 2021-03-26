import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Login from '../../Components/login';

//Renders the Login Components

describe("Login form renders", () => {
    it("Check login renders", () => {
        const {} = render (<Login />);
        expect(<Login/>).toBeTruthy();
    });
    
    it("Check username input field renders", () => {
        const { queryByTitle } = render(<Login />);
        const usernameInput = queryByTitle("usernameInput");
        expect(usernameInput).toBeTruthy();
    });
    
    it("Check password input field renders", () => {
        const { queryByTitle } = render(<Login />);
        const passwordInput = queryByTitle("passwordInput");
        expect(passwordInput).toBeTruthy();
    });
    
    it("Check password input field renders", () => {
        const { queryByTitle } = render(<Login />);
        const LoginFormSubmit = queryByTitle("LoginFormSubmit");
        expect(LoginFormSubmit).toBeTruthy();
    });
});