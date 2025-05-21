//componentes da aplicação

//component de m menu
class Menu {
  // metodo statico
  static render() {
    
   return `
    <div class="bg-sky-700 shadown-lg">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <a href="/" class="text-white hover:text-sky-900">Estoque <span class="text-sky-900 hover:text-white">Pro</span></a>
                </div><!--/ Logo -->

                <div class="flex items-center space-x-4">
                    <a href="/" class="text-white hover:text-sky-900">Dashboard</a>
                    <a href="/produtos.html" class="text-white hover:text-sky-900">Produtos</a>
                    <a href="/movimentacoes.html" class="text-white hover:text-sky-900">Movimentações</a>
                    <a href="#" class="text-white hover:text-sky-900">Relatórios</a>
                </div>
            </div>
        </div>
    </div><!-- Menu -->
    `
  }
}
//Funçao para inicializar componenetes
function initcomponents() {
  // substitui o meunu em todas as paginas 
  const menuContainer=document.querySelector('nav');
  if(menuContainer) {
    menuContainer.outerHTML=Menu.render();
  }
}
//inicializa os componenetes quando a pagina e carregada 
document.addEventListener('DOMContentLoaded', initcomponents);