var _showIconMenu = true;

function openNav(){
    document.getElementById("sidenav-dev").classList.remove('active-sidenav');
    document.getElementById("sidenav-bg").classList.remove('active-sidenav-bg');
    
    if(_showIconMenu){
        document.getElementById("sidenav-dev").classList.add('active-sidenav');
        document.getElementById("sidenav-bg").classList.add('active-sidenav-bg');
    }
    _showIconMenu = !_showIconMenu;
}