document.addEventListener("DOMContentLoaded"), function()
{
    const printButton= document.createElement('button');
    printButton.textContent='Imprimer le CV';
    
    document.body.insertBefore(printButton,document.body.firstChild);

    printButton.addEventListener('click', function() { window.print();

    });
}