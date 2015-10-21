export const Colors = {
    SPADES: '#212121',
    HEARTS: '#FF5722',
    DIAMONDS: '#FF5722',
    CLUBS: '#212121',

    Card: {
        upturned: 'white',
        downturned: 'gray'
    },

    Game: {
        backgroundColor: '#4CAF50'
    },

    Foundation: {

    }
};

export const Shadows = {
    Level1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    Level2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    Level3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    Level4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    Level5: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
}

export const Dimensions = {
    Card: {
        width: 125,
        height: 175,
        borderRadius: 2
    },

    Game: {
        width: 957,
        height: 500
    }
}

const sidePadding = 10;

export const CardsLayouts = {
    A: [{ top: 62.5, left: 37.5, fontSize: 40 }],
    2: [
        { top: 20, left: 37.5, fontSize: 40 },
        { bottom: 20, left: 37.5, fontSize: 40, transform: 'rotate(180deg)' }
    ],
    get 3 () { return this[2].concat({ top: 62.5, left: 37.5, fontSize: 40 }); },
    4: [
        { top: 20, left: sidePadding, fontSize: 40 },
        { top: 20, right: sidePadding, fontSize: 40 },
        { bottom: 20, left: sidePadding, fontSize: 40, transform: 'rotate(180deg)' },
        { bottom: 20, right: sidePadding, fontSize: 40, transform: 'rotate(180deg)' }
    ],
    get 5 () {
        return this[4].concat({ top: 62.5, right: 37.5, fontSize: 40 });
    },
    6: [
        { top: 20, left: sidePadding, fontSize: 40 },
        { top: 62.5, left: sidePadding, fontSize: 40 },
        { bottom: 20, left: sidePadding, fontSize: 40, transform: 'rotate(180deg)' },
        { top: 20, right: sidePadding, fontSize: 40 },
        { top: 62.5, right: sidePadding, fontSize: 40 },
        { bottom: 20, right: sidePadding, fontSize: 40, transform: 'rotate(180deg)' }
    ],
    get 7 () {
        return this[6].concat({ top: 40, left: 37.5, fontSize: 40 });
    },
    get 8 () {
        return this[7].concat({ bottom: 40, left: 37.5, fontSize: 40,  transform: 'rotate(180deg)' })
    },
    9: [
        { top: 20, left: sidePadding, fontSize: 40 },
        { top: 20, right: sidePadding, fontSize: 40 },
        { top: 50, left: sidePadding, fontSize: 40 },
        { top: 50, right: sidePadding, fontSize: 40 },
        { top: 40, right: 37.5, fontSize: 40 },
        { bottom: 50, left: sidePadding, fontSize: 40, transform: 'rotate(180deg)' },
        { bottom: 50, right: sidePadding, fontSize: 40, transform: 'rotate(180deg)' },
        { bottom: 20, right: sidePadding, fontSize: 40, transform: 'rotate(180deg)' },
        { bottom: 20, left: sidePadding, fontSize: 40, transform: 'rotate(180deg)' },
    ],
    get 10 () {
        return this[9].concat({ bottom: 40, right: 37.5, fontSize: 40,  transform: 'rotate(180deg)' })
    },
    J: [{ top: 30, left: 30, fontSize: 40 }],
    Q: { backgroundImage: 'url(img/queen.png)' },
    K: { backgroundImage: 'url(img/king.jpg)' },
}