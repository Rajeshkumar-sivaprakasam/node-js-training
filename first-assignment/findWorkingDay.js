var workingDays = ['Sunday', 'Monday', 'Tuesday', 'Saturday', 'Saturday']

const count = workingDays.filter(e => !(e === 'Sunday' || e === 'Saturday')  )
const result = count.length
