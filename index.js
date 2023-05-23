import inquirer from 'inquirer';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'xyrilla',
    database: 'emp_track_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'appOpp',
            choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
        },
    ])
    .then(async (answers) => {
        const action = answers.appOpp;
        switch (action) {
            case 'View all Departments':
                // Handle the view all departments action
                pool.execute('SELECT name FROM `department`')
                .then(([rows]) => {console.log(rows)})
                .then(() => pool.end())
                .catch((error) => {
                    console.error('Error occurred while retrieving departments', error);
                  });
                break;

            case 'View all Roles':
                // Handle the view all roles action
                pool.execute('SELECT title FROM `role`')
                .then(([rows]) => {console.log(rows)})
                .then(() => pool.end())
                .catch((error) => {
                    console.error('Error occurred while retrieving role', error);
                  });
                break;

            case 'View all Employees':
                // Handle the view all employees action
                pool.execute('SELECT first_name, last_name FROM `employee`')
                .then(([rows]) => {console.log(rows)})
                .then(() => pool.end())
                .catch((error) => {
                    console.error('Error occurred while retrieving employee', error);
                  });
                break;

            case 'Add a Department':
                // Handle the add a department action
                break;

            case 'Add a Role':
                // Handle the add a role action
                break;

            case 'Add an Employee':
                // Handle the add an employee action
                break;

            case 'Update an Employee Role':
                // Handle the update an employee role action
                break;

            default:
                console.log('Invalid action selected.');
                break;
        }

        
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });


