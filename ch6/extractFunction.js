function printOwing(invoice) {
    printBanner()
    let outStanding = calculateOutStanding(invoice)
    recordDueDate(invoice)
    printDetails(invoice, outStanding)
}

function calculateOutStanding(invoice) {
    let outStanding = 0
    // calcutate the dept of customer
    for (const o of invoice.orders) {
        outStanding += o.amount
    }
    return outStanding
}

function recordDueDate(invoice) {
    const today = Clock.today // Date.now()
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)
}

function printDetails(invoice, outStanding) {
    console.log(`name ${invoice.customer}`)
    console.log(`amount of dept ${outStanding}`)
    console.log(`due date ${invoice.dueDate.toLocalDateString()}`)
}

function printBanner() {
    console.log('dept of customer')
}