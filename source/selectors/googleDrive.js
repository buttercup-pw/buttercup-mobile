const STATE_KEY = "googleDrive";

export function getToken(state) {
    return state[STATE_KEY].authToken;
}

export function isAuthenticated(state) {
    return state[STATE_KEY].authenticated;
}

export function isAuthenticating(state) {
    return state[STATE_KEY].authenticating;
}
