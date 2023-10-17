const members = [];

    let todoListHTML = ``;

function addMember() {
    let inputElement = document.querySelector('.member-input');
    let memberName = inputElement.value;
    let pointsInputElement = document.querySelector('.points-member-input');
    let numberOfPoints = pointsInputElement.value;
    for (let i = 0; i <= members.length; i++) {
        let membersIndex = members[i];
        let html = `
        <div class="lboard_mem">
                            <div class="name_bar">
                                <p><span>${i + 1}. </span>${memberName}</p>
                                <div class="bar_wrap">
                                    <div class="inner_bar" style="width: ${(numberOfPoints / max) * 100}%"></div>
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
    members.push(memberName);
}

function setMaxPoints() {
    let decidedMax = document.querySelector('.js-max-points');
    let max = decidedMax.value;
    let maxhtml = `<p>Max Points: ${max}</p>`;
    document.querySelector('.max-points-position').innerHTML = maxhtml;
}
