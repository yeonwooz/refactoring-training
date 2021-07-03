function printOwing(invoice) {
    printBanner()
    let outStanding = calculateOutstanding()

    console.log(`name is${invoice.customer}`)
    console.log(`dept is ${outStanding}`)
}

