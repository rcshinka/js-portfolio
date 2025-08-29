async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/rcshinka/js-portfolio/refs/heads/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}

// raw da DIO https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/profile.json 
// https://raw.githubusercontent.com/rcshinka/js-portfolio/refs/heads/main/data/profile.json?token=GHSAT0AAAAAADIZY62POLM7YK6EXQH2RNVA2FMXADA