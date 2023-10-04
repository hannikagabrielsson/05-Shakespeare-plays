function sideBySide() {
    document.body.id = "runko";

    document.getElementsByTagName("ul")[0].className = "listat";
    
    // document.getElementsByTagName("ul")[0].className = "listat";
}

function evenGray() {
    const section2 = document.getElementById("sectionToka");
    section2.getElementsByTagName("table")[0].className = "jokaToinenRiviEven";
}

function oddGray() {
    const section3 = document.getElementById("sectionKolmas");
    section3.getElementsByTagName("table")[0].className = "jokaToinenRiviOdd";
}


function linkStyle() {
    var links = document.links;
    console.log(links);
    console.log(links.length);

    for (let i = 0; i < links.length; i++) {
        document.getElementsByTagName("a")[i].className = "dotted";
      }
    
    }

    function pdfIcon() {

        var links = document.links;
        var pdfImage = new Image(15, 15);
        //kuvan lähde
        pdfImage.src = "./images/file-pdf-solid.svg";

        for (let i = 0; i < links.length; i++){
    
            if (document.links[i].href.slice(-3) == "pdf")
            {
                links[i].appendChild(pdfImage);
            }
        }
        pdfImage.setAttribute("id", "pdfKuva");
        document.getElementById("pdfKuva").style.paddingLeft = "0.5rem";
    
    }
    function mailIcon() {

        var links = document.links;
        var mailImage = new Image(15, 15);
        //kuvan lähde
        mailImage.src = "./images/envelope-solid.svg";

        for (let i = 0; i < links.length; i++){
    
            if (document.links[i].href.includes("@"))
            {
                links[i].appendChild(mailImage);
            }
        }
        mailImage.setAttribute("id", "mailKuva");
        document.getElementById("mailKuva").style.paddingLeft = "0.5rem";
    }

    function arrowIcon() {

        var links = document.links;
        // var arrowImage = new Image(15, 15);
        // //kuvan lähde
        // arrowImage.src = "./images/arrow-up-right-from-square-solid.svg";

        for (let i = 0; i < links.length; i++){

            console.log(links[i]);
    
            if (link_is_external(links[i]))
            {
                let arrowImage = new Image(15, 15);
                //kuvan lähde
                arrowImage.src = "./images/arrow-up-right-from-square-solid.svg";

                links[i].appendChild(arrowImage);
            }

            else if (document.links[i].href.includes("@"))
            {
                let arrowImage = new Image(15, 15);
                //kuvan lähde
                arrowImage.src = "./images/arrow-up-right-from-square-solid.svg";

                links[i].appendChild(arrowImage);

                console.log("Linkki oli external");
            }
            
            
        }
        arrowImage.setAttribute("id", "arrowKuva");
        document.getElementById("arrowKuva").style.paddingLeft = "0.5rem";
    
        console.log("Ikoni lisätty e-mail-linkkiin");
    }

    function link_is_external(links) {
        // console.log(links);
        return (links.host !== window.location.host);
    }


function executeFunctions() {
    console.log("scriptin kutsu toimii");
    sideBySide();
    evenGray();
    oddGray();
    linkStyle();
    pdfIcon();
    mailIcon();
    arrowIcon();
}

window.onload = executeFunctions;


