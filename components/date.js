export function getAge(birthday) {
    const today = new Date();
    const formated = birthday.replace(/-/g,'/');
    const birthdayDate = new Date(formated);

    const milliseconds = today - birthdayDate;
    const years = parseInt(milliseconds/(1000*60*60*24*365));
    const months = parseInt(milliseconds/(1000*60*60*24*30.4166))-(years*12);
    const days = Math.ceil((milliseconds/(1000*60*60*24))-(years*365)-(months*30.4166));
    return `${years} Years - ${months} Months - ${days} Days`;
};