
let projectObj = {
        id : 0,
        name : '',
        file : '',
        length : 0,
        height : 0,
        material : ''
    }   



$('input#fileContainer').on('change', function () {
    console.log(this);

    var reader = new FileReader();
    reader.onload = function (e) {
        console.log(reader.result + '->' + typeof reader.result)
        var thisImage = reader.result;
        localStorage.setItem("imgData", thisImage);
    };
    reader.readAsDataURL(this.files[0]);
});


const saveproject = function(){
    localStorage.setItem('project', JSON.stringify(projekti))
}

const getSavedproject = () => {


    const projectJSON = localStorage.getItem('project')

    if (projectJSON !== null) {
        return JSON.parse(projectJSON)
    } else {
        return []
    }
}


$('input#save').click(function () {
    console.log('ok')
    projectObj.push({
        id : 157124,
        name : 'prokkis',
        file : 'polku',
        length : 180,
        width : 190,
        material : 'teräs'
        })
    console.log(projekti.projectObj.name)
    localStorage.setItem('projekti', JSON.stringify(projekti))

    var dataImage = localStorage.getItem('imgData');
    console.log(dataImage);
    var imgCtr = $('<img/>').prop('src', dataImage);
    $('div#fileContainer').append(imgCtr);
});

