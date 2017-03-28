function loadIndex() {
    $.get('/projects', function(projects, status) {
        if (status == 200) {
            // we downloaded the content correctly
            $('body').clear();
            projects.forEach(function(project) {
                // $(document.body) // or
                var link = $('a')
                    .text(project.name)
                    .attr('href', '/projects/' + project.id)
                    .on('click', function(e) {
                        e.preventDefault();
                        loadProject('/projects/' + project.id);
                    });
                $('body').append(link);
            });
        }
    });
}

/*
function loadIndex() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/projects/');
    xhr.send(null);

    xhr.onreadystatechange = function() {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                console.log(xhr.responseText); // 'This is the returned text.'
                var projects = JSON.parse(xhr.responseText);
                projects.forEach(function(project) {
                    var name = document.createElement('a');
                    name.innerHTML = project.name;
                    name.href = "/projects/" + project.id;
                    document.body.appendChild(name);
                    project.onClick = function(event) {
                        event.preventDefault();
                        loadProject("projects/" + project.id);
                    }
                });

            } else {
                console.log('Error: ' + xhr.status); // An error occurred during the request.
            }
        }
    }
}
*/

function loadProject(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send(null);

    xhr.onreadystatechange = function() {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                console.log(xhr.responseText); // 'This is the returned text.'
                var project = JSON.parse(xhr.responseText);
                var wrapper = document.createElement('div');
                var name = document.createElement('h1');
                var image = document.createElement('img');

                name.innerHTML = project.name;
                image.src = project.imageSrc;
                wrapper.appendChild(name);
                wrapper.appendChild(image);
                // need to clear old elements before appending
                document.body.appendChild(wrapper);
            } else {
                console.log('Error: ' + xhr.status); // An error occurred during the request.
            }
        }
    }
}

loadIndex(); // get things going after the file is loaded
