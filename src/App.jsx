import './App.css'

function App() {
  return (

    <div className='App'>
      <div className='main'>
        <div className='center'>
          <div className='menu'>
            <div className='logo'>
              <h3>Projeto React</h3>
            </div>
            <div className='item-menu'>
              <a href='#'>Login</a>
            </div>
          </div>
          <div className='form'>
            <h2>Entre em contato!</h2>
            <form>
              <div className='items-form'>
                <input placeholder='Nome' type='text' />
                <input placeholder='Sobrenome' type='text' />
                <input placeholder='Email' type='text' />
                <input placeholder='Telefone' type='text' />

                <input type='submit' />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='conteudo'>
        <div className='center'>
          <div className='conteudo-single'>
            <h3>Titulo da chamada</h3>
            <p>Página criada em reactJs para fins de prática e exercício.</p>
          </div>
          <div className='conteudo-single'>
            <h3>Titulo da chamada</h3>
            <p>Página criada em reactJs para fins de prática e exercício.</p>
          </div>
        </div>
      </div>

    </div>

  )
}

export default App;