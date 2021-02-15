
function navbar() {
    return `
      <nav class="navbar navbar-expand-md navbar-light fixed-top navbar-transparente ">
        <div class="container">
          <a href="">
            <img src="" class="spotify navbar-brand" alt="spotify">
          </a>
          <button class="navbar-toggler"  data-toggle="collapse" data-target="#nav-principal">
            <i class="fas fa-bars text-white"></i>
          </button>
          <div class="collapse navbar-collapse" id="nav-principal">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a href="" class="nav-link">Premium</a>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link">Ajuda</a>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link">Baixar</a>
              </li>
              <li class="nav-item divisor"></li>
              <li class="nav-item">
                <a href="" class="nav-link">Inscrever-se</a>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link">Entrar</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    `;
}