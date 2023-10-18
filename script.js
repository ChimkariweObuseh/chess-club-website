

function addMember() {
    const members = [];
    let todoListHTML = `
    <div class="lboard_mem">
                            <div class="name_bar">
                                <p><span>1. </span>Chimkariwe Obuseh</p>
                                <div class="bar_wrap">
                                    <div class="inner_bar" style="width: ${(numberOfPoints / max) * 100}%"></div>
                                </div>
                            </div>
                            <div class="points">
                                ${numberOfPoints} points
                            </div>
                        </div>`;
    let inputElement = document.querySelector('.member-input');
    let memberName = inputElement.value;
        members.push(memberName);
    let pointsInputElement = document.querySelector('.points-member-input');
    let numberOfPoints = pointsInputElement.value;
    for (let i = 0; i <= members.length; i++) {
        let membersIndex = members[i];
        let html = `
        <div class="lboard_mem">
                            <div class="name_bar">
                                <p><span>${i + 1}. </span>${memberName}</p>
                                <div class="bar_wrap">
                                    <div class="inner_bar" style="width: ${(numberOfPoints / maximum) * 100}%"></div>
                                </div>
                            </div>
                            <div class="points">
                                ${numberOfPoints} points
                            </div>
                        </div>
        `;
        todoListHTML += html
        document.querySelector('.js-div').innerHTML = todoListHTML;
    }
}


function setMaxPoints() {
    let decidedMax = document.querySelector('.js-max-points');
    let maximum = decidedMax.value;
    let maxhtml = `<p>Max Points: ${maximum}</p>`;
    document.querySelector('.max-points-position').innerHTML = maxhtml;
}
