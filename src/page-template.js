module.exports = readMeData => {
    console.log(readMeData);
    const { fileName,
        description,
        install,
        license,
        useage,
        contribution,
        testing,
        github,
        email } = readMeData
    return `
    #${fileName}

    ##Description
    ${description}
    
     #Tabel of contents
    1.[Description](#description)
    2.[Installation](#installation)
    3.[License](#ulicense)
    4.[Intended Useage](#useage)
    5.[Contributing](#contributing)
    6.[Test Instructions](#testing)
    7.[Questions](#questions)
    

    ##installation
    ${install}
    
    ##License
    
    ${license}
    
    ##Intended Use
    ${useage}
    
    ##Contributing
    ${contribution}
    
    ##Testing
    ${testing}
    
    ##Questions
    Any questions can be sent to ${email} or contact me on Github ${github},
    messages sent via carrier pigion have highest priority`
        ;
}