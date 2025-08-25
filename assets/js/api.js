async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/rcshinka/js-portfolio/refs/heads/main/data/profile.json?token=GHSAT0AAAAAADIZY62POLM7YK6EXQH2RNVA2FMXADA';
    const fetching = await fetch(url)
    return await fetching.json()
}