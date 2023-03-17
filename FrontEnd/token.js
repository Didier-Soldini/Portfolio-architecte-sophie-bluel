

async function connect(username, password) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
   
    const options = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        username,
        password
      }),
      headers
    };
   
        
    const response = await fetch('http://localhost:5678/api/users/login', options);
    return response.json();
  }

  
  /* Le nom d'utilisateur et le mot de passe doivent être récupérés depuis un formulaire par exemple */
  const tokens = await connect(username, password);
   
  /* Le localStorage ne stocke que des chaines de caractères nous devons donc faire appel à la méthode "JSON.stringify" */
  localStorage.setItem('token', JSON.stringify(tokens));