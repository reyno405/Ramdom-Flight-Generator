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

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr")

        for (const flightDetail in flight) {
            const tableCell = document.createElement("td")
            tableCell.innerText = flight[flightDetail]
            tableRow.append(tableCell)
        }

        tableBody.append(tableRow)
    }
}
populateTable() 