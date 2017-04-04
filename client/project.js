module.exports = {
    list: list
};


/* Given a list of projects as JSON, create a table */
function list(projects) {
    var table = $('<table>').class('table');
    var head = $('<tr>').append('<th>Name</th>').appendTo(table);

    projects.forEach(function(project) {
        var row = $('<tr>').append(
            $('<td>').text(project.name)
        ).appendTo(table);
    });

    return table;
}
