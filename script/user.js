
const API = 'https://api.github.com/users/'

const form = document.querySelector('form')
const output = document.querySelector('#output')
const inp = document.querySelector('#inp')

const searchUser = async () => {
    let url = API + inp.value
    const req = await fetch(url)
    const res = await req.json()
    renderUsers(res);
    console.log(res);

    console.log(res.login);
    inp.value = ''
}




const renderUsers = (data) => {
    output.innerHTML = ''
    const avatar = document.createElement('img')
    avatar.src = data.avatar_url
    avatar.classList.add('avatar')
    const title = document.createElement('a')
    title.textContent = data.login
    title.href = data.html_url
    const title0 = document.createElement('h3')
    title0.textContent = `ID: ${data.id}`
    const title1 = document.createElement('p')
    title1.textContent = data.name ? `Name : ${data.name}` : textContent = `Name: Ничего не введено`
    const title2 = document.createElement('h3')
    title2.textContent = data.public_repos ? data.public_repos : textContent = 'Проекты: Ещё не Гитхабился'
    const title3 = document.createElement('h3')
    title3.textContent = data.location ? data.location : textContent = 'Location: Не указано'
    const title4 = document.createElement('a')
    title4.textContent = data.url
    title4.href = data.url
    const title5 = document.createElement('h3')
    title5.textContent = 'Обнавлено:' + data.updated_at









    output.append(avatar, title, title0, title1, title2, title3, title4, title5)

}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    searchUser()
})