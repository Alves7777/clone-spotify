
function home() {
    return `  
    ${navbar()}
    <section id="home" class="d-flex">
      <div class="container align-self-center">
        <div class="row">
          <div class="col-md-12 capa">
            <div id="carousel-spotify" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <h1>Música para todos</h1>
                  <a href="" class="btn btn-lg btn-custom btn-roxo">
                    Aproveite o Spotify Free
                  </a>
                  <a href="" class="btn btn-lg btn-custom btn-branco">
                    Obter Spotify Premium
                  </a>
                </div>
                <div class="carousel-item">
                  <h1>As Melhores rádios</h1>
                  <a href="" class="btn btn-lg btn-custom btn-branco">
                    <i class="fas fa-music pl-1"></i>Ouça Agora
                  </a>
                </div>
              </div>
              <a href="#carousel-spotify" class="carousel-control-prev" data-slide="prev">
                <i class="fas fa-angle-left fa-3x"></i>
              </a>
              <a href="#carousel-spotify" class="carousel-control-next" data-slide="next">
                <i class="fas fa-angle-right fa-3x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="servicos" class="caixa">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="row albuns">
              <div class="img1 col-md-6">
               
              </div>
              <div class="col-md-6">
                <img src="/imagens/img2.jpg" class="img-fluid d-none d-md-block" alt="img2">
              </div>
            </div>
            <div class="row albuns">
              <div class="col-md-6">
                <img src="/imagens/img3.jpg" class="img-fluid d-none d-md-block" alt="img3">
              </div>
              <div class="col-md-6">
                <img src="/imagens/img4.jpg" class="img-fluid d-none d-md-block" alt="img/4">
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h2>O que o Spotify tem?</h2>
            <h3>Músicas</h3>
            <p>
              O Spotify tem milhões de músicas. Escute seus sons favoritos, descubra novas
              músicas e reúna seus favoritos em um só lugar.
            </p>
            <h3>Playlists</h3>
            <p>
              No Spotify você encontra uma playlist para cada momento. Todas feitas por fanáticos e
              especialistas da música.
            </p>
            <h3>Novos lançamentos</h3>
            <p>
              Escute os novos lançamentos de singles e álbuns da semana e veja o que está bombando no Top 50.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="recursos" class="caixa">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h2>Fácil</h2>
              <h3>Buscar</h3>
                <p>
                  Já sabe o que quer escutar? É só procurar e apertar o play.
                </p>
              <h3>Navegar</h3>
                <p>
                  Veja os novos lançamentos, o que está bombando nas paradas e as
                  melhores playlists para o seu momento.
                </p>
            <h3>Descobrir</h3>
            <p>
              Curta músicas novas toda segunda-feira com uma playlist personalizada pra você.
              Ou relaxe e curta uma das rádios.
            </p>
          </div>
          <div class="col-md-8">
            <div class="row rotacionar">
              <div class="col-md-6">
                <img src="/imagens/iphone1.png" class="img-fluid d-none d-md-block" alt="iphone1">
              </div>
              <div class="col-md-6">
                <img src="/imagens/iphone2.png" class="img-fluid d-none d-md-block" alt="iphone2">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-2">
            <img src="/imagens/spotify.svg" width="142" alt="spotify">
          </div>
          <div class="col-md-2">
            <h4>Company</h4>
            <ul class="navbar-nav">
              <li><a href="">Sobre</a></li>
              <li><a href="">Empregos</a></li>
              <li><a href="">Impresa</a></li>
              <li><a href="">Novidades</a></li>
            </ul>
          </div>
          <div class="col-md-2">
            <h4>Comunidades</h4>
            <ul class="navbar-nav">
              <li><a href="">Artistas</a></li>
              <li><a href="">Desenvolvedores</a></li>
              <li><a href="">Marcas</a></li>
            </ul>
          </div>
          <div class="col-md-2">
            <h4>Links uteis</h4>
            <ul class="navbar-nav">
              <li><a href="">Ajuda</a></li>
              <li><a href="">Presentes</a></li>
              <li><a href="">Player da web</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <ul>
              <li>
                <a href=""><img src="/imagens/facebook.png" alt="facebook"></a>
              </li>
              <li>
                <a href=""><img src="/imagens/twitter.png" alt="twitter"></a>
              </li>
              <li>
                <a href=""><img src="/imagens/instagram.png" alt="instagram"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
`;
}