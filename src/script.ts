import axios from 'axios'
import { IAstroResponse } from './IAstroResponse'
import { padRight } from './padRight'
import orderBy from 'lodash/orderBy'

axios
  .get<IAstroResponse>('http://api.open-notify.org/astros.json')
  .then(({ data }) => {
    
    // sort collection
    data.people = orderBy(data.people, 'craft')
    
    // get max length for each column
    let nameMaxLength = 0
    let craftMaxLength = 0
    data.people.forEach((x) => {
      if (x.name.length > nameMaxLength) {
        nameMaxLength = x.name.length
      }
      if (x.craft.length > craftMaxLength) {
        craftMaxLength = x.craft.length
      }
    })

    // print header
    console.log(`There are ${data.people.length} people in space right now:\n`)
    
    // print table header
    console.log(`${padRight('Name', nameMaxLength, ' ')} | ${'Craft'}`)

    // print table divider
    console.log(`${padRight('', nameMaxLength, '-')} | ${padRight('', craftMaxLength, '-')}`)

    // print table rows (if craft matches previous row, print empty line)
    let lastCraft
    for (const { craft, name } of data.people) {
      let craftDisplay = ''
      if (lastCraft !== craft) {
        craftDisplay = craft
        lastCraft = craft
      }

      console.log(`${padRight(name, nameMaxLength, ' ')} | ${craftDisplay}`)
    }
  })
  .catch((err: Error) => console.log(err))
