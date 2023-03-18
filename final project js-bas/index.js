const createTeamBtn = document.querySelector(".create-btn");
const showTeamBtn = document.querySelector(".show-btn");
const team = {
  team: [],
  showTeam() {
    const showTeam = document.querySelector(".show-team");
    showTeam.innerHTML = ''
    this.team.forEach((employ) => {
      const div = document.createElement("div");
      div.innerHTML = employ.tellAboutYourSelf();
      showTeam.append(div);
    });
  },
};
var positionEmpl = [
  "Junior developer",
  "Middle developer",
  "Senior developer",
  "Junior QA",
  "Middle QA",
  "Senior QA",
  "Project manager",
];
createInputElement = (title) => {
  const label = document.createElement("label");
  label.className = "form-label";
  const input = document.createElement("input");
  input.className = "form-input";
  input.setAttribute("type", "text");
  input.setAttribute("name", `${title}`);
  label.append(`${title}:`);
  label.append(input);
  return label;
};
renderForm = () => {
  const teamForm = document.querySelector(".team-form");
  positionEmpl.forEach((jobTitle) => {
    teamForm.append(createInputElement(jobTitle));
  });
};
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getSalary(value) {
  const loverValue = value.toUpperCase();
  console.log(loverValue.indexOf("JUNIOR"));
  switch (true) {
    case 0 <= loverValue.indexOf("JUNIOR"):
      return getRandom(500, 1000);
    case 0 <= loverValue.indexOf("MIDDLE"):
      return getRandom(1500, 2000);
    case 0 <= loverValue.indexOf("SENIOR"):
      return getRandom(2500, 3000);
    default:
      return getRandom(4000, 4500);
  }
}
createTeam = () => {
  const teamForm = document.querySelector(".team-form");
  team.team = []
  teamForm.querySelectorAll("input").forEach((userItem) => {
    if (!userItem.value) {
      return;
    }
    const newEmployee = {
      name: userItem.value,
      position: userItem.name,
      salary: getSalary(userItem.name),
      tellAboutYourSelf() {
        return `Меня зовут ${this.name} и я - ${this.position}. Я зарабатываю ${this.salary}$.`;
      },
    };
    team.team.push(newEmployee);
    console.log(team);
  });
};

renderForm();
createTeamBtn.addEventListener("click", createTeam);
showTeamBtn.addEventListener("click", () => {
  team.showTeam();
});
