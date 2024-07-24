import login from './Login/login.js';

describe('login function', () => {
    let mockLoginForm;
    let mockLoginErrorMsg;
    let mockAlertFunction;

    beforeEach(() => {
        mockLoginForm = {
            Email: { value: '' },
            Password: { value: '' }
        };
        mockLoginErrorMsg = {
            textContent: '',
            style: { opacity: 0 }
        };
        mockAlertFunction = jest.fn();
    });

    test('shows success alert for correct email and password', () => {
        mockLoginForm.Email.value = 'user@gmail.com';
        mockLoginForm.Password.value = 'password';

        const result = login(mockLoginForm, mockLoginErrorMsg, mockAlertFunction);

        expect(result).toBe(true);
        expect(mockAlertFunction).toHaveBeenCalledWith('You have successfully logged in.');
        expect(mockLoginErrorMsg.style.opacity).toBe(0);
    });

    test('shows error message for incorrect email', () => {
        mockLoginForm.Email.value = 'wrong@gmail.com';
        mockLoginForm.Password.value = 'password';

        const result = login(mockLoginForm, mockLoginErrorMsg, mockAlertFunction);

        expect(result).toBe(false);
        expect(mockLoginErrorMsg.textContent).toBe('Invalid Email!');
        expect(mockLoginErrorMsg.style.opacity).toBe(1);
    });

    test('shows error message for incorrect password', () => {
        mockLoginForm.Email.value = 'user@gmail.com';
        mockLoginForm.Password.value = 'wrongpassword';

        const result = login(mockLoginForm, mockLoginErrorMsg, mockAlertFunction);

        expect(result).toBe(false);
        expect(mockLoginErrorMsg.textContent).toBe('Invalid Password!');
        expect(mockLoginErrorMsg.style.opacity).toBe(1);
    });

    test('shows error message for both incorrect email and password', () => {
        mockLoginForm.Email.value = 'wrong@gmail.com';
        mockLoginForm.Password.value = 'wrongpassword';

        const result = login(mockLoginForm, mockLoginErrorMsg, mockAlertFunction);

        expect(result).toBe(false);
        expect(mockLoginErrorMsg.textContent).toBe('Invalid Email & Password!');
        expect(mockLoginErrorMsg.style.opacity).toBe(1);
    });

    test('throws error if email or password is missing', () => {
        expect(() => {
            login(mockLoginForm, mockLoginErrorMsg, mockAlertFunction);
        }).toThrow('Email and password are required');
        
        mockLoginForm.Email.value = 'user@gmail.com';
        expect(() => {
            login(mockLoginForm, mockLoginErrorMsg, mockAlertFunction);
        }).toThrow('Email and password are required');

        mockLoginForm.Email.value = '';
        mockLoginForm.Password.value = 'password';
        expect(() => {
            login(mockLoginForm, mockLoginErrorMsg, mockAlertFunction);
        }).toThrow('Email and password are required');
    });
});
