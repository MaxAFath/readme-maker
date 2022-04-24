const generatepage = (projectName,projectDescription, technology, credits, license) =>{
    return `
    #${projectName}

    ##Description
    ${projectDescription}
    
     #Tabel of contents
    1.[Description](#description)
    2.[Installation](#installation)
    3.[Usage](#usage)
    4.[Licsense](#license)
    5.[Contributing](#contributing)
    6.[Test Instructions](#testing)
    7.[Questions](#questions)

    ##Technology
    ${technology}
    
    ##Credits
    
    ${credits}
    
    ##License
    
    ${License}`
}

module.exports = generatepage;