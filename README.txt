=========== Structura proiectului si intro in lumea web development ===========

Un browser lucreaza cu 3 tipuri de fisiere de baza pentru a afisa continut:
    * .html => HTML = HyperText Markup Language
        - esential pentru a defini structura website-ului pe care il 
          construiesti
        - browser-ul vede structura unui website ca pe un arbore numit DOM
          (care ca orice arbore, are radacina, frunze, parinti, copii)
    * .css => CSS = Cascade Stylesheet
        - esential pentru a stiliza elementele definite in html
    * .js => JavaScript
        - limbaj creat special pentru a fi inteles de catre browsere
        - permite adaugarea functionalitatii prin evenimente 
          (ex: click, hover, scroll)
        - poate face ce fac si html si css, dar este indicat sa separam 
          codul in functie de rol pentru a fi mai usor de inteles
    
Proiectul nostru va fi format din 3 fisiere:
    * index.html
    * style.css
    * app.js

===============================================================================
Pentru a vizualiza produsul muncii noastre crunte, tot ce trebuie sa facem e sa
deschidem fisierul index.html intr-un browser.
De unde stie browser-ul sa ia celelalte 2 fisiere? Le vom include in fisierul 
index.html prin nume.

In web development exista 2 mari arii: 
    * frontend development -> se ocupa de ce vede un utilizator pe ecran, de 
                              randarea continua a paginii si de interactiunea
                              cu utilizatorul
    * backend development -> se ocupa de ce se intampla behind the scenes, de
                             procesarea si stocarea informatiilor primite de
                             la frontend
                
===============================================================================
Pentru acest proiect, voi veti juca rolul de frontend developers

Pentru a nu va coplesi cu prea multa informatie, voi nu va trebui sa scrieti
cod de la 0, ci va trebui sa completati in codul deja scris de mine 
locurile marcate cu TODO

Atentie: in cod exista posibilitatea de a lasa comentarii, ele neafectand codul
Acestea se marcheaza diferit in functie de limbaj, dar pentru a va asigura ca
ati scris corect, puteti folosi combinatia de taste Ctrl + / pe linia pe care
vreti sa o comentati.

Ca aplicatii, va trebui sa descarcati Visual Studio Code si sa instalati 
extensia Live Server pentru a vizualiza modificarile din cod in timp real
in browser.

===============================================================================
Va voi lasa aici cateva detalii despre task-uri pe care voi va trebui sa le 
cautati in cod si sa le rezolvati.
Toate task-urile se vor rezolva in fisierul app.js, totusi va rog sa incercati
sa dati valori si sa va jucati cu codul din celelalte 2 fisiere pentru a va fi 
mai clar cum functioneaza. In final reveniti va rog la valorile initiale.

* trebuie sa extrageti toate elementele cu clase si id-uri din index.html si
sa le stocati in variabile
* trebuie sa completati functiile collisionBirdPipe si collisionBirdWindow
 (aceste functii returneaza valori boolean, adica ori true ori false;
  aceste valori pot fi obtinute in cazul vostru in urma operatiilor 
  && = si, || = sau)
* creati elemente, care se mai numesc si noduri si sa le adaugati in DOM
* veti verifica de coliziuni cu ajutorul functiei getBoundingClientRect,
va sugerez sa o cautati pe net sa vedeti cum se foloseste


Marcajele sunt astfel:
// TODO portocaliu = task-ul in sine
// verde = hint-uri pt ca sunt o draguta
//? albastru = numele exacte ale variabilelor pe care vreau sa le definiti
//! explicatii -> nu modificati valori sau nume
