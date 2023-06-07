import { createSlice } from '@reduxjs/toolkit';
import { NON_AUTHENTICATED_PAGES } from '../utils/constants';

const nameSlice = createSlice({
    name: 'name',
    initialState: {
        name: 'ROSHNN', username: 'ROSHNN01', userProfile: "https://tse2.mm.bing.net/th?id=OIP.IxheWOxIH3MVVcUKPDJwtgHaD4&pid=Api&P=0&h=180",
        email: '',
        tweet: [],
        value: 0
    },
    reducers: {
        updateUserInfo: (state, action) => {
            state.name = action.payload.name;
            state.username = action.payload.username;
        },
        updateEmail: (state, action) => {
            const capitalizedEmails = action.payload.map(email => {
                const capitalizedFirstLetter = email.charAt(0).toUpperCase();
                const restOfEmail = email.slice(1);
                return capitalizedFirstLetter + restOfEmail;
            });
            state.email = [...state.email, ...capitalizedEmails];
        },

        Tweet: (state, action) => {
            state.tweet = [...state.tweet, action.payload]
        },
        Login: (state) => {
            state.isLoggedIn = true
            localStorage.setItem('isLoggedIn1', 'yes');
            window.location.href = '/';
        },
        Logout: (state) => {
            localStorage.setItem('isLoggedIn1', '');
            state.isLoggedIn = false;
        },
        checkLoggedIn: (state) => {
            const isLoggedIn = localStorage.getItem('isLoggedIn1') === 'yes';
            state.roshan = isLoggedIn;
            if (!isLoggedIn && !NON_AUTHENTICATED_PAGES.includes(window.location.pathname)) {
                window.location.href = '/login';
            }
        },
        increament: (state) => {
            state.value += 1
        },
        decreament: (state) => {
            state.value -= 1
        }
    },
});

export const { updateUserInfo, updateEmail, Tweet, Login, Logout, increament, decreament, checkLoggedIn } = nameSlice.actions;
export default nameSlice.reducer;
