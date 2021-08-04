var workingDays = ['Sunday', 'Monday', 'Tuesday', 'Saturday']

const result = workingDays.map(e=> e === 'Sunday' || e === 'Saturday'? e='Holiday': e)

result