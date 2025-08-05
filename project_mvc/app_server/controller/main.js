/* GET homepage */
const index = (req, res) =>gt; {
res.render('index', { title: 'Express' });
};
module.exports = {
index
};