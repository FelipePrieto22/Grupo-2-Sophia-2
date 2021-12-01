import React, { useState } from "react"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


function From () {
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <div className='filtro'>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat='dd/MM/yyyy'
                filterDate={date =>date.getDay() != 6 && date.getDay() != 0}
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown
            />
        </div>
    )
}
export default From