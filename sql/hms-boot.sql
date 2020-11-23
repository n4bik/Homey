CREATE TABLE
    activity
    (
        id BIGINT NOT NULL,
        is_done BOOLEAN NOT NULL,
        activity_name VARCHAR,
        description VARCHAR,
        due_date DATETIME,
        completion_date DATETIME,
        assignee VARCHAR,
        PRIMARY KEY (id)
    );

CREATE TABLE
    bill
    (
        id BIGINT NOT NULL,
        is_payed BOOLEAN NOT NULL,
        bill_name VARCHAR,
        bill_category VARCHAR,
        bill_value BIGINT,
        due_date DATETIME,
        completion_date DATETIME,
        payday_date DATETIME,
        attached_user VARCHAR,
        PRIMARY KEY (id)
    );

CREATE TABLE
    beat
    (
        id BIGINT NOT NULL,
        beat_name VARCHAR,
        description VARCHAR,
        creator_first_name VARCHAR,
        creator_last_name VARCHAR,
        release_date DATETIME,
        publish_date DATETIME,
        square_cover_gfx_url VARCHAR,
        youtube_thumbnail_gfx_url VARCHAR,
        mp3tagged_url VARCHAR,
        mp3untagged_url VARCHAR,
        wav_tagged_url VARCHAR,
        wav_untagged_url VARCHAR,
        PRIMARY KEY (id)
    );

CREATE TABLE
    hibernate_sequence
    (
        next_val BIGINT
    );

INSERT INTO activity (id, is_done, activity_name, description, due_date, completion_date, assignee)
    VALUES (1, 1, 'CLEANING KITCHEN SINK', 'Clean kitchen sink with detergents', 4419619200000, 4419619200000,'Tomasz');
INSERT INTO activity (id, is_done, activity_name, description, due_date, completion_date, assignee)
    VALUES (2, 1, 'CLEANING BATHROOM SINK', 'Clean bathroom sink with detergents', 4419619200000, 4419619200000,'Vlasa');

INSERT INTO hibernate_sequence (next_val) VALUES (3);

INSERT INTO bill (id, is_payed, bill_name, bill_category, bill_value, due_date, completion_date, payday_date, attached_user)
    VALUES (1, 1, 'WATER', 'Apartment cost', 500, 4419619200000, 4419619200000, 4419619200000, 'Tomasz');
INSERT INTO bill (id, is_payed, bill_name, bill_category, bill_value, due_date, completion_date, payday_date, attached_user)
    VALUES (1, 1, 'SHOPPING', 'Shopping', 500, 4419619200000, 4419619200000, 4419619200000, 'Vlasa');

INSERT INTO hibernate_sequence (next_val) VALUES (3);