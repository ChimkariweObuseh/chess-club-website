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
    const name = membersIndex.name;
        console.log(name);
    const points = membersIndex.points;
        
        let html = `
        <div class="lboard_mem">
                            <div class="name_bar">
                                <p><span>${i + 1}. </span>${name}</p>
                                <div class="bar_wrap">
                                    <div class="inner_bar" style="width: ${(points / 56) * 100}%"></div>
                                </div>
                            </div>
                            <div class="points">
                                56 points
                                <button onclick="
                                members.splice(${i}, 1);
                                addMember();
                                ">
                                DELETE
                                </button>
                            </div>
                        </div>
        `;
        todoListHTML += html;
    }
        document.querySelector('.js-div').innerHTML = todoListHTML;
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
