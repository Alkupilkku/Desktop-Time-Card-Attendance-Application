const Database = require("better-sqlite3");
const db = new Database("./database.db");
db.pragma("foreign_keys = ON");

db.exec(`
    CREATE TABLE IF NOT EXISTS henkilot(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nimi TEXT NOT NULL CHECK (length(trim(nimi)) > 0),
        rooli        TEXT NOT NULL DEFAULT 'tyontekija' CHECK (rooli IN ('tyontekija', 'ohjaaja')),
        yhteystiedot TEXT,                                          
        lisatiedot   TEXT,                                          
        tila         TEXT NOT NULL DEFAULT 'poissa'
                    CHECK (tila IN ('paikalla', 'odottaa', 'poissa')),  -- the three status boxes
        aktiivinen   INTEGER NOT NULL DEFAULT 1 CHECK (aktiivinen IN (0, 1)),
        luotu        TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS kielet(
        id   TEXT PRIMARY KEY,          -- 'fi', 'de', ...
        nimi TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS henkilot_kielet(
        henkilot_id INTEGER NOT NULL REFERENCES henkilot(id) ON DELETE CASCADE,
        kielet_id   TEXT NOT NULL REFERENCES kielet(id) ON DELETE CASCADE,
        PRIMARY KEY (henkilot_id, kielet_id)
    );
    
    CREATE TABLE IF NOT EXISTS nfc_tagit(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tagi TEXT NOT NULL UNIQUE CHECK (length(trim(tagi)) > 0),
        henkilot_id INTEGER NOT NULL REFERENCES henkilot(id) ON DELETE CASCADE,
        rekisteroity TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS leimaukset(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        henkilot_id INTEGER NOT NULL REFERENCES henkilot(id) ON DELETE RESTRICT,
        sisaan TEXT NOT NULL,
        ulos TEXT,
        tapa TEXT NOT NULL CHECK tapa IN ('nfc', 'manuaalinen'),
    );

    CREATE TABLE IF NOT EXISTS adminit (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        kayttajatunnus TEXT NOT NULL UNIQUE,
        salasana_hash TEXT NOT NULL
    );
`);
    


module.exports = db;