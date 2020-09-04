import mysql from "mysql"

class DBHandler
{
    constructor (connection_details = {
        host: 'localhost',
        user: 'root',
        password: 'Adithya@29',
        database: 'EXPRESS_1'
    })
    {
        this.connection = mysql.createConnection(
            connection_details
        )
    }

    display_table(table_name) {
        this.connection.query('SELECT * FROM ' + table_name, 
            function (err, rows, fields) {
                if (err) throw err
            
                for (var row of rows)
                {
                    console.log(row);
                }
        
                console.log('The table is shown: ' + table_name);
            }
        )
    }

    add_actor(actor_name){
        this.connection.query("INSERT IGNORE INTO actor (actor_name) VALUES (?);" ,[actor_name], function (err, rows, fields) {
            if (err) throw err
            console.log('The solution is shown.');
        })
    }
}

export default DBHandler


