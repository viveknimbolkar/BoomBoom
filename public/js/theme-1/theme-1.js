var iterator               = 4;
var addInterestClickCount  = 0;
var createAddInterestField = `<div class='col-lg-6'><input type='text' name='interest' id='interest${iterator}' placeholder='Your interest' class='form-control m-1'></div>`;

var experienceIterator       = 1;
var addExperienceClickCount  = 0;

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
        if (addExperienceClickCount < 3) {
            experienceArray[addExperienceClickCount+1].style.display = 'block';
            resumeExperienceArray[addExperienceClickCount+1].style.display = 'block';
            addExperienceClickCount++;
        } else {
            document.getElementById("addExperiencePoint").style.display = 'none';
        }
    });

});

// Get vales from user and assign it to the template
// Personal details
var personalDetailSection = document.getElementById("personalDetailSection");
var username = document.getElementById("username");
var role = document.getElementById("role");
var email = document.getElementById("email");
var website   = document.getElementById("website");
var gitrepo   = document.getElementById("gitrepo");
var phoneno   = document.getElementById("phonenumber");
var address   = document.getElementById("address");
var personalDetailArray = [username,role, email, website,gitrepo, phoneno, address];

// Experience
var experienceSection = document.getElementById("experienceSection");
var position = document.getElementById("position");
var company = document.getElementById("company");
var fromdate = document.getElementById("fromdate");
var todate = document.getElementById("todate");
var point1 = document.getElementById("point1");
var point2 = document.getElementById("point2");
var point3 = document.getElementById("point3");
var point4 = document.getElementById("point4");
var experienceArray = [point1,point2, point3, point4];

// Education
var educationSection = document.getElementById("educationSection");
var collegeName  = document.getElementById("clgname");
var degree       = document.getElementById("degree");
var eduFromDate  = document.getElementById("edufromdate");
var eduToDate    = document.getElementById("edutodate");
var collegeName1 = document.getElementById("clgname1");
var degree1      = document.getElementById("degree1");
var eduFromDate1 = document.getElementById("edufromdate1");
var eduToDate1   = document.getElementById("edutodate1");

// Skills
var skill1       = document.getElementById("skill1");
var skill1rating = document.getElementById("skill1rating");
var skill2       = document.getElementById("skill2");
var skill2rating = document.getElementById("skill2rating");
var skill3       = document.getElementById("skill3");
var skill3rating = document.getElementById("skill3rating");
var skill4       = document.getElementById("skill4");
var skill4rating = document.getElementById("skill4rating");
var skill5       = document.getElementById("skill5");
var skill5rating = document.getElementById("skill5rating");
var skill6       = document.getElementById("skill6");
var skill6rating = document.getElementById("skill6rating");
var skillArray = [skill1, skill1rating, skill2, skill2rating, skill3, skill3rating, skill4, skill4rating, skill5, skill5rating, skill6, skill6rating];

// Interest
var interest1  = document.getElementById("interest1");
var interest2  = document.getElementById("interest2");
var interest3  = document.getElementById("interest3");
var interest4  = document.getElementById("interest4");
var interest5  = document.getElementById("interest5");
var interest6  = document.getElementById("interest6");
var interest7  = document.getElementById("interest7");
var interest8  = document.getElementById("interest8");
var interest9  = document.getElementById("interest9");
var interest10 = document.getElementById("interest10");
var interestArray = [interest1, interest2, interest3, interest4, interest5, interest6, interest7, interest8, interest9, interest10];

//==============================================
// Resume Section
var editor = document.getElementById("editor");
//personal info
var resumeUsername = document.getElementById("resumeusername");
var resumeRole = document.getElementById("resumerole");
var resumeEmail = document.getElementById("resumeemail");
var resumeLink = document.getElementById("resumelink");
var resumeGitRepo = document.getElementById("resumegitrepo")
var resumePhone = document.getElementById("resumephone");
var resumeAddress = document.getElementById("resumeaddress");
var resumePersonalDetailArray = [resumeUsername, resumeRole, resumeEmail, resumeLink,resumeGitRepo, resumePhone, resumeAddress];

//experience
var resumeExperienceRole = document.getElementById("resumeExperienceRole");
var resumeCompany = document.getElementById("resumeCompany");
var resumeExperienceFromDuration = document.getElementById("resumeExperienceFromDuration");
var resumeExperienceToDuration = document.getElementById("resumeExperienceToDuration");
var resumeExperiencePoint1 = document.getElementById("resumeExperiencePoint1");
var resumeExperiencePoint2 = document.getElementById("resumeExperiencePoint2");
var resumeExperiencePoint3 = document.getElementById("resumeExperiencePoint3");
var resumeExperiencePoint4 = document.getElementById("resumeExperiencePoint4");
var resumeExperienceArray = [resumeExperiencePoint1,resumeExperiencePoint2, resumeExperiencePoint3, resumeExperiencePoint4];

//education
var resumeStudy = document.getElementById("resumeStudy");
var resumeUniversity = document.getElementById("resumeUniversity");
var resumeEducationFromDuration = document.getElementById("resumeEducationFromDuration");
var resumeEducationToDuration = document.getElementById("resumeEducationToDuration");
var resumeStudy1 = document.getElementById("resumeStudy1");
var resumeUniversity1 = document.getElementById("resumeUniversity1");
var resumeEducationFromDuration1 = document.getElementById("resumeEducationFromDuration1");
var resumeEducationToDuration1 = document.getElementById("resumeEducationToDuration1");

//skills
var resumeSkill1 = document.getElementById("resumeSkill1");
var resumeSkill2 = document.getElementById("resumeSkill2");
var resumeSkill3 = document.getElementById("resumeSkill3");
var resumeSkill4= document.getElementById("resumeSkill4");
var resumeSkill5 = document.getElementById("resumeSkill5");
var resumeSkill6 = document.getElementById("resumeSkill6");
var resumeInterest = document.getElementById("resumeInterest");
var resumeSkillArray = [resumeSkill1, resumeSkill2, resumeSkill3, resumeSkill4, resumeSkill5, resumeSkill6];

//footer
var resumeDOB = document.getElementById("resumeDOB");
var resumeTodaysDate = document.getElementById("resumeTodaysDate");
var resumePlace = document.getElementById("resumePlace");

personalDetailSection.addEventListener('keyup', function (event) {
    resumeUsername.innerHTML = username.value;
    resumeRole.innerHTML = role.value;
    resumeEmail.innerHTML = email.value;
    resumeLink.innerHTML = website.value;
    resumeGitRepo.innerHTML = gitrepo.value;
    resumeAddress.innerHTML = address.value;
    resumePhone.innerHTML = phoneno.value;
});

experienceSection.addEventListener('keyup', function (event) {
    resumeExperienceRole.innerHTML = position.value;
    resumeCompany.innerHTML = company.value;
    for (let i = 0; i < resumeExperienceArray.length; i++) {
        resumeExperienceArray[i].innerHTML = " &loz; "+experienceArray[i].value;
    }
});

educationSection.addEventListener('keyup', function (event) {
    resumeUniversity.innerHTML = collegeName.value;
    resumeStudy.innerHTML = degree.value;
    resumeUniversity1.innerHTML = collegeName1.value;
    resumeStudy1.innerHTML = degree1.value;
});

function getFromDate() {
    resumeExperienceFromDuration.innerHTML = fromdate.value;
}
function getToDate() {
    resumeExperienceToDuration.innerHTML = todate.value;
}
function getEduFromDate() {
    resumeEducationFromDuration.innerHTML = eduFromDate.value;
}
function getEduToDate() {
    resumeEducationToDuration.innerHTML = eduToDate.value;
}
function getEduFromDate1() {
    resumeEducationFromDuration1.innerHTML = eduFromDate1.value;
}
function getEduToDate1() {
    resumeEducationToDuration1.innerHTML = eduToDate1.value;
}