function printOwing(invoice) {
    let outStanding = 0

    printBanner()

    // calcutate the dept of customer
    for (const o of invoice.orders) {
        outStanding += o.amount
    }

    const today = Clock.today   // Date.now()
    invoice.dueDate =  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)

    console.log(`name ${invoice.customer}`)
    console.log(`amount of dept ${outStanding}`)
    console.log(`due date ${invoice.dueDate.toLocalDateString()}`)

    function printBanner() {
        console.log('dept of customer')
    }
}

