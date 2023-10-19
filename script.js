    let members = [{
        name: 'Chimka',
        points: '30'
    }, {
        name: 'Ryan',
        points: '18'
    }];

renderLeaderboard();


function renderLeaderboard() {
    let todoListHTML = '';
    for (let i = 0; i < members.length; i++) {
    const membersIndex = members[i];
        console.log(membersIndex);
    const name = membersIndex.name;
    var points = membersIndex.points;
        
        let html = `
        <div class="lboard_mem">
                            <div class="name_bar">
                                <p><span>${i + 1}. </span>${name}</p>
                                <div class="bar_wrap">
                                    <div class="inner_bar" style="width: ${(points / 56) * 100}%"></div>
                                </div>
                            </div>
<div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>                                <button onclick="
                                members.splice(${i}, 1);
                                renderLeaderboard();
                                ">
                                DELETE
                                </button>
                            </div>
                        </div>
        `;
        todoListHTML += html;
    }
        document.querySelector('.js-div').innerHTML = todoListHTML;
        console.log(todoListHTML);
    }

    
function addMember() {
    let pointsInputElement = document.querySelector('.points-member-input');
    let numberOfPoints = pointsInputElement.value;
    let inputElement = document.querySelector('.member-input');
    let memberName = inputElement.value;
    members.push({
        name: memberName,
        points: numberOfPoints
    });

    inputElement.value = '';
    pointsInputElement.value = '';
    renderLeaderboard();

}

function addPoints(num) {
    points += num;
    renderLeaderboard();
}

function changeClass() {
    let element = document.querySelector("#plswork");
    if (element.classList.contains('nodropdown')) {
    element.classList.replace("nodropdown", "dropdown");
    } else {
        element.classList.replace("dropdown", "nodropdown");
    }
}
