const submit = document.getElementById('formLogin')

// const createUser = async (newUser) =>{
//     try {
//         console.log(newUser)
//         const response = await fetch(`/user/register`, {
//             method: 'POST',
//             headers: {
//             'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(newUser)
//         });
//         if (response.ok) {
//             await response;
//         } else {
//             throw new Error('Error en la solicitud');
//         }
//     } catch (error) {
//         console.log(error)
//     };
// };

// submit.addEventListener('submit', (e)=>{
//     // e.preventDefault()
//     const firstName = document.getElementById('firstName').value
//     const lastName = document.getElementById('lastName').value
//     const email = document.getElementById('email').value
//     const age = document.getElementById('age').value
//     const password = document.getElementById('password').value
//     const newUser = {
//         firstName: firstName,
//         lastName: lastName,
//         email: email,
//         age: age,
//         password: password
//     }
//     createUser(newUser)
//     console.log(newUser)
// });