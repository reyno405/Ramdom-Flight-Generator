const tableBody = document.getElementById('table-body')

let flights = [
    {
        time: "08:11",
        destination: "OMAN",
        flight: "OX 203",
        gate: "A 01",
        remarks: "ON TIME",
    },
    {
        time: "12:39",
        destination: "LONDON",
        flight: "CL 320",
        gate: "C 31",
        remarks: "CANCELLED",
    },
    {
        time: "08:11",
        destination: "OMAN",
        flight: "OX 203",
        gate: "A 01",
        remarks: "ON TIME",
    },
    {
        time: "13:21",
        destination: "DUBAI",
        flight: "JK 030",
        gate: "N 31",
        remarks: "CANCELLED",
    },
    {
        time: "15:22",
        destination: "TOKYO",
        flight: "TK 211",
        gate: "A 31",
        remarks: "DELAYED",
    }
]

const destinations = ["TOKYO", "FRANFURT", "DUBAI", "LONDON", "OMAN", "NEIRUT"]
const remarks = ["ON TIME", "DELAYED", "CANCELLED"]
let hour = 15

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr")

        for (const flightDetail in flight) {
            const tableCell = document.createElement("td")
            const word = Array.from(flight[flightDetail])
            for (const [index, letter] of word.entries()) {
                const letterElement = document.createElement("div")

                setTimeout(() => {
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.append(letterElement)
                }, 100 * index)
            }

            tableRow.append(tableCell)
        }

        tableBody.append(tableRow)
    }
}
populateTable()

function generatRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generatRandomNumber(maxNumber) {
    const numbers = "0123456789"
    if (maxNumber) {
        const newNumbers = numbers.slice(0, maxNumber)
        return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
    }

}

function generateTime() {
    let displayHour = hour

    if (hour < 24) {
        hour++
    }
    if (hour >= 24) {
        hour = 1
        displayHour = hour
    }
    if (hour < 10) {
        displayHour = "0" + hour
    }

        return displayHour + ":" + generatRandomNumber(5) + generatRandomNumber()
    
}

function shuffleUp() {
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generatRandomLetter() + generatRandomLetter() + " " + generatRandomNumber() + generatRandomNumber,
        gate: generatRandomLetter() + " " + generatRandomNumber() + generatRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })
    tableBody.textContent = ""
    populateTable()
    
}
setInterval(shuffleUp, 6000)