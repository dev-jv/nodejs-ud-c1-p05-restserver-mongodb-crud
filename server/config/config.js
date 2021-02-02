
// Estableciendo un puerto según el entorno
process.env.PORT = process.env.PORT || 3000;

//Environment
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// DB
let urlDB;

if ( process.env.NODE_ENV === 'dev' ) {
    urlDB = 'mongodb://localhost:27017/insight';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.KDB = urlDB;
