var date = new Date();
document.getElementById("resumeTodaysDate").innerHTML = `Date: ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
var iterator = 4;
var addInterestClickCount = 0;
var createAddInterestField = `<div class='col-lg-6'><input type='text' name='interest' id='interest${iterator}' placeholder='Your interest' class='form-control m-1'></div>`;

var experienceIterator = 1;
var addExperienceClickCount = 0;

$(document).ready(function () {
    //add interest points
    $("#addInterest").click(function () {
        addInterestClickCount++;
        if (addInterestClickCount < 7) {
            iterator = iterator + 1;
            $("#interestSection").append(createAddInterestField);
        } else {
            document.getElementById("addInterest").style.display = 'none';
        }
    });

    //add experience points
    $("#addExperiencePoint").click(function () {
        if (addExperienceClickCount < 3) {
            experienceArray[addExperienceClickCount + 1].style.display = 'block';
            resumeExperienceArray[addExperienceClickCount + 1].style.display = 'block';
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
var website = document.getElementById("website");
var gitrepo = document.getElementById("gitrepo");
var phoneno = document.getElementById("phonenumber");
var address = document.getElementById("address");

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
var experienceArray = [point1, point2, point3, point4];

// Education
var educationSection = document.getElementById("educationSection");
var collegeName = document.getElementById("clgname");
var degree = document.getElementById("degree");
var eduFromDate = document.getElementById("edufromdate");
var eduToDate = document.getElementById("edutodate");
var collegeName1 = document.getElementById("clgname1");
var degree1 = document.getElementById("degree1");
var eduFromDate1 = document.getElementById("edufromdate1");
var eduToDate1 = document.getElementById("edutodate1");

// Skills
var skillSection = document.getElementById("skillSection");
var skill1 = document.getElementById("skill1");
var skill1rating = document.getElementById("skill1rating");
var skill2 = document.getElementById("skill2");
var skill2rating = document.getElementById("skill2rating");
var skill3 = document.getElementById("skill3");
var skill3rating = document.getElementById("skill3rating");
var skill4 = document.getElementById("skill4");
var skill4rating = document.getElementById("skill4rating");
var skill5 = document.getElementById("skill5");
var skill5rating = document.getElementById("skill5rating");
var skill6 = document.getElementById("skill6");
var skill6rating = document.getElementById("skill6rating");
var skillArray = [skill1, skill1rating, skill2, skill2rating, skill3, skill3rating, skill4, skill4rating, skill5, skill5rating, skill6, skill6rating];

// Interest
var interest = document.getElementById("interest");

//footer
var dob = document.getElementById("dob");
var place = document.getElementById("place");

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

//experience
var resumeExperienceRole = document.getElementById("resumeExperienceRole");
var resumeCompany = document.getElementById("resumeCompany");
var resumeExperienceFromDuration = document.getElementById("resumeExperienceFromDuration");
var resumeExperienceToDuration = document.getElementById("resumeExperienceToDuration");
var resumeExperiencePoint1 = document.getElementById("resumeExperiencePoint1");
var resumeExperiencePoint2 = document.getElementById("resumeExperiencePoint2");
var resumeExperiencePoint3 = document.getElementById("resumeExperiencePoint3");
var resumeExperiencePoint4 = document.getElementById("resumeExperiencePoint4");
var resumeExperienceArray = [resumeExperiencePoint1, resumeExperiencePoint2, resumeExperiencePoint3, resumeExperiencePoint4];

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
var resumeSkillRating1 = document.getElementById("resumeSkillRating1");
var resumeSkill2 = document.getElementById("resumeSkill2");
var resumeSkillRating2 = document.getElementById("resumeSkillRating2");
var resumeSkill3 = document.getElementById("resumeSkill3");
var resumeSkillRating3 = document.getElementById("resumeSkillRating3");
var resumeSkill4 = document.getElementById("resumeSkill4");
var resumeSkillRating4 = document.getElementById("resumeSkillRating4");
var resumeSkill5 = document.getElementById("resumeSkill5");
var resumeSkillRating5 = document.getElementById("resumeSkillRating5");
var resumeSkill6 = document.getElementById("resumeSkill6");
var resumeSkillRating6 = document.getElementById("resumeSkillRating6");
var resumeInterest = document.getElementById("resumeInterest");

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
        resumeExperienceArray[i].innerHTML = " &loz; " + experienceArray[i].value;
    }
});

educationSection.addEventListener('keyup', function (event) {
    resumeUniversity.innerHTML = collegeName.value;
    resumeStudy.innerHTML = degree.value;
    resumeUniversity1.innerHTML = collegeName1.value;
    resumeStudy1.innerHTML = degree1.value;
});

//getter and setter for dates
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

skillSection.addEventListener('keyup', function (event) {
    resumeSkill1.innerHTML = skill1.value;
    resumeSkill2.innerHTML = skill2.value;
    resumeSkill3.innerHTML = skill3.value;
    resumeSkill4.innerHTML = skill4.value;
    resumeSkill5.innerHTML = skill5.value;
    resumeSkill6.innerHTML = skill6.value;

});


$(skill1rating).change(function () {
    console.log(skill1rating.value);
    if (skill1rating.value < 10) {
        $(resumeSkillRating1).attr('class', 'progress-bar bg-purple-400 w-0');
    } else if (skill1rating.value > 10 && skill1rating.value < 30) {
        $(resumeSkillRating1).attr('class', 'progress-bar bg-purple-400 w-25');
    } else if (skill1rating.value > 40 && skill1rating.value < 60) {
        $(resumeSkillRating1).attr('class', 'progress-bar bg-purple-400 w-50');
    } else if (skill1rating.value > 61 && skill1rating.value < 80) {
        $(resumeSkillRating1).attr('class', 'progress-bar bg-purple-400 w-75');
    } else if (skill1rating.value > 81) {
        $(resumeSkillRating1).attr('class', 'progress-bar bg-purple-400 w-100');
    }
});

$(skill2rating).change(function () {
    console.log(skill2rating.value);
    if (skill2rating.value < 10) {
        $(resumeSkillRating2).attr('class', 'progress-bar bg-purple-400 w-0');
    } else if (skill2rating.value > 10 && skill2rating.value < 30) {
        $(resumeSkillRating2).attr('class', 'progress-bar bg-purple-400 w-25');
    } else if (skill2rating.value > 40 && skill2rating.value < 60) {
        $(resumeSkillRating2).attr('class', 'progress-bar bg-purple-400 w-50');
    } else if (skill2rating.value > 61 && skill2rating.value < 80) {
        $(resumeSkillRating2).attr('class', 'progress-bar bg-purple-400 w-75');
    } else if (skill2rating.value > 81) {
        $(resumeSkillRating2).attr('class', 'progress-bar bg-purple-400 w-100');
    }
});

$(skill3rating).change(function () {
    console.log(skill3rating.value);
    if (skill3rating.value < 10) {
        $(resumeSkillRating3).attr('class', 'progress-bar bg-purple-400 w-0');
    } else if (skill3rating.value > 10 && skill3rating.value < 30) {
        $(resumeSkillRating3).attr('class', 'progress-bar bg-purple-400 w-25');
    } else if (skill3rating.value > 40 && skill3rating.value < 60) {
        $(resumeSkillRating3).attr('class', 'progress-bar bg-purple-400 w-50');
    } else if (skill3rating.value > 61 && skill3rating.value < 80) {
        $(resumeSkillRating3).attr('class', 'progress-bar bg-purple-400 w-75');
    } else if (skill3rating.value > 81) {
        $(resumeSkillRating3).attr('class', 'progress-bar bg-purple-400 w-100');
    }
});

$(skill4rating).change(function () {
    console.log(skill4rating.value);
    if (skill4rating.value < 10) {
        $(resumeSkillRating4).attr('class', 'progress-bar bg-purple-400 w-0');
    } else if (skill4rating.value > 10 && skill4rating.value < 30) {
        $(resumeSkillRating4).attr('class', 'progress-bar bg-purple-400 w-25');
    } else if (skill4rating.value > 40 && skill4rating.value < 60) {
        $(resumeSkillRating4).attr('class', 'progress-bar bg-purple-400 w-50');
    } else if (skill4rating.value > 61 && skill4rating.value < 80) {
        $(resumeSkillRating4).attr('class', 'progress-bar bg-purple-400 w-75');
    } else if (skill4rating.value > 81) {
        $(resumeSkillRating4).attr('class', 'progress-bar bg-purple-400 w-100');
    }
});

$(skill5rating).change(function () {
    console.log(skill5rating.value);
    if (skill5rating.value < 10) {
        $(resumeSkillRating5).attr('class', 'progress-bar bg-purple-400 w-0');
    } else if (skill5rating.value > 10 && skill5rating.value < 30) {
        $(resumeSkillRating5).attr('class', 'progress-bar bg-purple-400 w-25');
    } else if (skill5rating.value > 40 && skill5rating.value < 60) {
        $(resumeSkillRating5).attr('class', 'progress-bar bg-purple-400 w-50');
    } else if (skill5rating.value > 61 && skill5rating.value < 80) {
        $(resumeSkillRating5).attr('class', 'progress-bar bg-purple-400 w-75');
    } else if (skill5rating.value > 81) {
        $(resumeSkillRating5).attr('class', 'progress-bar bg-purple-400 w-100');
    }
});

$(skill6rating).change(function () {
    console.log(skill6rating.value);
    if (skill6rating.value < 10) {
        $(resumeSkillRating6).attr('class', 'progress-bar bg-purple-400 w-0');
    } else if (skill6rating.value > 10 && skill6rating.value < 30) {
        $(resumeSkillRating6).attr('class', 'progress-bar bg-purple-400 w-25');
    } else if (skill6rating.value > 40 && skill6rating.value < 60) {
        $(resumeSkillRating6).attr('class', 'progress-bar bg-purple-400 w-50');
    } else if (skill6rating.value > 61 && skill6rating.value < 80) {
        $(resumeSkillRating6).attr('class', 'progress-bar bg-purple-400 w-75');
    } else if (skill6rating.value > 81) {
        $(resumeSkillRating6).attr('class', 'progress-bar bg-purple-400 w-100');
    }
});

interest.addEventListener('keyup', function (event) {
    resumeInterest.innerHTML = interest.value;
});

dob.addEventListener("change", function (event) {
    resumeDOB.innerHTML = "Date: " + dob.value;
});

place.addEventListener('keyup', function (event) {
    resumePlace.innerHTML = place.value;
})

var resume = document.getElementById("resume");

function downloadResume(PrintData) {
    var printContents = resume.innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

function saveResume() {
    var themeid = Math.floor(Math.random() * 100000);
    console.log(themeid);

    //create a post api request
    $.post("/resume/save/theme_1", {
            themeid:themeid,
            name: username.value,
            email:email.value,
            mobile_no:phoneno.value,
            website:website.value,
            github:gitrepo.value,
            position:role.value,
            address:address.value,
            experience_position:position.value,
            company:company.value,
            experience_from_date:fromdate.value,
            experience_to_date:todate.value,
            point_1:point1.value,
            point_2:point2.value,
            point_3:point3.value,
            point_4:point4.value,
            college:collegeName.value,
            degree:degree.value,
            education_from_date:eduFromDate.value,
            education_to_date:eduToDate.value,
            second_college_name:collegeName1.value,
            second_college_degree:degree1.value,
            second_college_from_date:eduFromDate1.value,
            second_college_to_date:eduToDate1.value,
            skill_1:skill1.value,
            skill_2:skill2.value,
            skill_3:skill3.value,
            skill_4:skill4.value,
            skill_5:skill5.value,
            skill_6:skill6.value,
            skill_1_rating:skill1rating.value,
            skill_2_rating:skill2rating.value,
            skill_3_rating:skill3rating.value,
            skill_4_rating:skill4rating.value,
            skill_5_rating:skill5rating.value,
            skill_6_rating:skill6rating.value,
            interest:interest.value,
            dob:dob.value,
            place:place.value
    }, function (data, status) {
        if (data.code == 1) {
            swal(data.head, data.msg, "error");
        } else if (data.code == 0) {
            swal(data.head, data.msg, "success");
            window.location.href = '/resume/theme_1'+data.themeid;
        }
    });
}








