const generatepage = (projectName,projectDescription, projectGoal, credits, license) =>{
    return `
    #${projectName}
    ##Description
    
    ${projectDescription}

    ##Usage
    ${projectGoal}
    
    ##Credits
    
    ${credits}
    
    ##License
    
    ${License}`
}

module.exports = generatepage;