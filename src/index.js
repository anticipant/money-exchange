module.exports = function makeExchange(currency) {
    let coins = {};
    const moneyValue = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1,
    };

    if (currency > 10000 ) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }

    if (Math.floor(currency/moneyValue.H) > 0) {
        coins.H = Math.floor(currency/moneyValue.H);
        currency -= coins.H*moneyValue.H;
    }

    if (Math.floor(currency/moneyValue.Q) > 0) {
        coins.Q = Math.floor(currency/moneyValue.Q);
        currency -= coins.Q*moneyValue.Q;
    }

    if (Math.floor(currency/moneyValue.D) > 0) {
        coins.D = Math.floor(currency/moneyValue.D);
        currency -= coins.D*moneyValue.D;
    }

    if (Math.floor(currency/moneyValue.N) > 0) {
        coins.N = Math.floor(currency/moneyValue.N);
        currency -= coins.N*moneyValue.N;
    }

    if (Math.floor(currency/moneyValue.P) > 0) {
        coins.P = Math.floor(currency/moneyValue.P);
    }

    return coins;
};
