//OUTPUT: Move the referees and reporters back and forth.
function animateBystanders() {
    $("#refereeID").animate({ left: "200px" },
                            { duration: 3000 });

    $("#refereeID").animate({ left: "0px" },
                            { duration: 3000 });
    
    $("#reporterID").animate({ left: "400px" }, 
                             { duration: 10000 });

    $("#reporterID").animate({ left: "0px" }, 
                             { duration: 10000 });
}