let iterator = 4;
var addInterestClickCount = 0;
var createAddInterestField = `<div class='col-lg-6'><input type='text' name='interest' id='interest${iterator}' placeholder='Your interest' class='form-control m-1'></div>`;

var experienceIterator = 1;
var addExperienceClickCount = 0;
var createAddExperienceField = `<div class='col-lg-12'><input type='text' name='point' id='point${experienceIterator}' class='form-control m-1' placeholder='Add point ${experienceIterator}'></div>`;

$(document).ready(function (){
    //add interest points
    $("#addInterest").click(function (){
        addInterestClickCount++;
        if(addInterestClickCount < 7){
            iterator = iterator+1;
            $("#interestSection").append(createAddInterestField);
        } else {
            document.getElementById("addInterest").style.display = 'none';
        }
    });

    //add experience points
    $("#addExperiencePoint").click(function (){
        if(addExperienceClickCount < 3){
            experienceIterator++;
            $("#experienceSection").append(createAddExperienceField);
            addExperienceClickCount++;
        } else {
            document.getElementById("addExperiencePoint").style.display = 'none';
        }
    });

});