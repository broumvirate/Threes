function validateThreePagesCount(pages)
{
    const MAX_PAGES = 24;
    const result = {isValid: false, value: 3};
    if(!isNaN(parseInt(pages)))
    {
        const value = parseInt(pages);
        if(value > 1)
        {
            if(value > MAX_PAGES) result.value = MAX_PAGES;
            else return {isValid: true, value: value};
        }
    }
    return result;
}

export {validateThreePagesCount};