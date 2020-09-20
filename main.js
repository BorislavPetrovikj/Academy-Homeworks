let arr = [["Antonio", true, 5], ["Marija", false], ["Darko", true, 3]];

let name = prompt("Enter Name");

let table = document.querySelector(".table");

function printname(name) {

    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < arr[i].length; j++) {

            if (name == arr[i][j]) {
                if (arr[i][1]) {


                    table.innerHTML +=

                        ` <tr>
                        <td>${arr[i][0]}<td>
                        <td>Voted!<td>
                        <td>${arr[i][2]}<td>
                        </tr>`


                }
                else {
                    table.innerHTML +=

                        `<tr>
                        <td>${arr[i][0]}<td>
                        <td>Didn't vote !<td>
                        </tr>
                     `
                }
            }

        }

    }


}

printname(name);





