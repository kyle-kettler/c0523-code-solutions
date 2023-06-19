const business = {
  opens: '9:00 AM',
  closes: '5:00 PM',
  totalEmployees: 4,
  daysOpen: ['M', 'TU', 'W', 'TH', 'F'],
  employees: {
    john: {
      position: 'clerk',
      daysOfWeekWorking: ['M', 'TU', 'W'],
    },
    paul: {
      position: 'janitor',
      daysOfWeekWorking: ['W', 'F'],
    },
    george: {
      position: 'reception',
      daysOfWeekWorking: ['TU', 'W', 'TH', 'F'],
    },
    ringo: {
      position: 'sales',
      daysOfWeekWorking: ['TU', 'TH'],
    },
  },
};

function addWeekends() {
  const employees = business.employees;
  const weekends = ['SA', 'SU'];

  for (let i = 0; i < weekends.length; i++) {
    business.daysOpen.push(weekends[i]);
  }

  for (const employee in employees) {
    for (let i = 0; i < weekends.length; i++) {
      employees[employee].daysOfWeekWorking.push(weekends[i]);
    }
  }
}

function addEmployees() {
  const titles = ['clerk', 'sales', 'janitor', 'reception', 'developer'];
  const firstNames = [];
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    const users = xhr.response;
    for (let i = 0; i < 4; i++) {
      firstNames.push(users[i].name.split(' ')[0].toLowerCase());
    }

    for (let i = 0; i < firstNames.length; i++) {
      const random = randomNumber();
      const randomDaysPlusWeekends = ['SA', 'SU'];
      for (let i = 0; i <= random; i++) {
        randomDaysPlusWeekends.push(business.daysOpen[i]);
      }

      business.employees[firstNames[i]] = {
        position: titles[random],
        daysOfWeekWorking: randomDaysPlusWeekends,
      };

      for (const employee in business.employees) {
        business.employees[employee].fullTime = checkIfFullTime(employee);
      }
    }
    business.totalEmployees = Object.keys(business.employees).length;
  });
  xhr.send();
}

function checkIfFullTime(employeeObj) {
  employeeObj = business.employees[employeeObj];
  let fullTimeCheck = false;
  if (employeeObj.daysOfWeekWorking.length >= 5) {
    fullTimeCheck = true;
  }
  return fullTimeCheck;
}

function deleteEmployee(employeeName) {
  delete business.employees[employeeName];
  business.totalEmployees = Object.keys(business.employees).length;
}

function randomNumber() {
  const number = Math.floor(Math.random() * 5);
  return number;
}

document.addEventListener('DOMContentLoaded', (event) => {
  addWeekends();

  for (const employee in business.employees) {
    business.employees[employee].fullTime = checkIfFullTime(employee);
  }

  addEmployees();

  deleteEmployee('john');
});
