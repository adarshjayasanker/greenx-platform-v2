import session from 'express-session';
import MongoStore from 'connect-mongo';

const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,

    store: MongoStore.create({mongoUrl: process.env.MONGODB_URI}),
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24,
    },
});

export default sessionMiddleware;