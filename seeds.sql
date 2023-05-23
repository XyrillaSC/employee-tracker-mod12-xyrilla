USE emp_track_db;


INSERT INTO
    department (id, name)
VALUES (100, "Marketing"), (101, "Sales"), (102, "HR"), (103, "Management"), (104, "Misc");

INSERT INTO
    role (
        id,
        title,
        salary,
        department_id
    )
VALUES (
        1,
        "Marketing Entry",
        20000,
        100
    ), (
        2,
        "Marketing Advanced",
        40000,
        100
    ), (
        3,
        "Sales Entry",
        10500,
        101
    ), (
        4,
        "Sales Advanced",
        30500,
        101
    ), (
        5,
        "HR Entry",
        40500,
        102
    ), (
        6,
        "HR Advanced",
        50500,
        102
    ), (
        7,
        "Management",
        80500,
        103
    ), (
        8,
        "Misc",
        10000,
        104
    )
;


INSERT INTO
    employee (
        id,
        first_name,
        last_name,
        role_id,
        manager_id
    )
VALUES (
        1,
        "Sue",
        "Davis",
        7,
        null
    ), (
        2,
        "Dave",
        "Jimson",
        7,
        1
    ), (
        3,
        "Zat",
        "Bo",
        7,
        1
    ), (
        4,
        "Tim",
        "Wilson",
        7,
        1
    ), (
        5,
        "Lily",
        "White",
        1,
        2
    ), (
        6,
        "Bill",
        "Gil",
        2,
        2
    ), (
        7,
        "Phil",
        "Wall",
        3,
        3
    ), (
        8,
        "Quinn",
        "Ball",
        4,
        3
    ), (
        9,
        "Al",
        "Zimlan",
        5,
        4
    ), (
        10,
        "Cal",
        "Bim",
        6,
        4
    ), (
        11,
        "John",
        "Zupperman",
        8,
        4
    );
    