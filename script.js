    let members = [{
        name: 'Chimka',
        points: '30'
    }, {
        name: 'Ryan',
        points: '18'
    }];

renderLeaderboard();

function setMaxPoints() {
    let decidedMax = document.querySelector('.js-max-points');
    let maximum = decidedMax.value; 
    let maxhtml = `<p>Max Points: ${maximum}</p>`;
    document.querySelector('.max-points-position').innerHTML = maxhtml;
    console.log(maximum);
}


function renderLeaderboard() {
    let todoListHTML = '';
    for (let i = 0; i <= members.length; i++) {
        let membersIndex = members[i];
        const { name, points } = membersIndex;
       // const points = membersIndex.points;
        
        let html = `
        <div class="lboard_mem">
                            <div class="name_bar">
                                <p><span>${i + 1}. </span>${name}</p>
                                <div class="bar_wrap">
                                    <div class="inner_bar" style="width: ${(points / 40) * 100}%"></div>
                                </div>
                            </div>
                            <div class="points">
                                ${points} points
                                <button onclick="
                                members.splice(${i}, 1);
                                addMember();
                                ">
                                DELETE
                                </button>
                            </div>
                        </div>
        `;
        todoListHTML += html
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
