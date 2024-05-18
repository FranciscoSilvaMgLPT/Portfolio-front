
document.getElementById('userForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    try {
        await axios({
            method: 'post',
            url: 'http://localhost:8080/user',
            data: {
                name: formData.get('name'),
                email : formData.get('email'),
                password : formData.get('password')
            }
        });
        console.log('Usuário criado com sucesso!');
    } catch (error) {
        alert('Erro ao criar usuário:', error);
        console.error('Erro ao criar usuário:', error);
    }
});

document.getElementById('usersBtn').addEventListener('click', function() {
    axios.get('http://localhost:8080/user')
      .then(function (response) {
        document.getElementById('userList').innerHTML = '';

        response.data.forEach(function (user) {
          const userItem = document.createElement('li');
          userItem.textContent = `ID: ${user.id}, name: ${user.name}, Email: ${user.email}`;
          document.getElementById('userList').appendChild(userItem);
        });
      })
      .catch(function (error) {
        alert('Erro ao recuperar usuários:', error)
        console.error('Erro ao recuperar usuários:', error);
      });
  });