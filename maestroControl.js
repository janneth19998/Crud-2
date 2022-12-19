const controller = {};

controller.list = (req, res) => {
       req.getConnection((err, conn) =>{
              conn.query('SELECT * FROM maestro', (err, maestros) => {
                     if(err){
                            res.json(err);
                     }
                     res.render('maestros', {
                            data: maestros
                     });
              });
       });
};

controller.agregar = (req, res) => {
       const data = req.body;

       req.getConnection((err, conn) =>{
              conn.query('INSERT INTO maestro set ?', [data], (err, maestro) => {
                     res.redirect('/');
              });
       });
};


controller.edit = (req, res) => {
       const { id } = req.params;
       req.getConnection((err, conn) => {
              conn.query('SELECT * FROM maestro WHERE id = ?', [id], (err, maestro) => {
                     res.render('maestros_edit', {
                            data: maestro[0]
                     })
              })
       });
};

controller.actualizar = (req, res) =>{
       const { id } = req.params;
       const newMaestro = req.body;
       req.getConnection((err, conn) => {
              conn.query('UPDATE maestro set ? WHERE id = ?', [newMaestro, id], (err, rows) => {
                     res.redirect('/');
              })
       });
};


controller.delete = (req, res) => {
       const { id } = req.params;
       req.getConnection((err, conn) => {
              conn.query('DELETE FROM maestro WHERE id = ?', [id], (err, rows) => {
                     res.redirect('/');
              });
       })
};


module.exports = controller;